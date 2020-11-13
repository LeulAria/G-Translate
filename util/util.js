const language_code = `
Afrikaans: AF
Amharic: AM
Arabic: AR
Azerbaijani: AZ
Belarusian: BE
Bulgarian: BG
Bengali: BN
Tibetan: BO
Basque: EU
Persian: FA
Finnish: FI
Faroese: FO
French: FR
Western Frisian: FY
Irish: GA
Gaelic, Scottish Gaelic: GD
Galician: GL
Gujarati: GU
Hausa: HA
Hebrew: HE
Hindi: HI
Haitian, Haitian Creole: HT
Hungarian: HU
Armenian: HY
Indonesian: ID
Igbo: IG
Indonesian: ID
Icelandic: IS
Italian: IT
Hebrew: HE
Japanese: JA
Yiddish: YI
Georgian: KA
Kazakh: KK
Central Khmer: KM
Kannada: KN
Korean: KO
Kirghiz, Kyrgyz: KY
Latin: LA
Luxembourgish, Letzeburgesch: LB
Lao: LO
Lithuanian: LT
Latvian: LV
Malagasy: MG
Marshallese: MH
Maori: MI
Macedonian: MK
Malayalam: ML
Mongolian: MN
Moldavian, Moldovan: RO
Marathi: MR
Malay: MS
Maltese: MT
Burmese: MY
Norwegian Bokmål: NB
Nepali: NE
Dutch, Flemish: NL
Norwegian Nynorsk: NN
Norwegian: NO
Chichewa, Chewa, Nyanja: NY
Polish: PL
Pashto, Pushto: PS
Portuguese: PT
Quechua: QU
Rundi: RN
Romanian, Moldavian, Moldovan: RO
Russian: RU
Sindhi: SD
Sango: SG
Sinhala, Sinhalese: SI
Slovak: SK
Slovenian: SL
Samoan: SM
Shona: SN
Somali: SO
Albanian: SQ
Serbian: SR
Southern Sotho: ST
Sundanese: SU
Swedish: SV
Swahili: SW
Tamil: TA
Telugu: TE
Tajik: TG
Thai: TH
Tagalog: TL
Tonga (Tonga Islands): TO
Turkish: TR
Tatar: TT
Ukrainian: UK
Urdu: UR
Uzbek: UZ
Vietnamese: VI
Wolof: WO
Xhosa: XH
Yiddish: YI
Yoruba: YO
Chinese: ZH
Zulu: ZU
`;

const instructions = `
How to translate on G-Translate Bot
By default if you wright english and send it will translate it to amharic

how to translate to other languages:

Syntax:
<Your text>  :  <en> : <am>

Description:
<Your text> here put your text to translate it can be in any of available languages
check available languages   /get_language_code 

then put :  
<en>  is the language code you have written your's
: then put another : to split to which language you want to translate
<am>  in this case am is amharic
`;


module.exports.language_code = language_code;
module.exports.instructions = instructions;