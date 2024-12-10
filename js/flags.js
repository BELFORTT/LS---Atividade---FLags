const flags = [
  {
    id: 'ad',
    imagem: '../imagens/ad.png',
    nome: 'Andorra',
  },
  {
    id: 'ae',
    imagem: '../imagens/ae.png',
    nome: 'United Arab Emirates',
  },
  {
    id: 'af',
    imagem: '../imagens/af.png',
    nome: 'Afghanistan',
  },
  {
    id: 'ag',
    imagem: '../imagens/ag.png',
    nome: 'Antigua and Barbuda',
  },
  {
    id: 'ai',
    imagem: '../imagens/ai.png',
    nome: 'Anguilla',
  },
  {
    id: 'al',
    imagem: '../imagens/al.png',
    nome: 'Albania',
  },
  {
    id: 'am',
    imagem: '../imagens/am.png',
    nome: 'Armenia',
  },
  {
    id: 'an',
    imagem: '../imagens/an.png',
    nome: 'Netherlands Antilles',
  },
  {
    id: 'ao',
    imagem: '../imagens/ao.png',
    nome: 'Angola',
  },
  {
    id: 'aq',
    imagem: '../imagens/aq.png',
    nome: 'Antarctica',
  },
  {
    id: 'ar',
    imagem: '../imagens/ar.png',
    nome: 'Argentina',
  },
  {
    id: 'as',
    imagem: '../imagens/as.png',
    nome: 'American Samoa',
  },
  {
    id: 'at',
    imagem: '../imagens/at.png',
    nome: 'Austria',
  },
  {
    id: 'au',
    imagem: '../imagens/au.png',
    nome: 'Australia',
  },
  {
    id: 'aw',
    imagem: '../imagens/aw.png',
    nome: 'Aruba',
  },
  {
    id: 'ax',
    imagem: '../imagens/ax.png',
    nome: 'Åland Islands',
  },
  {
    id: 'az',
    imagem: '../imagens/az.png',
    nome: 'Azerbaijan',
  },
  {
    id: 'ba',
    imagem: '../imagens/ba.png',
    nome: 'Bosnia and Herzegovina',
  },
  {
    id: 'bb',
    imagem: '../imagens/bb.png',
    nome: 'Barbados',
  },
  {
    id: 'bd',
    imagem: '../imagens/bd.png',
    nome: 'Bangladesh',
  },
  {
    id: 'be',
    imagem: '../imagens/be.png',
    nome: 'Belgium',
  },
  {
    id: 'bf',
    imagem: '../imagens/bf.png',
    nome: 'Burkina Faso',
  },
  {
    id: 'bg',
    imagem: '../imagens/bg.png',
    nome: 'Bulgaria',
  },
  {
    id: 'bh',
    imagem: '../imagens/bh.png',
    nome: 'Bahrain',
  },
  {
    id: 'bi',
    imagem: '../imagens/bi.png',
    nome: 'Burundi',
  },
  {
    id: 'bj',
    imagem: '../imagens/bj.png',
    nome: 'Benin',
  },
  {
    id: 'bl',
    imagem: '../imagens/bl.png',
    nome: 'Saint Barthélemy',
  },
  {
    id: 'bm',
    imagem: '../imagens/bm.png',
    nome: 'Bermuda',
  },
  {
    id: 'bn',
    imagem: '../imagens/bn.png',
    nome: 'Brunei Darussalam',
  },
  {
    id: 'bo',
    imagem: '../imagens/bo.png',
    nome: 'Bolivia',
  },
  {
    id: 'bq',
    imagem: '../imagens/bq.png',
    nome: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    id: 'br',
    imagem: '../imagens/br.png',
    nome: 'Brazil',
  },
  {
    id: 'bs',
    imagem: '../imagens/bs.png',
    nome: 'Bahamas',
  },
  {
    id: 'bt',
    imagem: '../imagens/bt.png',
    nome: 'Bhutan',
  },
  {
    id: 'bv',
    imagem: '../imagens/bv.png',
    nome: 'Bouvet Island',
  },
  {
    id: 'bw',
    imagem: '../imagens/bw.png',
    nome: 'Botswana',
  },
  {
    id: 'by',
    imagem: '../imagens/by.png',
    nome: 'Belarus',
  },
  {
    id: 'bz',
    imagem: '../imagens/bz.png',
    nome: 'Belize',
  },
  {
    id: 'ca',
    imagem: '../imagens/ca.png',
    nome: 'Canada',
  },
  {
    id: 'cc',
    imagem: '../imagens/cc.png',
    nome: 'Cocos (Keeling) Islands',
  },
  {
    id: 'cd',
    imagem: '../imagens/cd.png',
    nome: 'Congo, The Democratic Republic Of The',
  },
  {
    id: 'cf',
    imagem: '../imagens/cf.png',
    nome: 'Central African Republic',
  },
  {
    id: 'cg',
    imagem: '../imagens/cg.png',
    nome: 'Congo',
  },
  {
    id: 'ch',
    imagem: '../imagens/ch.png',
    nome: 'Switzerland',
  },
  {
    id: 'ci',
    imagem: '../imagens/ci.png',
    nome: "Côte D'Ivoire",
  },
  {
    id: 'ck',
    imagem: '../imagens/ck.png',
    nome: 'Cook Islands',
  },
  {
    id: 'cl',
    imagem: '../imagens/cl.png',
    nome: 'Chile',
  },
  {
    id: 'cm',
    imagem: '../imagens/cm.png',
    nome: 'Cameroon',
  },
  {
    id: 'cn',
    imagem: '../imagens/cn.png',
    nome: 'China',
  },
  {
    id: 'co',
    imagem: '../imagens/co.png',
    nome: 'Colombia',
  },
  {
    id: 'cr',
    imagem: '../imagens/cr.png',
    nome: 'Costa Rica',
  },
  {
    id: 'cu',
    imagem: '../imagens/cu.png',
    nome: 'Cuba',
  },
  {
    id: 'cv',
    imagem: '../imagens/cv.png',
    nome: 'Cape Verde',
  },
  {
    id: 'cw',
    imagem: '../imagens/cw.png',
    nome: 'Curaçao',
  },
  {
    id: 'cx',
    imagem: '../imagens/cx.png',
    nome: 'Christmas Island',
  },
  {
    id: 'cy',
    imagem: '../imagens/cy.png',
    nome: 'Cyprus',
  },
  {
    id: 'cz',
    imagem: '../imagens/cz.png',
    nome: 'Czech Republic',
  },
  {
    id: 'de',
    imagem: '../imagens/de.png',
    nome: 'Germany',
  },
  {
    id: 'dj',
    imagem: '../imagens/dj.png',
    nome: 'Djibouti',
  },
  {
    id: 'dk',
    imagem: '../imagens/dk.png',
    nome: 'Denmark',
  },
  {
    id: 'dm',
    imagem: '../imagens/dm.png',
    nome: 'Dominica',
  },
  {
    id: 'do',
    imagem: '../imagens/do.png',
    nome: 'Dominican Republic',
  },
  {
    id: 'dz',
    imagem: '../imagens/dz.png',
    nome: 'Algeria',
  },
  {
    id: 'ec',
    imagem: '../imagens/ec.png',
    nome: 'Ecuador',
  },
  {
    id: 'ee',
    imagem: '../imagens/ee.png',
    nome: 'Estonia',
  },
  {
    id: 'eg',
    imagem: '../imagens/eg.png',
    nome: 'Egypt',
  },
  {
    id: 'eh',
    imagem: '../imagens/eh.png',
    nome: 'Western Sahara',
  },
  {
    id: 'er',
    imagem: '../imagens/er.png',
    nome: 'Eritrea',
  },
  {
    id: 'es',
    imagem: '../imagens/es.png',
    nome: 'Spain',
  },
  {
    id: 'et',
    imagem: '../imagens/et.png',
    nome: 'Ethiopia',
  },
  {
    id: 'fi',
    imagem: '../imagens/fi.png',
    nome: 'Finland',
  },
  {
    id: 'fj',
    imagem: '../imagens/fj.png',
    nome: 'Fiji',
  },
  {
    id: 'fk',
    imagem: '../imagens/fk.png',
    nome: 'Falkland Islands (Malvinas)',
  },
  {
    id: 'fm',
    imagem: '../imagens/fm.png',
    nome: 'Micronesia, Federated States Of',
  },
  {
    id: 'fo',
    imagem: '../imagens/fo.png',
    nome: 'Faroe Islands',
  },
  {
    id: 'fr',
    imagem: '../imagens/fr.png',
    nome: 'France',
  },
  {
    id: 'ga',
    imagem: '../imagens/ga.png',
    nome: 'Gabon',
  },
  {
    id: 'gb',
    imagem: '../imagens/gb.png',
    nome: 'United Kingdom',
  },
  {
    id: 'gd',
    imagem: '../imagens/gd.png',
    nome: 'Grenada',
  },
  {
    id: 'ge',
    imagem: '../imagens/ge.png',
    nome: 'Georgia',
  },
  {
    id: 'gf',
    imagem: '../imagens/gf.png',
    nome: 'French Guiana',
  },
  {
    id: 'gg',
    imagem: '../imagens/gg.png',
    nome: 'Guernsey',
  },
  {
    id: 'gh',
    imagem: '../imagens/gh.png',
    nome: 'Ghana',
  },
  {
    id: 'gi',
    imagem: '../imagens/gi.png',
    nome: 'Gibraltar',
  },
  {
    id: 'gl',
    imagem: '../imagens/gl.png',
    nome: 'Greenland',
  },
  {
    id: 'gm',
    imagem: '../imagens/gm.png',
    nome: 'Gambia',
  },
  {
    id: 'gn',
    imagem: '../imagens/gn.png',
    nome: 'Guinea',
  },
  {
    id: 'gp',
    imagem: '../imagens/gp.png',
    nome: 'Guadeloupe',
  },
  {
    id: 'gq',
    imagem: '../imagens/gq.png',
    nome: 'Equatorial Guinea',
  },
  {
    id: 'gr',
    imagem: '../imagens/gr.png',
    nome: 'Greece',
  },
  {
    id: 'gs',
    imagem: '../imagens/gs.png',
    nome: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 'gt',
    imagem: '../imagens/gt.png',
    nome: 'Guatemala',
  },
  {
    id: 'gu',
    imagem: '../imagens/gu.png',
    nome: 'Guam',
  },
  {
    id: 'gw',
    imagem: '../imagens/gw.png',
    nome: 'Guinea-Bissau',
  },
  {
    id: 'gy',
    imagem: '../imagens/gy.png',
    nome: 'Guyana',
  },
  {
    id: 'hk',
    imagem: '../imagens/hk.png',
    nome: 'Hong Kong',
  },
  {
    id: 'hm',
    imagem: '../imagens/hm.png',
    nome: 'Heard and McDonald Islands',
  },
  {
    id: 'hn',
    imagem: '../imagens/hn.png',
    nome: 'Honduras',
  },
  {
    id: 'hr',
    imagem: '../imagens/hr.png',
    nome: 'Croatia',
  },
  {
    id: 'ht',
    imagem: '../imagens/ht.png',
    nome: 'Haiti',
  },
  {
    id: 'hu',
    imagem: '../imagens/hu.png',
    nome: 'Hungary',
  },
  {
    id: 'id',
    imagem: '../imagens/id.png',
    nome: 'Indonesia',
  },
  {
    id: 'ie',
    imagem: '../imagens/ie.png',
    nome: 'Ireland',
  },
  {
    id: 'il',
    imagem: '../imagens/il.png',
    nome: 'Israel',
  },
  {
    id: 'im',
    imagem: '../imagens/im.png',
    nome: 'Isle of Man',
  },
  {
    id: 'in',
    imagem: '../imagens/in.png',
    nome: 'India',
  },
  {
    id: 'io',
    imagem: '../imagens/io.png',
    nome: 'British Indian Ocean Territory',
  },
  {
    id: 'iq',
    imagem: '../imagens/iq.png',
    nome: 'Iraq',
  },
  {
    id: 'ir',
    imagem: '../imagens/ir.png',
    nome: 'Iran, Islamic Republic Of',
  },
  {
    id: 'is',
    imagem: '../imagens/is.png',
    nome: 'Iceland',
  },
  {
    id: 'it',
    imagem: '../imagens/it.png',
    nome: 'Italy',
  },
  {
    id: 'je',
    imagem: '../imagens/je.png',
    nome: 'Jersey',
  },
  {
    id: 'jm',
    imagem: '../imagens/jm.png',
    nome: 'Jamaica',
  },
  {
    id: 'jo',
    imagem: '../imagens/jo.png',
    nome: 'Jordan',
  },
  {
    id: 'jp',
    imagem: '../imagens/jp.png',
    nome: 'Japan',
  },
  {
    id: 'ke',
    imagem: '../imagens/ke.png',
    nome: 'Kenya',
  },
  {
    id: 'kg',
    imagem: '../imagens/kg.png',
    nome: 'Kyrgyzstan',
  },
  {
    id: 'kh',
    imagem: '../imagens/kh.png',
    nome: 'Cambodia',
  },
  {
    id: 'ki',
    imagem: '../imagens/ki.png',
    nome: 'Kiribati',
  },
  {
    id: 'km',
    imagem: '../imagens/km.png',
    nome: 'Comoros',
  },
  {
    id: 'kn',
    imagem: '../imagens/kn.png',
    nome: 'Saint Kitts And Nevis',
  },
  {
    id: 'kp',
    imagem: '../imagens/kp.png',
    nome: "Korea, Democratic People's Republic Of",
  },
  {
    id: 'kr',
    imagem: '../imagens/kr.png',
    nome: 'Korea, Republic of',
  },
  {
    id: 'kw',
    imagem: '../imagens/kw.png',
    nome: 'Kuwait',
  },
  {
    id: 'ky',
    imagem: '../imagens/ky.png',
    nome: 'Cayman Islands',
  },
  {
    id: 'kz',
    imagem: '../imagens/kz.png',
    nome: 'Kazakhstan',
  },
  {
    id: 'la',
    imagem: '../imagens/la.png',
    nome: "Lao People's Democratic Republic",
  },
  {
    id: 'lb',
    imagem: '../imagens/lb.png',
    nome: 'Lebanon',
  },
  {
    id: 'lc',
    imagem: '../imagens/lc.png',
    nome: 'Saint Lucia',
  },
  {
    id: 'li',
    imagem: '../imagens/li.png',
    nome: 'Liechtenstein',
  },
  {
    id: 'lk',
    imagem: '../imagens/lk.png',
    nome: 'Sri Lanka',
  },
  {
    id: 'lr',
    imagem: '../imagens/lr.png',
    nome: 'Liberia',
  },
  {
    id: 'ls',
    imagem: '../imagens/ls.png',
    nome: 'Lesotho',
  },
  {
    id: 'lt',
    imagem: '../imagens/lt.png',
    nome: 'Lithuania',
  },
  {
    id: 'lu',
    imagem: '../imagens/lu.png',
    nome: 'Luxembourg',
  },
  {
    id: 'lv',
    imagem: '../imagens/lv.png',
    nome: 'Latvia',
  },
  {
    id: 'ly',
    imagem: '../imagens/ly.png',
    nome: 'Libya',
  },
  {
    id: 'ma',
    imagem: '../imagens/ma.png',
    nome: 'Morocco',
  },
  {
    id: 'mc',
    imagem: '../imagens/mc.png',
    nome: 'Monaco',
  },
  {
    id: 'md',
    imagem: '../imagens/md.png',
    nome: 'Moldova, Republic of',
  },
  {
    id: 'me',
    imagem: '../imagens/me.png',
    nome: 'Montenegro',
  },
  {
    id: 'mf',
    imagem: '../imagens/mf.png',
    nome: 'Saint Martin',
  },
  {
    id: 'mg',
    imagem: '../imagens/mg.png',
    nome: 'Madagascar',
  },
  {
    id: 'mh',
    imagem: '../imagens/mh.png',
    nome: 'Marshall Islands',
  },
  {
    id: 'mk',
    imagem: '../imagens/mk.png',
    nome: 'Macedonia, the Former Yugoslav Republic Of',
  },
  {
    id: 'ml',
    imagem: '../imagens/ml.png',
    nome: 'Mali',
  },
  {
    id: 'mm',
    imagem: '../imagens/mm.png',
    nome: 'Myanmar',
  },
  {
    id: 'mn',
    imagem: '../imagens/mn.png',
    nome: 'Mongolia',
  },
  {
    id: 'mo',
    imagem: '../imagens/mo.png',
    nome: 'Macao',
  },
  {
    id: 'mp',
    imagem: '../imagens/mp.png',
    nome: 'Northern Mariana Islands',
  },
  {
    id: 'mq',
    imagem: '../imagens/mq.png',
    nome: 'Martinique',
  },
  {
    id: 'mr',
    imagem: '../imagens/mr.png',
    nome: 'Mauritania',
  },
  {
    id: 'ms',
    imagem: '../imagens/ms.png',
    nome: 'Montserrat',
  },
  {
    id: 'mt',
    imagem: '../imagens/mt.png',
    nome: 'Malta',
  },
  {
    id: 'mu',
    imagem: '../imagens/mu.png',
    nome: 'Mauritius',
  },
  {
    id: 'mv',
    imagem: '../imagens/mv.png',
    nome: 'Maldives',
  },
  {
    id: 'mw',
    imagem: '../imagens/mw.png',
    nome: 'Malawi',
  },
  {
    id: 'mx',
    imagem: '../imagens/mx.png',
    nome: 'Mexico',
  },
  {
    id: 'my',
    imagem: '../imagens/my.png',
    nome: 'Malaysia',
  },
  {
    id: 'mz',
    imagem: '../imagens/mz.png',
    nome: 'Mozambique',
  },
  {
    id: 'na',
    imagem: '../imagens/na.png',
    nome: 'Namibia',
  },
  {
    id: 'nc',
    imagem: '../imagens/nc.png',
    nome: 'New Caledonia',
  },
  {
    id: 'ne',
    imagem: '../imagens/ne.png',
    nome: 'Niger',
  },
  {
    id: 'nf',
    imagem: '../imagens/nf.png',
    nome: 'Norfolk Island',
  },
  {
    id: 'ng',
    imagem: '../imagens/ng.png',
    nome: 'Nigeria',
  },
  {
    id: 'ni',
    imagem: '../imagens/ni.png',
    nome: 'Nicaragua',
  },
  {
    id: 'nl',
    imagem: '../imagens/nl.png',
    nome: 'Netherlands',
  },
  {
    id: 'no',
    imagem: '../imagens/no.png',
    nome: 'Norway',
  },
  {
    id: 'np',
    imagem: '../imagens/np.png',
    nome: 'Nepal',
  },
  {
    id: 'nr',
    imagem: '../imagens/nr.png',
    nome: 'Nauru',
  },
  {
    id: 'nu',
    imagem: '../imagens/nu.png',
    nome: 'Niue',
  },
  {
    id: 'nz',
    imagem: '../imagens/nz.png',
    nome: 'New Zealand',
  },
  {
    id: 'om',
    imagem: '../imagens/om.png',
    nome: 'Oman',
  },
  {
    id: 'pa',
    imagem: '../imagens/pa.png',
    nome: 'Panama',
  },
  {
    id: 'pe',
    imagem: '../imagens/pe.png',
    nome: 'Peru',
  },
  {
    id: 'pf',
    imagem: '../imagens/pf.png',
    nome: 'French Polynesia',
  },
  {
    id: 'pg',
    imagem: '../imagens/pg.png',
    nome: 'Papua New Guinea',
  },
  {
    id: 'ph',
    imagem: '../imagens/ph.png',
    nome: 'Philippines',
  },
  {
    id: 'pk',
    imagem: '../imagens/pk.png',
    nome: 'Pakistan',
  },
  {
    id: 'pl',
    imagem: '../imagens/pl.png',
    nome: 'Poland',
  },
  {
    id: 'pm',
    imagem: '../imagens/pm.png',
    nome: 'Saint Pierre And Miquelon',
  },
  {
    id: 'pn',
    imagem: '../imagens/pn.png',
    nome: 'Pitcairn',
  },
  {
    id: 'pr',
    imagem: '../imagens/pr.png',
    nome: 'Puerto Rico',
  },
  {
    id: 'ps',
    imagem: '../imagens/ps.png',
    nome: 'Palestine, State of',
  },
  {
    id: 'pt',
    imagem: '../imagens/pt.png',
    nome: 'Portugal',
  },
  {
    id: 'pw',
    imagem: '../imagens/pw.png',
    nome: 'Palau',
  },
  {
    id: 'py',
    imagem: '../imagens/py.png',
    nome: 'Paraguay',
  },
  {
    id: 'qa',
    imagem: '../imagens/qa.png',
    nome: 'Qatar',
  },
  {
    id: 're',
    imagem: '../imagens/re.png',
    nome: 'Réunion',
  },
  {
    id: 'ro',
    imagem: '../imagens/ro.png',
    nome: 'Romania',
  },
  {
    id: 'rs',
    imagem: '../imagens/rs.png',
    nome: 'Serbia',
  },
  {
    id: 'ru',
    imagem: '../imagens/ru.png',
    nome: 'Russian Federation',
  },
  {
    id: 'rw',
    imagem: '../imagens/rw.png',
    nome: 'Rwanda',
  },
  {
    id: 'sa',
    imagem: '../imagens/sa.png',
    nome: 'Saudi Arabia',
  },
  {
    id: 'sb',
    imagem: '../imagens/sb.png',
    nome: 'Solomon Islands',
  },
  {
    id: 'sc',
    imagem: '../imagens/sc.png',
    nome: 'Seychelles',
  },
  {
    id: 'sd',
    imagem: '../imagens/sd.png',
    nome: 'Sudan',
  },
  {
    id: 'se',
    imagem: '../imagens/se.png',
    nome: 'Sweden',
  },
  {
    id: 'sg',
    imagem: '../imagens/sg.png',
    nome: 'Singapore',
  },
  {
    id: 'sh',
    imagem: '../imagens/sh.png',
    nome: 'Saint Helena',
  },
  {
    id: 'si',
    imagem: '../imagens/si.png',
    nome: 'Slovenia',
  },
  {
    id: 'sj',
    imagem: '../imagens/sj.png',
    nome: 'Svalbard And Jan Mayen',
  },
  {
    id: 'sk',
    imagem: '../imagens/sk.png',
    nome: 'Slovakia',
  },
  {
    id: 'sl',
    imagem: '../imagens/sl.png',
    nome: 'Sierra Leone',
  },
  {
    id: 'sm',
    imagem: '../imagens/sm.png',
    nome: 'San Marino',
  },
  {
    id: 'sn',
    imagem: '../imagens/sn.png',
    nome: 'Senegal',
  },
  {
    id: 'so',
    imagem: '../imagens/so.png',
    nome: 'Somalia',
  },
  {
    id: 'sr',
    imagem: '../imagens/sr.png',
    nome: 'Suriname',
  },
  {
    id: 'ss',
    imagem: '../imagens/ss.png',
    nome: 'South Sudan',
  },
  {
    id: 'st',
    imagem: '../imagens/st.png',
    nome: 'Sao Tome and Principe',
  },
  {
    id: 'sv',
    imagem: '../imagens/sv.png',
    nome: 'El Salvador',
  },
  {
    id: 'sx',
    imagem: '../imagens/sx.png',
    nome: 'Sint Maarten',
  },
  {
    id: 'sy',
    imagem: '../imagens/sy.png',
    nome: 'Syrian Arab Republic',
  },
  {
    id: 'sz',
    imagem: '../imagens/sz.png',
    nome: 'Swaziland',
  },
  {
    id: 'tc',
    imagem: '../imagens/tc.png',
    nome: 'Turks and Caicos Islands',
  },
  {
    id: 'td',
    imagem: '../imagens/td.png',
    nome: 'Chad',
  },
  {
    id: 'tf',
    imagem: '../imagens/tf.png',
    nome: 'French Southern Territories',
  },
  {
    id: 'tg',
    imagem: '../imagens/tg.png',
    nome: 'Togo',
  },
  {
    id: 'th',
    imagem: '../imagens/th.png',
    nome: 'Thailand',
  },
  {
    id: 'tj',
    imagem: '../imagens/tj.png',
    nome: 'Tajikistan',
  },
  {
    id: 'tk',
    imagem: '../imagens/tk.png',
    nome: 'Tokelau',
  },
  {
    id: 'tl',
    imagem: '../imagens/tl.png',
    nome: 'Timor-Leste',
  },
  {
    id: 'tm',
    imagem: '../imagens/tm.png',
    nome: 'Turkmenistan',
  },
  {
    id: 'tn',
    imagem: '../imagens/tn.png',
    nome: 'Tunisia',
  },
  {
    id: 'to',
    imagem: '../imagens/to.png',
    nome: 'Tonga',
  },
  {
    id: 'tr',
    imagem: '../imagens/tr.png',
    nome: 'Turkey',
  },
  {
    id: 'tt',
    imagem: '../imagens/tt.png',
    nome: 'Trinidad and Tobago',
  },
  {
    id: 'tv',
    imagem: '../imagens/tv.png',
    nome: 'Tuvalu',
  },
  {
    id: 'tw',
    imagem: '../imagens/tw.png',
    nome: 'Taiwan, Republic Of China',
  },
  {
    id: 'tz',
    imagem: '../imagens/tz.png',
    nome: 'Tanzania, United Republic of',
  },
  {
    id: 'ua',
    imagem: '../imagens/ua.png',
    nome: 'Ukraine',
  },
  {
    id: 'ug',
    imagem: '../imagens/ug.png',
    nome: 'Uganda',
  },
  {
    id: 'um',
    imagem: '../imagens/um.png',
    nome: 'United States Minor Outlying Islands',
  },
  {
    id: 'us',
    imagem: '../imagens/us.png',
    nome: 'United States',
  },
  {
    id: 'uy',
    imagem: '../imagens/uy.png',
    nome: 'Uruguay',
  },
  {
    id: 'uz',
    imagem: '../imagens/uz.png',
    nome: 'Uzbekistan',
  },
  {
    id: 'va',
    imagem: '../imagens/va.png',
    nome: 'Holy See (Vatican City State)',
  },
  {
    id: 'vc',
    imagem: '../imagens/vc.png',
    nome: 'Saint Vincent And The Grenadines',
  },
  {
    id: 've',
    imagem: '../imagens/ve.png',
    nome: 'Venezuela, Bolivarian Republic of',
  },
  {
    id: 'vg',
    imagem: '../imagens/vg.png',
    nome: 'Virgin Islands, British',
  },
  {
    id: 'vi',
    imagem: '../imagens/vi.png',
    nome: 'Virgin Islands, U.S.',
  },
  {
    id: 'vn',
    imagem: '../imagens/vn.png',
    nome: 'Vietnam',
  },
  {
    id: 'vu',
    imagem: '../imagens/vu.png',
    nome: 'Vanuatu',
  },
  {
    id: 'wf',
    imagem: '../imagens/wf.png',
    nome: 'Wallis and Futuna',
  },
  {
    id: 'ws',
    imagem: '../imagens/ws.png',
    nome: 'Samoa',
  },
  {
    id: 'ye',
    imagem: '../imagens/ye.png',
    nome: 'Yemen',
  },
  {
    id: 'yt',
    imagem: '../imagens/yt.png',
    nome: 'Mayotte',
  },
  {
    id: 'za',
    imagem: '../imagens/za.png',
    nome: 'South Africa',
  },
  {
    id: 'zm',
    imagem: '../imagens/zm.png',
    nome: 'Zambia',
  },
  {
    id: 'zw',
    imagem: '../imagens/zw.png',
    nome: 'Zimbabwe',
  },
];

export default flags;