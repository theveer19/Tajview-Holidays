"""Generates the illustration set for Tajview Holidays.
Flat vector scenes, brand palette, no photography needed."""
import pathlib

OUT = pathlib.Path("/home/claude/tajview-holidays/assets/img")
OUT.mkdir(parents=True, exist_ok=True)

MARBLE_TOP, MARBLE_BOT = "#FDFBF6", "#DCCDB4"

# ----------------------------------------------------------------- shapes --
def onion(cx, base, w, h):
    """Bulbous Mughal dome."""
    a = w / 2
    return (f"M{cx-a} {base} "
            f"C{cx-a*1.08} {base-h*.42} {cx-a*.70} {base-h*.80} {cx} {base-h} "
            f"C{cx+a*.70} {base-h*.80} {cx+a*1.08} {base-h*.42} {cx+a} {base} Z")

def finial(cx, top, h=26):
    return (f'<path d="M{cx} {top-h} L{cx} {top}" stroke="currentColor" stroke-width="3"/>'
            f'<circle cx="{cx}" cy="{top-h-6}" r="5"/>'
            f'<path d="M{cx} {top-h-18} l4 7 -4 7 -4 -7Z"/>')

def arch(x, y, w, h, pointed=True):
    """Cusped/pointed arch opening, y = springing base line (bottom)."""
    a = w / 2
    cx = x + a
    if pointed:
        return (f"M{x} {y} L{x} {y-h*.55} "
                f"C{x} {y-h*.86} {cx-a*.45} {y-h} {cx} {y-h} "
                f"C{cx+a*.45} {y-h} {x+w} {y-h*.86} {x+w} {y-h*.55} "
                f"L{x+w} {y} Z")
    return f"M{x} {y} L{x} {y-h*.6} A{a} {a} 0 0 1 {x+w} {y-h*.6} L{x+w} {y} Z"

def chhatri(cx, base, w=42, pillar=26):
    """Domed kiosk on pillars."""
    a = w / 2
    p = []
    p.append(f'<rect x="{cx-a-4}" y="{base-4}" width="{w+8}" height="5" rx="1"/>')
    for dx in (-a + 4, -a / 3, a / 3, a - 4):
        p.append(f'<rect x="{cx+dx-2}" y="{base-pillar}" width="4" height="{pillar}"/>')
    p.append(f'<rect x="{cx-a-3}" y="{base-pillar-6}" width="{w+6}" height="6" rx="2"/>')
    p.append(f'<path d="{onion(cx, base-pillar-6, w*.78, w*.62)}"/>')
    p.append(finial(cx, base - pillar - 6 - w * .62, 14))
    return "".join(p)

def minaret(cx, base, h, w=15):
    a = w / 2
    bands = "".join(
        f'<rect x="{cx-a-2}" y="{base-h*f}" width="{w+4}" height="5" rx="2" opacity=".75"/>'
        for f in (.3, .55, .78))
    return (f'<path d="M{cx-a} {base} L{cx-a*.72} {base-h} L{cx+a*.72} {base-h} L{cx+a} {base} Z"/>'
            f'{bands}'
            f'<rect x="{cx-a-5}" y="{base-h-7}" width="{w+10}" height="7" rx="2"/>'
            f'<path d="{onion(cx, base-h-7, w*1.25, w*1.1)}"/>'
            f'{finial(cx, base-h-7-w*1.1, 16)}')

def birds(pts):
    return "".join(
        f'<path d="M{x} {y} q5 -4 9 0 q4 -4 9 0" fill="none" stroke="currentColor" '
        f'stroke-width="1.6" opacity=".55" transform="scale({s})" '
        f'transform-origin="{x}px {y}px"/>' for x, y, s in pts)

# ------------------------------------------------------------------ frame --
def svg(name, sky_top, sky_bot, sun, sun_y, scene, label,
        ground=430, water=True, ink="#F6EFE2", haze="#0B1B3C", extra=""):
    """Compose one scene. `scene` is drawn once and mirrored into the water."""
    refl = (f'<g clip-path="url(#pool)" opacity=".26" '
            f'transform="translate(0 {2*ground}) scale(1 -1)">'
            f'<g color="{ink}" fill="{ink}">{scene}</g></g>'
            f'<g stroke="{ink}" stroke-opacity=".30" stroke-width="2">'
            + "".join(f'<path d="M{90+((i*37)%120)} {ground+22+i*26} h{150+((i*53)%260)}"/>'
                      for i in range(6)) + "</g>") if water else ""

    ground_fill = f'<rect x="0" y="{ground}" width="800" height="{600-ground}" fill="{haze}" fill-opacity="{.55 if water else .85}"/>'

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="{label}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{sky_top}"/><stop offset="1" stop-color="{sky_bot}"/>
    </linearGradient>
    <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{MARBLE_TOP}"/><stop offset="1" stop-color="{MARBLE_BOT}"/>
    </linearGradient>
    <pattern id="jali" width="54" height="54" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#E6A338" stroke-opacity=".13" stroke-width="1">
        <path d="M27 0 54 27 27 54 0 27Z"/><path d="M27 13 41 27 27 41 13 27Z"/>
      </g>
    </pattern>
    <clipPath id="pool"><rect x="0" y="{ground}" width="800" height="{600-ground}"/></clipPath>
    <radialGradient id="glow"><stop offset="0" stop-color="{sun}" stop-opacity=".55"/><stop offset="1" stop-color="{sun}" stop-opacity="0"/></radialGradient>
  </defs>

  <rect width="800" height="600" fill="url(#sky)"/>
  <circle cx="400" cy="{sun_y}" r="170" fill="url(#glow)"/>
  <circle cx="400" cy="{sun_y}" r="54" fill="{sun}" fill-opacity=".9"/>
  <rect width="800" height="600" fill="url(#jali)"/>
  {extra}
  {ground_fill}
  {refl}
  <g color="{ink}" fill="url(#stone)" stroke="none">{scene}</g>
</svg>
'''

# ----------------------------------------------------------------- scenes --
def taj_scene(g=430):
    s = []
    # plinth
    s.append(f'<rect x="228" y="{g-32}" width="344" height="32"/>')
    # minarets (outer pair tall, inner pair set back)
    s.append(f'<g opacity=".82">{minaret(302, g-32, 128, 12)}{minaret(498, g-32, 128, 12)}</g>')
    s.append(minaret(252, g - 32, 150))
    s.append(minaret(548, g - 32, 150))
    # main block
    s.append(f'<rect x="328" y="{g-130}" width="144" height="98"/>')
    s.append(f'<rect x="312" y="{g-120}" width="176" height="88" rx="3"/>')
    # great iwan + side arches, cut as dark openings
    s.append(f'<path d="{arch(378,g-36,44,74)}" fill="{"#0B1B3C"}" fill-opacity=".72"/>')
    s.append(f'<path d="{arch(332,g-44,30,46)}" fill="#0B1B3C" fill-opacity=".55"/>')
    s.append(f'<path d="{arch(438,g-44,30,46)}" fill="#0B1B3C" fill-opacity=".55"/>')
    # drum + dome
    s.append(f'<rect x="368" y="{g-148}" width="64" height="20" rx="4"/>')
    s.append(f'<path d="{onion(400, g-146, 104, 108)}"/>')
    s.append(f'<g fill="currentColor">{finial(400, g-254, 30)}</g>')
    # flanking chhatris
    s.append(chhatri(338, g - 130, 44))
    s.append(chhatri(462, g - 130, 44))
    return "".join(s)

def fort_scene(g=470):
    s = []
    s.append(f'<path d="M120 {g} V{g-120} h560 V{g} Z"/>')
    # crenellations
    merlons = "".join(f'<path d="M{x} {g-120} h22 v-16 h-22Z"/>' for x in range(124, 672, 34))
    s.append(merlons)
    # bastion towers
    for cx in (170, 400, 630):
        s.append(f'<path d="M{cx-44} {g} V{g-166} a44 30 0 0 1 88 0 V{g}Z"/>')
        s.append("".join(f'<path d="M{cx-44+i*22} {g-176} h16 v-14 h-16Z"/>' for i in range(4)))
        s.append(chhatri(cx, g - 186, 50))
    # gateway
    s.append(f'<path d="{arch(368,g,64,118)}" fill="#0B1B3C" fill-opacity=".7"/>')
    for x in (236, 282, 500, 546):
        s.append(f'<path d="{arch(x,g-28,30,48)}" fill="#0B1B3C" fill-opacity=".45"/>')
    return "".join(s)

def hawa_scene(g=470):
    """Hawa Mahal — a pyramid of honeycomb windows, narrowing as it rises."""
    s = []
    widths = (520, 448, 376, 300, 220)
    for i, w in enumerate(widths):
        y = g - 52 * (i + 1)
        s.append(f'<rect x="{400-w//2}" y="{y}" width="{w}" height="52"/>')
        s.append(f'<rect x="{400-w//2-8}" y="{y}" width="{w+16}" height="7" rx="2" opacity=".92"/>')
        # window row
        start = 400 - w // 2 + 16
        for x in range(start, 400 + w // 2 - 32, 44):
            s.append(f'<path d="{arch(x,y+46,28,36)}" fill="#0B1B3C" fill-opacity=".62"/>')
    # ground floor with the gateway
    s.append(f'<rect x="140" y="{g-52}" width="520" height="52"/>')
    s.append(f'<path d="{arch(364,g,72,88)}" fill="#0B1B3C" fill-opacity=".74"/>')
    for x in (190, 254, 480, 544):
        s.append(f'<path d="{arch(x,g,34,52)}" fill="#0B1B3C" fill-opacity=".5"/>')
    for cx in (338, 400, 462):
        s.append(chhatri(cx, g - 52 * 5, 44))
    return "".join(s)

def amber_scene(g=430):
    s = []
    # two ridges, the far one paler so the hill reads as depth
    s.append(f'<path d="M0 {g} L170 {g-150} L300 {g-96} L430 {g-186} L600 {g-80} L800 {g} Z" '
             f'fill="#0B1B3C" fill-opacity=".32"/>')
    s.append(f'<path d="M40 {g} L210 {g-210} L350 {g-140} L500 {g-268} L690 {g-120} L800 {g} Z" '
             f'fill="#0B1B3C" fill-opacity=".62"/>')
    # rampart wall climbing the ridge line, with crenellations
    ramp = f"M176 {g-96} L214 {g-192} L344 {g-130} L470 {g-214}"
    s.append(f'<path d="{ramp}" fill="none" stroke="currentColor" stroke-width="11" stroke-opacity=".8" stroke-linejoin="round"/>')
    s.append(f'<path d="{ramp}" fill="none" stroke="#0B1B3C" stroke-width="3" stroke-opacity=".35" stroke-linejoin="round"/>')
    # palace block on the ridge
    s.append(f'<rect x="392" y="{g-256}" width="230" height="92"/>')
    s.append(f'<rect x="412" y="{g-302}" width="190" height="48"/>')
    for x in range(406, 600, 34):
        s.append(f'<path d="{arch(x,g-170,24,36)}" fill="#0B1B3C" fill-opacity=".55"/>')
        s.append(f'<path d="{arch(x,g-262,22,30)}" fill="#0B1B3C" fill-opacity=".45"/>')
    for cx in (428, 507, 586):
        s.append(chhatri(cx, g - 302, 44))
    # watchtower on the left peak
    s.append(f'<rect x="180" y="{g-212}" width="44" height="74"/>')
    s.append(chhatri(202, g - 212, 40))
    return "".join(s)

def jal_scene(g=420):
    """Jal Mahal — palace sitting in the lake."""
    s = [f'<rect x="268" y="{g-96}" width="264" height="96" rx="3"/>',
         f'<rect x="300" y="{g-150}" width="200" height="56" rx="3"/>']
    for x in range(282, 520, 38):
        s.append(f'<path d="{arch(x,g-14,26,44)}" fill="#0B1B3C" fill-opacity=".6"/>')
    for x in range(312, 490, 36):
        s.append(f'<path d="{arch(x,g-104,24,36)}" fill="#0B1B3C" fill-opacity=".5"/>')
    for cx in (282, 400, 518):
        s.append(chhatri(cx, g - 150 if cx == 400 else g - 96, 46))
    s.append(f'<rect x="258" y="{g-100}" width="284" height="7" rx="2"/>')
    return "".join(s)

def jodhpur_scene(g=470):
    """Mehrangarh above the blue city."""
    s = [f'<path d="M70 {g-96} C140 {g-150} 150 {g-262} 214 {g-292} '
         f'L586 {g-292} C656 {g-258} 652 {g-146} 700 {g-92} '
         f'L660 {g-70} L120 {g-70} Z" fill="#0B1B3C" fill-opacity=".5"/>']
    s.append(f'<path d="M214 {g-292} l26 -44 l44 30 l38 -36 l40 34 l52 -40 l46 38 l40 -30 l32 42Z" '
             f'fill="#0B1B3C" fill-opacity=".3"/>')
    s.append(f'<rect x="200" y="{g-356}" width="400" height="118"/>')
    s.append("".join(f'<path d="M{x} {g-356} h20 v-15 h-20Z"/>' for x in range(204, 596, 32)))
    for x in range(220, 580, 40):
        s.append(f'<path d="{arch(x,g-252,26,40)}" fill="#0B1B3C" fill-opacity=".55"/>')
    s.append(f'<path d="M160 {g-238} L200 {g-356} v118 Z" opacity=".85"/>')
    s.append(f'<path d="M640 {g-238} L600 {g-356} v118 Z" opacity=".85"/>')
    for cx in (250, 400, 550):
        s.append(chhatri(cx, g - 371, 48))
    # blue houses below
    boxes = ""
    for i, x in enumerate(range(40, 780, 58)):
        h = 46 + (i * 29) % 56
        boxes += (f'<rect x="{x}" y="{g-h}" width="48" height="{h}" rx="2" fill="#2F6BB8" fill-opacity=".85"/>'
                  f'<rect x="{x+12}" y="{g-h+14}" width="12" height="16" fill="#0B1B3C" fill-opacity=".5"/>')
    s.append(boxes)
    return "".join(s)

def udaipur_scene(g=440):
    s = [f'<path d="M0 {g} L150 {g-150} L300 {g-70} L430 {g-160} L600 {g-60} L800 {g-130} L800 {g} Z" '
         f'fill="#0B1B3C" fill-opacity=".4"/>']
    s.append(f'<rect x="286" y="{g-110}" width="228" height="110" rx="3"/>')
    s.append(f'<rect x="326" y="{g-166}" width="148" height="60" rx="3"/>')
    for x in range(300, 500, 34):
        s.append(f'<path d="{arch(x,g-16,24,40)}" fill="#0B1B3C" fill-opacity=".58"/>')
    for cx in (300, 400, 500):
        s.append(chhatri(cx, g - 110 if cx != 400 else g - 166, 44))
    # boat
    s.append(f'<path d="M560 {g+58} q34 26 76 0 Z" fill="currentColor" opacity=".8"/>'
             f'<path d="M598 {g+58} v-30 l26 22Z" fill="currentColor" opacity=".8"/>')
    return "".join(s)

def desert_scene(g=470):
    s = []
    # fort sitting on the far dune
    s.append(f'<g opacity=".95"><rect x="470" y="{g-146}" width="250" height="106"/>'
             + "".join(f'<path d="M{x} {g-146} h18 v-13 h-18Z"/>' for x in range(474, 716, 28))
             + f'<path d="M440 {g-40} V{g-128} a30 24 0 0 1 60 0 V{g-40}Z"/>'
             + f'<path d="M700 {g-40} V{g-128} a30 24 0 0 1 60 0 V{g-40}Z"/>'
             + "".join(f'<path d="{arch(x,g-46,26,38)}" fill="#0B1B3C" fill-opacity=".5"/>'
                       for x in range(500, 690, 40))
             + chhatri(595, g - 159, 44) + "</g>")
    # dunes, near one overlapping the fort base
    s.append(f'<path d="M0 {g-10} q180 -70 360 -18 t440 -34 V600 H0Z" fill="#0B1B3C" fill-opacity=".30"/>')
    s.append(f'<path d="M0 {g+54} q220 -86 450 -22 t350 -16 V600 H0Z" fill="#0B1B3C" fill-opacity=".48"/>')

    def camel(x, y, k=1):
        """Side view: body, hump, S-curved neck, small head, four legs."""
        return (f'<g transform="translate({x} {y}) scale({k})" fill="currentColor">'
                f'<path d="M6 2 q0 -16 14 -19 q12 -21 26 -3 q18 0 20 22 l0 8 q-32 7 -60 0Z"/>'
                f'<path d="M62 8 q6 -6 7 -22 q1 -17 11 -24 q7 -5 11 1 l9 -3 1 7 -9 3 '
                f'q-7 3 -7 11 q-1 22 -11 29Z"/>'
                f'<path d="M10 8 l-5 28 h6 l7 -26Z"/><path d="M26 10 l-1 26 h6 l3 -26Z"/>'
                f'<path d="M48 10 l2 26 h6 l-2 -26Z"/><path d="M62 8 l7 28 h6 l-7 -28Z"/>'
                f'</g>')
    s.append(f'<g opacity=".9">{camel(112, g+58, 1.45)}{camel(232, g+70, 1.2)}{camel(326, g+78, .95)}</g>')
    return "".join(s)

def delhi_scene(g=470):
    s = []
    # Qutub Minar — tapering tower with projecting balconies
    s.append(f'<path d="M122 {g} L138 {g-290} L174 {g-290} L190 {g}Z"/>')
    for f in (.24, .45, .64, .80):
        y, half = g - 290 * f, 34 - 11 * f
        s.append(f'<rect x="{156-half-5}" y="{y-9}" width="{half*2+10}" height="9" rx="2"/>')
        s.append(f'<rect x="{156-half-9}" y="{y-13}" width="{half*2+18}" height="5" rx="2" opacity=".85"/>')
    s.append(f'<path d="{onion(156,g-290,34,28)}"/>')
    s.append(f'<g fill="currentColor">{finial(156,g-318,16)}</g>')
    # India Gate
    s.append(f'<path d="M300 {g} V{g-190} h170 V{g} h-42 V{g-150} h-86 V{g}Z"/>')
    s.append(f'<rect x="292" y="{g-212}" width="186" height="24" rx="3"/>')
    s.append(f'<rect x="330" y="{g-236}" width="110" height="24" rx="3"/>')
    # Humayun's tomb
    s.append(f'<rect x="548" y="{g-96}" width="190" height="96" rx="3"/>')
    s.append(f'<path d="{arch(614,g,56,78)}" fill="#0B1B3C" fill-opacity=".65"/>')
    s.append(f'<rect x="608" y="{g-118}" width="70" height="24" rx="3"/>')
    s.append(f'<path d="{onion(643,g-116,92,86)}"/>')
    s.append(f'<g fill="currentColor">{finial(643,g-202,24)}</g>')
    s.append(chhatri(566, g - 96, 40) + chhatri(720, g - 96, 40))
    return "".join(s)

def train_scene(g=470):
    """The Gatimaan Express crossing an arched viaduct."""
    s = []
    deck = g - 60                      # top of the viaduct deck
    # viaduct piers and arches below the deck
    s.append(f'<path d="M0 {g+130} H800 V{deck} H0Z" fill="#0B1B3C" fill-opacity=".42"/>')
    for x in range(-20, 800, 118):
        s.append(f'<path d="{arch(x+16, g+130, 86, 108)}" fill="#060F23" fill-opacity=".55"/>')
    s.append(f'<rect x="0" y="{deck-10}" width="800" height="14" rx="2"/>')

    # rails
    s.append(f'<rect x="0" y="{deck-16}" width="800" height="4" opacity=".7"/>')

    # coaches
    for i, x in enumerate((60, 212, 364)):
        s.append(f'<rect x="{x}" y="{deck-78}" width="140" height="62" rx="12"/>')
        s.append(f'<rect x="{x+6}" y="{deck-74}" width="128" height="4" rx="2" fill="#B23A46" fill-opacity=".6"/>')
        for wx in range(x + 14, x + 124, 26):
            s.append(f'<rect x="{wx}" y="{deck-62}" width="18" height="20" rx="4" fill="#0B1B3C" fill-opacity=".62"/>')
        for bx in (x + 26, x + 106):
            s.append(f'<circle cx="{bx}" cy="{deck-12}" r="9" fill="currentColor"/>')
    # locomotive with a raked nose, at the front
    s.append(f'<path d="M516 {deck-16} V{deck-62} q0 -22 24 -26 l72 -14 q56 -8 92 22 '
             f'l22 18 q10 8 -4 12 Z"/>')
    for wx in range(548, 660, 28):
        s.append(f'<rect x="{wx}" y="{deck-56}" width="20" height="18" rx="4" fill="#0B1B3C" fill-opacity=".62"/>')
    s.append(f'<path d="M686 {deck-44} q26 2 38 18 h-38Z" fill="#0B1B3C" fill-opacity=".45"/>')
    for bx in (552, 628, 690):
        s.append(f'<circle cx="{bx}" cy="{deck-12}" r="9" fill="currentColor"/>')
    s.append(f'<circle cx="724" cy="{deck-30}" r="7" fill="#E6A338"/>')
    return "".join(s)

def window_scene(g=520):
    """A jharokha window looking out at the Taj — used for About / the office."""
    s = []
    # the view through the opening: a small Taj on the horizon
    s.append(f'<g transform="translate(400 {g-120}) scale(.52) translate(-400 -330)" opacity=".95">'
             + taj_scene(430) + '</g>')
    # the wall, with the arch cut out of it (evenodd)
    s.append(f'<path d="M0 0 H800 V600 H0Z M150 {g} L150 {g-242} '
             f'C150 {g-378} 280 {g-440} 400 {g-440} C520 {g-440} 650 {g-378} 650 {g-242} L650 {g} Z" '
             f'fill="#060F23" fill-opacity=".92" fill-rule="evenodd"/>')
    s.append(f'<path d="{arch(150,g,500,440)}" fill="none" stroke="currentColor" stroke-width="6" opacity=".92"/>')
    s.append(f'<path d="{arch(178,g,444,398)}" fill="none" stroke="currentColor" stroke-width="2" opacity=".45"/>')
    # jali screens either side of the opening
    for x in (36, 672):
        s.append(f'<rect x="{x}" y="{g-330}" width="92" height="330" rx="6" fill="currentColor" fill-opacity=".10"/>')
        s.append(f'<path d="{arch(x+10,g-24,72,250)}" fill="none" stroke="currentColor" '
                 f'stroke-width="2" opacity=".45"/>')
    # sill and floor
    s.append(f'<rect x="118" y="{g}" width="564" height="24" rx="4"/>')
    s.append(f'<rect x="92" y="{g+24}" width="616" height="14" rx="4" opacity=".75"/>')
    # a hanging lamp, because the room needs one thing that is not architecture
    s.append(f'<path d="M400 0 V{g-392}" stroke="currentColor" stroke-width="2" opacity=".5" fill="none"/>')
    s.append(f'<path d="{onion(400, g-356, 54, 46)}" fill="#E6A338" fill-opacity=".85"/>')
    s.append(f'<circle cx="400" cy="{g-350}" r="7" fill="#E6A338"/>')
    return "".join(s)


def ghats_scene(g=430):
    """Varanasi — stepped ghats, temple spires, boats on the Ganga."""
    s = []
    # temple skyline behind the steps
    for cx, h, w in ((180, 150, 70), (300, 120, 56), (430, 190, 84), (560, 130, 60), (670, 160, 72)):
        s.append(f'<rect x="{cx-w//2}" y="{g-100-h}" width="{w}" height="{h}"/>')
        s.append(f'<path d="M{cx-w//2} {g-100-h} L{cx} {g-100-h-w*0.9} L{cx+w//2} {g-100-h}Z"/>')
        s.append(f'<g fill="currentColor">{finial(cx, g-100-h-w*0.9, 18)}</g>')
        for x in range(cx-w//2+8, cx+w//2-14, 22):
            s.append(f'<path d="{arch(x,g-100-h*0.25,14,22)}" fill="#0B1B3C" fill-opacity=".55"/>')
    # the ghat steps
    for i in range(7):
        s.append(f'<rect x="{40+i*14}" y="{g-100+i*15}" width="{720-i*28}" height="15" '
                 f'opacity="{0.95 - i*0.07}"/>')
    # boats on the water
    def boat(x, y, k=1):
        return (f'<g transform="translate({x} {y}) scale({k})" fill="currentColor">'
                f'<path d="M0 0 q42 26 92 0 l-8 12 q-38 16 -76 0Z"/>'
                f'<path d="M44 -2 v-34 h4 v34Z"/><path d="M48 -34 l26 16 -26 10Z" opacity=".8"/></g>')
    s.append(f'<g opacity=".9">{boat(120, g+62, 1.0)}{boat(330, g+96, 1.25)}{boat(560, g+70, .85)}</g>')
    return "".join(s)

def golden_temple_scene(g=430):
    """Amritsar — the gilded sanctum at the end of its causeway, in the sarovar."""
    s = []
    s.append(f'<rect x="300" y="{g-96}" width="200" height="96" rx="4"/>')
    s.append(f'<rect x="286" y="{g-108}" width="228" height="14" rx="4"/>')
    for x in range(312, 490, 36):
        s.append(f'<path d="{arch(x,g-16,26,42)}" fill="#0B1B3C" fill-opacity=".6"/>')
    s.append(f'<rect x="332" y="{g-150}" width="136" height="44" rx="3"/>')
    s.append(f'<path d="{onion(400, g-148, 104, 92)}"/>')
    s.append(f'<g fill="currentColor">{finial(400, g-240, 28)}</g>')
    for cx in (300, 500):
        s.append(chhatri(cx, g - 108, 46))
    for cx in (344, 456):
        s.append(chhatri(cx, g - 150, 38))
    # causeway out to the near shore
    s.append(f'<rect x="376" y="{g}" width="48" height="150" opacity=".85"/>')
    for x in (372, 424):
        s.append(f'<rect x="{x}" y="{g+20}" width="5" height="120" opacity=".7"/>')
    return "".join(s)

def backwaters_scene(g=400):
    """Kerala — a houseboat under palms on still water."""
    s = []
    # palms along the far bank
    def palm(x, h, k=1):
        fronds = "".join(f'<path d="M0 {-h} q{28*d} -16 {52*d} -4 q-26 -4 -52 10Z" transform="rotate({r} 0 {-h})"/>'
                         for d, r in ((1,0),(1,-28),(-1,0),(-1,28),(1,-55),(-1,55)))
        return (f'<g transform="translate({x} 0) scale({k})" fill="currentColor">'
                f'<path d="M-4 0 q2 {-h*0.6} 6 {-h} l5 1 q-5 {h*0.42} -4 {h-1}Z"/>{fronds}</g>')
    s.append(f'<g transform="translate(0 {g})" opacity=".92">'
             + palm(70, 150, 1.0) + palm(140, 118, .85) + palm(690, 160, 1.05) + palm(620, 120, .8) + '</g>')
    s.append(f'<path d="M0 {g} h800 v10 h-800Z" opacity=".5"/>')
    # houseboat: curved thatched roof over a long hull
    s.append(f'<path d="M210 {g+10} h400 q30 0 34 18 l10 42 q-224 26 -488 0 l10 -42 q4 -18 34 -18Z"/>')
    s.append(f'<path d="M236 {g+10} q164 -78 330 0 Z" opacity=".9"/>')
    s.append(f'<path d="M250 {g+6} q152 -64 302 0" fill="none" stroke="#0B1B3C" stroke-opacity=".3" stroke-width="3"/>')
    for x in range(268, 540, 48):
        s.append(f'<rect x="{x}" y="{g+24}" width="30" height="24" rx="5" fill="#0B1B3C" fill-opacity=".55"/>')
    return "".join(s)

def wildlife_scene(g=440):
    """Ranthambore — a safari jeep under the fort wall, in the forest."""
    s = []
    # ridge with the old fort wall along it
    s.append(f'<path d="M0 {g} L220 {g-170} L430 {g-96} L640 {g-190} L800 {g}Z" fill="#0B1B3C" fill-opacity=".5"/>')
    s.append(f'<path d="M190 {g-150} L300 {g-196} L470 {g-140} L640 {g-186}" fill="none" '
             f'stroke="currentColor" stroke-width="8" stroke-opacity=".7" stroke-linejoin="round"/>')
    s.append(chhatri(300, g - 196, 44))
    # trees
    def tree(x, h, k=1):
        return (f'<g transform="translate({x} {g}) scale({k})" fill="currentColor" opacity=".9">'
                f'<path d="M-3 0 v{-h*0.55} h6 V0Z"/>'
                f'<path d="M0 {-h} q-46 6 -50 32 q-26 10 -8 30 q40 16 116 0 q18 -20 -8 -30 q-4 -26 -50 -32Z"/></g>')
    s.append(tree(96, 120, 1.0) + tree(700, 136, 1.1) + tree(188, 92, .75))
    # jeep
    s.append(f'<g transform="translate(300 {g+56})" fill="currentColor">'
             f'<path d="M0 0 h150 v-26 h34 l22 26 h18 v26 h-224Z"/>'
             f'<path d="M12 -26 h126 v-28 h-126Z" opacity=".55"/>'
             f'<rect x="12" y="-72" width="170" height="6" rx="3"/>'
             f'<path d="M12 -72 v18 M98 -72 v18 M182 -72 v18" stroke="currentColor" stroke-width="5"/>'
             f'<circle cx="44" cy="30" r="20"/><circle cx="178" cy="30" r="20"/>'
             f'<circle cx="44" cy="30" r="8" fill="#0B1B3C" fill-opacity=".5"/>'
             f'<circle cx="178" cy="30" r="8" fill="#0B1B3C" fill-opacity=".5"/></g>')
    return "".join(s)

# ------------------------------------------------------------------ write --
SCENES = {
    "taj-sunrise":  dict(sky_top="#2A1B4A", sky_bot="#E98B4E", sun="#FFD28A", sun_y=300,
                         scene=taj_scene(), label="The Taj Mahal at sunrise"),
    "taj-mahal":    dict(sky_top="#060F23", sky_bot="#1E3C73", sun="#E6A338", sun_y=250,
                         scene=taj_scene(), label="The Taj Mahal above its reflecting pool"),
    "agra-fort":    dict(sky_top="#0B1B3C", sky_bot="#7E3A3F", sun="#E6A338", sun_y=290,
                         scene=fort_scene(), label="Agra Fort", ground=470, water=False),
    "hawa-mahal":   dict(sky_top="#13295A", sky_bot="#B23A46", sun="#F3CE86", sun_y=270,
                         scene=hawa_scene(), label="Hawa Mahal, Jaipur", ground=470, water=False),
    "amber-fort":   dict(sky_top="#060F23", sky_bot="#2B5F8C", sun="#E6A338", sun_y=240,
                         scene=amber_scene(), label="Amber Fort above Maota Lake"),
    "jal-mahal":    dict(sky_top="#0B1B3C", sky_bot="#0E6E66", sun="#F3CE86", sun_y=230,
                         scene=jal_scene(), label="Jal Mahal on the lake", ground=420),
    "jodhpur":      dict(sky_top="#0D1B40", sky_bot="#3E6FB0", sun="#E6A338", sun_y=250,
                         scene=jodhpur_scene(), label="Mehrangarh Fort over the blue city",
                         ground=470, water=False),
    "udaipur":      dict(sky_top="#191436", sky_bot="#C9655F", sun="#FFD28A", sun_y=280,
                         scene=udaipur_scene(), label="The lake palace at Udaipur", ground=440),
    "jaisalmer":    dict(sky_top="#13295A", sky_bot="#D8923E", sun="#FFE0A8", sun_y=300,
                         scene=desert_scene(), label="Camel caravan near Jaisalmer",
                         ground=470, water=False),
    "delhi":        dict(sky_top="#060F23", sky_bot="#355A86", sun="#E6A338", sun_y=260,
                         scene=delhi_scene(), label="Qutub Minar, India Gate and Humayun's Tomb",
                         ground=470, water=False),
    "train":        dict(sky_top="#0B1B3C", sky_bot="#0E6E66", sun="#F3CE86", sun_y=250,
                         scene=train_scene(), label="The Gatimaan Express on a viaduct",
                         ground=470, water=False),
    "varanasi":     dict(sky_top="#1A1038", sky_bot="#E0894B", sun="#FFD28A", sun_y=290,
                         scene=ghats_scene(), label="The ghats at Varanasi"),
    "amritsar":     dict(sky_top="#07142E", sky_bot="#1E3C73", sun="#E6A338", sun_y=250,
                         scene=golden_temple_scene(), label="The Golden Temple at Amritsar"),
    "kerala":       dict(sky_top="#0B2B3C", sky_bot="#0E6E66", sun="#F3CE86", sun_y=240,
                         scene=backwaters_scene(), label="A houseboat on the Kerala backwaters", ground=400),
    "ranthambore":  dict(sky_top="#0B1B3C", sky_bot="#6E5A2E", sun="#E6A338", sun_y=270,
                         scene=wildlife_scene(), label="A safari jeep below Ranthambore fort",
                         ground=440, water=False),
    "office":       dict(sky_top="#0B1B3C", sky_bot="#1E3C73", sun="#E6A338", sun_y=300,
                         scene=window_scene(), label="An arched window onto the city",
                         ground=560, water=False),
}

for name, cfg in SCENES.items():
    (OUT / f"{name}.svg").write_text(svg(name, **cfg))

# remove the earlier generic placeholders
for old in OUT.glob("placeholder-*.svg"):
    old.unlink()

print(sorted(p.name for p in OUT.iterdir()))
