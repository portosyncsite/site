const channels = [
    {
        "id": 1,
        "name": "portoSYNC 1",
        "theme": "generalist",
        "description": "portoSYNC 1 este canalul principal al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync1.m3u8",
        "type": "video"
    },
    {
        "id": 2,
        "name": "portoSYNC 2",
        "theme": "generalist",
        "description": "portoSYNC 2 este canalul secundar al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync2.m3u8",
        "type": "video"
    },
    {
        "id": 3,
        "name": "portoSYNC 3",
        "theme": "generalist",
        "description": "portoSYNC 3 este al treilea canal al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync3.m3u8",
        "type": "video"
    },
    {
        "id": 4,
        "name": "portoSYNC 4",
        "theme": "generalist",
        "description": "portoSYNC 4 este al patrulea canal al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync4.m3u8",
        "type": "video"
    },
    {
        "id": 5,
        "name": "portoSYNC 5",
        "theme": "generalist",
        "description": "portoSYNC 5 este al cincilea canal al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync5.m3u8",
        "type": "video"
    },
    {
        "id": 6,
        "name": "portoSYNC +",
        "theme": "generalist",
        "description": "portoSYNC + este canalul exclusiv al streamurilor fără watermark și al recomandărilor din platforma portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync.m3u8",
        "type": "video"
    },
    {
        "id": 7,
        "name": "Aservo 1",
        "theme": "generalist",
        "description": "Aservo 1 este canalul principal al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo1.m3u8",
        "type": "video"
    },
    {
        "id": 8,
        "name": "Aservo 2",
        "theme": "generalist",
        "description": "Aservo 2 este canalul secundar al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo2.m3u8",
        "type": "video"
    },
    {
        "id": 9,
        "name": "Aservo 3",
        "theme": "generalist",
        "description": "Aservo 3 este al treilea canal al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo3.m3u8",
        "type": "video"
    },
    {
        "id": 10,
        "name": "Aservo 4",
        "theme": "generalist",
        "description": "Aservo 4 este al patrulea canal al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo4.m3u8",
        "type": "video"
    },
    {
        "id": 11,
        "name": "Aservo 5",
        "theme": "generalist",
        "description": "Aservo 5 este al cincilea canal al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo5.m3u8",
        "type": "video"
    },
    {
        "id": 12,
        "name": "Aservo +",
        "theme": "generalist",
        "description": "Aservo + este canalul exclusiv streamurilor fără watermark și al recomandărilor din platforma Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo.m3u8",
        "type": "video"
    },
    {
        "id": 13,
        "name": "Bytey 1",
        "theme": "generalist",
        "description": "Bytey 1",
        "streamUrl": "https://live.prtsync.ro/hls/bytey1.m3u8",
        "type": "video"
    },
    {
        "id": 14,
        "name": "Bytey 2",
        "theme": "generalist",
        "description": "Bytey 2",
        "streamUrl": "https://live.prtsync.ro/hls/bytey2.m3u8",
        "type": "video"
    },
    {
        "id": 15,
        "name": "Bytey 3",
        "theme": "generalist",
        "description": "Bytey 3",
        "streamUrl": "https://live.prtsync.ro/hls/bytey3.m3u8",
        "type": "video"
    },
    {
        "id": 16,
        "name": "Ade Plus",
        "theme": "generalist",
        "description": "Ade Plus este canalul principal al Ade Media, fiind un post generalist.",
        "streamUrl": "https://media.helloether.co/hls/media/adeplus.m3u8",
        "type": "video"
    },
    {
        "id": 17,
        "name": "Ade Extra",
        "theme": "generalist",
        "description": "Ade Extra este canalul secundar cu extra content al Ade Media, fiind un post generalist.",
        "streamUrl": "https://media.helloether.co/hls/media/adeextra.m3u8",
        "type": "video"
    },
    {
        "id": 18,
        "name": "Tudeni TV",
        "theme": "generalist",
        "description": "Tudeni TV",
        "streamUrl": "https://live.prtsync.ro/hls/tudeni.m3u8",
        "type": "video"
    },
    {
        "id": 19,
        "name": "Tudeni +",
        "theme": "generalist",
        "description": "Tudeni +",
        "streamUrl": "https://live.prtsync.ro/hls/tudeniplus.m3u8",
        "type": "video"
    },
    {
        "id": 20,
        "name": "cldnef2i",
        "theme": "generalist",
        "description": "cldnef2i",
        "streamUrl": "https://media.helloether.co/hls/media/cldnef2i.m3u8",
        "type": "video"
    },
    {
        "id": 21,
        "name": "Pulse 1",
        "theme": "generalist",
        "description": "Pulse 1 este un canal generalist care oferă emisiuni variate; acesta aparține de PulseMEDIA.",
        "streamUrl": "https://media.helloether.co/hls/media/Pulse1_HD.m3u8",
        "type": "video"
    },
    {
        "id": 22,
        "name": "CRT ONE",
        "theme": "generalist",
        "description": "CRT ONE",
        "streamUrl": "https://media.helloether.co/hls/media/crtone.m3u8",
        "type": "video"
    },
    {
        "id": 23,
        "name": "ANT TV",
        "theme": "generalist",
        "description": "ANT TV este canalul generalist al ANT SAT MEDIA, difuzând emisiuni moderne și clasice, dar și videoclipuri și emisiuni muzicale diverse.",
        "streamUrl": "https://media.helloether.co/hls/media/anttv.m3u8",
        "type": "video"
    },
    {
        "id": 24,
        "name": "ovou TV",
        "theme": "generalist",
        "description": "ovou TV",
        "streamUrl": "https://live.prtsync.ro/hls/ovou.m3u8",
        "type": "video"
    },
    {
        "id": 25,
        "name": "Anoide TV",
        "theme": "generalist",
        "streamUrl": "https://live.prtsync.ro/hls/anoidetv.m3u8",
        "type": "video",
        "description": "Anoide TV"
    },
    {
        "id": 26,
        "name": "Nexus TV",
        "theme": "generalist",
        "streamUrl": "https://live.prtsync.ro/hls/nexus.m3u8",
        "type": "video",
        "description": "Nexus TV"
    },
    {
        "id": 27,
        "name": "Nupten TV",
        "theme": "generalist",
        "description": "Nupten TV",
        "streamUrl": "https://live.prtsync.ro/hls/nupten.m3u8",
        "type": "video"
    },
    {
        "id": 28,
        "name": "Nupten 2",
        "theme": "generalist",
        "description": "Nupten 2",
        "streamUrl": "https://live.prtsync.ro/hls/nupten2.m3u8",
        "type": "video"
    },
    {
        "id": 29,
        "name": "TV Univers",
        "theme": "generalist",
        "description": "TV Univers",
        "streamUrl": "https://live.prtsync.ro/hls/tvunivers.m3u8",
        "type": "video"
    },
    {
        "id": 30,
        "name": "Broadcast România",
        "theme": "generalist",
        "description": "Broadcast România este postul tău favorit cu emisiuni.",
        "streamUrl": "https://live.prtsync.ro/hls/broadcastro.m3u8",
        "type": "video"
    },
    {
        "id": 31,
        "name": "Dolce INFO",
        "theme": "generalist",
        "description": "Dolce INFO este canalul exclusiv recomandărilor de pe platforma Dolce.",
        "streamUrl": "https://media.helloether.co/hls/media/_lldolceinfo.m3u8",
        "type": "video"
    },
    {
        "id": 32,
        "name": "TVR 1",
        "theme": "generalist",
        "streamUrl": "https://tvr-1.lg.mncdn.com/tvr1/smil:tvr1.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR 1"
    },
    {
        "id": 33,
        "name": "TVR 2",
        "theme": "generalist",
        "streamUrl": "https://tvr-2.lg.mncdn.com/tvr2/smil:tvr2.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR 2"
    },
    {
        "id": 34,
        "name": "TVR 3",
        "theme": "generalist",
        "streamUrl": "https://tvr-3.lg.mncdn.com/tvr3/smil:tvr3.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR 3"
    },
    {
        "id": 35,
        "name": "Quantum TV",
        "theme": "generalist, regional",
        "description": "Quantum TV",
        "streamUrl": "https://vs2129.vcdn.biz/b9498cf36318a1c4714b95106ea96715_megogo/live/hls/b/700_2490_4000/u_sid/0/o/190218421/rsid/9ee35012-d9e7-4d7c-9617-2b14cf6c75cf/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid3120629020821282537-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 36,
        "name": "Kanal D",
        "theme": "generalist",
        "description": "Kanal D este un post de televiziune generalist din România, lansat în 2007, parte a grupului Doğan Media.",
        "streamUrl": "https://stream1.kanald.ro/iphone/knd-live.m3u8",
        "type": "video"
    },
    {
        "id": 37,
        "name": "Kanal D 2",
        "theme": "generalist",
        "description": "Kanal D 2 este un post de televiziune generalist din România, parte a Doğan Media International, care oferă seriale, divertisment, știri și producții originale pentru un public modern și divers.",
        "streamUrl": "https://vs2144.vcdn.biz/d65e231d77340fe57b68edd4d054719f_megogo/live/hls/b/700_2490_4000/u_sid/0/o/187087751/rsid/0749ee37-b40d-4c37-b4df-16ae5207efbe/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/85.120.23.30*asn/u_srvc/109126/u_did/web_BEhZ0LZLGuQ455jKFFdnE2OFhwWp4SYK/type.live/chunklist-sid2139031428555962140-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 38,
        "name": "A7 TV",
        "theme": "generalist",
        "description": "A7 TV este un post românesc care oferă emisiuni de infotainment, cultură, sănătate și povești inspiraționale.",
        "streamUrl": "https://a7tvlive.ro/A7TV/A7TV/chunklist_w1415376641.m3u8",
        "type": "video"
    },
    {
        "id": 39,
        "name": "Metropola TV",
        "theme": "generalist",
        "description": "Metropola TV este un post de televiziune generalist din România, cu programe de actualitate, divertisment, cultură și informații pentru publicul larg.",
        "streamUrl": "https://vs2123.vcdn.biz/8672d2396feb0fe5375adb1c663351d9_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183160901/rsid/b95c6b15-3ff2-4eda-8b5b-0aaa995cd2db/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid6732273133005367083-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 40,
        "name": "Moldova TV",
        "theme": "generalist",
        "description": "Moldova TV este un post de televiziune regional generalist care difuzează programe variate – știri locale și naționale, emisiuni de actualitate, divertisment și producții culturale dedicate publicului din zona Moldovei.",
        "streamUrl": "https://vs2143.vcdn.biz/00c0dba6e4d60f8ec9fe4fe6f730cac3_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183161681/rsid/23428a5f-6dd2-40aa-9a41-24cc6edf6eca/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.0.211*asn/u_srvc/109126/u_did/web_Fbd4uoOcapXzIlVsk39SPOHHC6W1af9x/type.live/chunklist-sid5587545699481071726-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 41,
        "name": "M+",
        "theme": "generalist",
        "description": "M+ este un canal generalist modern care aduce publicului o combinație de știri, divertisment, filme și emisiuni tematice, cu accent pe actualitatea din Moldova și pe evenimentele de interes național.",
        "streamUrl": "https://vs2127.vcdn.biz/93acc39b10cd1f5ff093cfca8c70de99_megogo/live/hls/b/4000/u_sid/0/o/183727821/rsid/a5c033db-2f7b-49fc-b497-333ed5755468/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/79.115.2.62*asn/u_srvc/109126/u_did/web_qwBXoFg4zXpoDGilVx0tVKH7ptdHrZQp/type.live/chunklist-sid8454626491523089830-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 42,
        "name": "portoSYNC INTERN",
        "theme": "intern, generalist",
        "description": "portoSYNC INTERN",
        "streamUrl": "https://live.prtsync.ro/hls/intern.m3u8",
        "type": "video"
    },
    {
        "id": 43,
        "name": "Ade Exclusive",
        "theme": "clean feed, generalist",
        "description": "Ade Exclusive este postul generalist al Ade Media care vă aduce clean feed (fără logo) pentru posturile acestuia.",
        "streamUrl": "https://media.helloether.co/hls/media/adeexclusive.m3u8",
        "type": "video"
    },
    {
        "id": 44,
        "name": "Pulse MULTIFEED",
        "theme": "clean feed, generalist",
        "description": "Pulse MULTIFEED este un canal feed exclusiv pentru distribuirea programelor PulseMEDIA.",
        "streamUrl": "https://media.helloether.co/hls/media/PulseMULTIFEED_HD.m3u8",
        "type": "video"
    },
    {
        "id": 45,
        "name": "portoSYNC NEWS",
        "theme": "știri",
        "description": "portoSYNC NEWS este canalul de știri al portoSYNC, oferind cele mai recente informații din țară și din lume, știri în timp real și actualizări din toate domeniile importante.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncnews.m3u8",
        "type": "video"
    },
    {
        "id": 46,
        "name": "Aservo NEWS",
        "theme": "știri",
        "description": "Aservo NEWS este canalul de știri al rețelei Aservo, aducând informații rapide, reportaje exclusive și actualizări de interes general.",
        "streamUrl": "https://live.prtsync.ro/hls/aservonews.m3u8",
        "type": "video"
    },
    {
        "id": 47,
        "name": "portoSYNC INFO",
        "theme": "știri, informativ",
        "description": "portoSYNC INFO este canalul informativ al portoSYNC, dedicat transmiterii de știri de ultimă oră, reportaje și analize obiective.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncinfo.m3u8",
        "type": "video"
    },
    {
        "id": 48,
        "name": "portoSYNC INFO 24",
        "theme": "știri",
        "description": "portoSYNC INFO +",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncinfo24.m3u8",
        "type": "video"
    },
    {
        "id": 49,
        "name": "portoSYNC INFO +",
        "theme": "știri, informativ",
        "description": "portoSYNC INFO +",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncinfoplus.m3u8",
        "type": "video"
    },
    {
        "id": 50,
        "name": "Pulse INFO",
        "theme": "știri, informativ",
        "description": "Pulse INFO",
        "streamUrl": "https://media.helloether.co/hls/media/PulseINFO_HD.m3u8",
        "type": "video"
    },
    {
        "id": 51,
        "name": "Nupten Info",
        "theme": "știri",
        "description": "Nupten Info",
        "streamUrl": "https://live.prtsync.ro/hls/nupteninfo.m3u8",
        "type": "video"
    },
    {
        "id": 52,
        "name": "RIZEA TV",
        "theme": "știri",
        "streamUrl": "https://live.prtsync.ro/hls/rizea.m3u8",
        "type": "video",
        "description": "RIZEA TV"
    },
    {
        "id": 53,
        "name": "news24",
        "theme": "știri",
        "description": "news24",
        "streamUrl": "https://live.prtsync.ro/hls/news24.m3u8",
        "type": "video"
    },
    {
        "id": 54,
        "name": "TVR INFO",
        "theme": "știri",
        "streamUrl": "https://tvr-info.lg.mncdn.com/tvrinfo/smil:tvrinfo.smil/playlist.m3u8",
        "type": "video",
        "description": "TVR INFO"
    },
    {
        "id": 55,
        "name": "Antena 3 CNN",
        "theme": "știri",
        "description": "Antena 3 CNN este un canal de știri care oferă informații, analize și dezbateri în timp real.",
        "streamUrl": "https://live3vox.antenaplay.ro/a3free/a3free.m3u8",
        "type": "video"
    },
    {
        "id": 56,
        "name": "România TV",
        "theme": "știri",
        "description": "România TV este un canal de televiziune de știri din România, care oferă informații, dezbateri, anchete și reportaje despre cele mai importante evenimente politice, sociale și economice.",
        "streamUrl": "https://vs2143.vcdn.biz/992759fb7044cecdb8ad93b0da093d97_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183396781/rsid/0fe83199-0698-4e9b-914f-9bf38a0f304f/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.3.22*asn/u_srvc/109126/u_did/web_bjgKo07FlvX9uVQIBgavzt340MQrh0xY/type.live/chunklist-sid7459644078260852792-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 57,
        "name": "Realitatea Plus",
        "theme": "știri",
        "description": "Realitatea Plus",
        "streamUrl": "https://vs2130.vcdn.biz/c2eebe8c6882d3637c92f5742a81efc0_megogo/live/hls/b/4000/u_sid/0/o/183160851/rsid/235cb34a-bc39-435a-8411-2e5fa8c629d8/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/79.115.2.62*asn/u_srvc/109126/u_did/web_qwBXoFg4zXpoDGilVx0tVKH7ptdHrZQp/type.live/chunklist-sid8593103525486886152-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 58,
        "name": "Aleph News",
        "theme": "știri",
        "description": "Aleph News este un post de televiziune modern, cu un format inovator de știri și reportaje. Canalul oferă o perspectivă inteligentă și echilibrată asupra actualității din România și din lume.",
        "streamUrl": "https://streamb.m.ro/Aleph/ngrp:Alephnew2.stream_all/chunklist_b5128000.m3u8",
        "type": "video"
    },
    {
        "id": 59,
        "name": "Aleph Business",
        "theme": "știri",
        "description": "Aleph Business",
        "streamUrl": "https://streamw.m.ro/Aleph/ngrp:Alephbiz.stream_all/chunklist_b1398304.m3u8",
        "type": "video"
    },
    {
        "id": 60,
        "name": "Euronews România",
        "theme": "știri",
        "description": "Euronews România este versiunea locală a celebrului canal european de știri, oferind informații verificate, analize și perspective independente asupra evenimentelor din țară și din lume.",
        "streamUrl": "https://vs2132.vcdn.biz/27278cb9bde53514c22a6935fa937624_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183395381/rsid/0591dc00-86e0-43ba-b88d-430036eebdf8/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/79.115.2.62*asn/u_srvc/109126/u_did/web_qwBXoFg4zXpoDGilVx0tVKH7ptdHrZQp/type.live/chunklist-sid2659486788623398724-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 61,
        "name": "NCN",
        "theme": "știri",
        "description": "NCN este un canal de știri care oferă informații și reportaje actualizate din România și din lume.",
        "streamUrl": "https://vs2128.vcdn.biz/3a0e8f83f40f62d55a05d5150eb62d43_megogo/live/hls/b/700_2490/u_sid/0/o/183727851/rsid/98ba8001-ac14-41ba-aca1-cbd1f343997a/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.0.211*asn/u_srvc/109126/u_did/web_Fbd4uoOcapXzIlVsk39SPOHHC6W1af9x/type.live/chunklist-sid4896787406639666928-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 62,
        "name": "portoSYNC SPORT 1",
        "theme": "sport",
        "description": "portoSYNC SPORT 1 este canalul dedicat pasionaților de sport, oferind transmisiuni live din competiții naționale și internaționale, analize și rezumate din lumea sportului.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncsport.m3u8",
        "type": "video"
    },
    {
        "id": 63,
        "name": "portoSYNC SPORT 2",
        "theme": "sport",
        "description": "portoSYNC SPORT 2 completează oferta sportivă a portoSYNC, difuzând meciuri, competiții și emisiuni dedicate performanței și mișcării sportive.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncsport2.m3u8",
        "type": "video"
    },
    {
        "id": 64,
        "name": "portoSYNC SPORT 3",
        "theme": "sport",
        "description": "portoSYNC SPORT 3 este canalul sportiv al portoSYNC, difuzând competiții, știri sportive și emisiuni dedicate celor mai populare discipline din România și din lume.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncsport3.m3u8",
        "type": "video"
    },
    {
        "id": 65,
        "name": "Aservo SPORT",
        "theme": "sport",
        "description": "Aservo SPORT este canalul sportiv al rețelei Aservo, oferind transmisiuni live din competiții naționale și internaționale, precum și analize dedicate fanilor sportului.",
        "streamUrl": "https://live.prtsync.ro/hls/aservosport.m3u8",
        "type": "video"
    },
    {
        "id": 66,
        "name": "Aservo SPORT 2",
        "theme": "sport",
        "description": "Aservo SPORT 2 completează grila sportivă Aservo, difuzând competiții, rezumate și emisiuni de analiză pentru pasionații de sport.",
        "streamUrl": "https://live.prtsync.ro/hls/aservosport2.m3u8",
        "type": "video"
    },
    {
        "id": 67,
        "name": "Aservo SPORT 3",
        "theme": "sport",
        "description": "Aservo SPORT 3 este canalul sportiv al Aservo, difuzând competiții, știri sportive și emisiuni dedicate celor mai populare discipline din România și din lume.",
        "streamUrl": "https://live.prtsync.ro/hls/aservosport3.m3u8",
        "type": "video"
    },
    {
        "id": 68,
        "name": "Bytey SPORT 1",
        "theme": "sport",
        "description": "Bytey SPORT 1",
        "streamUrl": "https://live.prtsync.ro/hls/byteysport1.m3u8",
        "type": "video"
    },
    {
        "id": 69,
        "name": "Bytey SPORT 2",
        "theme": "sport",
        "description": "Bytey SPORT 2",
        "streamUrl": "https://live.prtsync.ro/hls/byteysport2.m3u8",
        "type": "video"
    },
    {
        "id": 70,
        "name": "Bytey SPORT 3",
        "theme": "sport",
        "description": "Bytey SPORT 3",
        "streamUrl": "https://live.prtsync.ro/hls/byteysport3.m3u8",
        "type": "video"
    },
    {
        "id": 71,
        "name": "Dolce Sport 1",
        "theme": "sport",
        "description": "Dolce Sport 1 este principalul canal sportiv al rețelei Dolce, difuzând cele mai importante competiții, meciuri și emisiuni dedicate fanilor sportului.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport1.m3u8",
        "type": "video"
    },
    {
        "id": 72,
        "name": "Dolce Sport 2",
        "theme": "sport",
        "description": "Dolce Sport 2 extinde oferta sportivă a rețelei Dolce, aducând transmisiuni live și analize detaliate ale competițiilor internaționale.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport2.m3u8",
        "type": "video"
    },
    {
        "id": 73,
        "name": "Dolce Sport 3",
        "theme": "sport",
        "description": "Dolce Sport 3 este un canal dedicat sporturilor de echipă și evenimentelor speciale, parte a portofoliului Dolce.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport3.m3u8",
        "type": "video"
    },
    {
        "id": 74,
        "name": "Dolce Sport 4",
        "theme": "sport",
        "description": "Dolce Sport 4 difuzează competiții, rezumate și emisiuni dedicate performanței sportive, făcând parte din rețeaua Dolce.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport4.m3u8",
        "type": "video"
    },
    {
        "id": 75,
        "name": "Dolce Sport 5",
        "theme": "sport",
        "description": "Dolce Sport 5 încheie seria canalelor sportive Dolce, oferind transmisiuni exclusive, documentare și interviuri din lumea sportului.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport5.m3u8",
        "type": "video"
    },
    {
        "id": 76,
        "name": "Dolce Sport 6",
        "theme": "sport",
        "description": "Dolce Sport 6 este canalul dedicat sporturilor și competițiilor internaționale și naționale, oferind transmisiuni live, analize și emisiuni pentru pasionații de sport.",
        "streamUrl": "https://live.prtsync.ro/hls/dolcesport6.m3u8",
        "type": "video"
    },
    {
        "id": 77,
        "name": "Nupten Sport",
        "theme": "sport",
        "description": "Nupten Sport",
        "streamUrl": "https://live.prtsync.ro/hls/nuptensport.m3u8",
        "type": "video"
    },
    {
        "id": 78,
        "name": "TVR SPORT",
        "theme": "sport",
        "streamUrl": "https://tvr-sport.lg.mncdn.com/tvrsport/smil:tvrsport.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR SPORT"
    },
    {
        "id": 79,
        "name": "Realitatea Sportivă",
        "theme": "sport",
        "description": "Realitatea Sportivă",
        "streamUrl": "https://vs2123.vcdn.biz/73cedfd2f7c9f59bd5cb6e8f969f9d3f_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183395251/rsid/d2d8f66f-631e-4d72-889a-99270b6d4797/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/chunklist-sid8892047538481954273-b700000.m3u8",
        "type": "video"
    },
    {
        "id": 80,
        "name": "portoSYNC FILM",
        "theme": "filme",
        "description": "portoSYNC FILM difuzează filme și seriale pentru toate gusturile, oferind o selecție diversă de producții naționale și internaționale.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncfilm.m3u8",
        "type": "video"
    },
    {
        "id": 81,
        "name": "portoSYNC FILM +",
        "theme": "filme",
        "description": "portoSYNC FILM + difuzează filme și seriale pentru toate gusturile, oferind o selecție diversă de producții naționale și internaționale.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncfilmplus.m3u8",
        "type": "video"
    },
    {
        "id": 82,
        "name": "Aservo FILM",
        "theme": "filme, seriale",
        "description": "Aservo FILM este canalul de filme și seriale al rețelei Aservo, oferind producții diverse și de calitate pentru toate vârstele.",
        "streamUrl": "https://live.prtsync.ro/hls/aservofilm.m3u8",
        "type": "video"
    },
    {
        "id": 83,
        "name": "Aservo FILM Plus",
        "theme": "filme, seriale",
        "description": "Aservo FILM Plus este canalul de filme și seriale al rețelei Aservo, oferind producții diverse și de calitate pentru toate vârstele.",
        "streamUrl": "https://live.prtsync.ro/hls/aservofilmplus.m3u8",
        "type": "video"
    },
    {
        "id": 84,
        "name": "FilmArt",
        "theme": "filme, seriale",
        "description": "FilmArt",
        "streamUrl": "https://live.prtsync.ro/hls/filmart.m3u8",
        "type": "video"
    },
    {
        "id": 85,
        "name": "Nupten Cinema",
        "theme": "filme, seriale",
        "description": "Nupten Cinema",
        "streamUrl": "https://live.prtsync.ro/hls/nuptencinema.m3u8",
        "type": "video"
    },
    {
        "id": 86,
        "name": "Bollywood Clasic",
        "theme": "filme, seriale",
        "description": "Bollywood Clasic difuzează filme indiene clasice, oferind spectatorilor povești romantice, muzică și dansuri specifice cinematografiei Bollywood.",
        "streamUrl": "https://vs2124.vcdn.biz/1a22a8a2b342282a54b6be3982c3dcdf_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183395271/rsid/a6a0cb04-56a3-4466-9213-1b36dad46dff/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/85.120.23.30*asn/u_srvc/109126/u_did/web_BEhZ0LZLGuQ455jKFFdnE2OFhwWp4SYK/type.live/chunklist-sid2273850557088803109-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 87,
        "name": "CineWOW",
        "theme": "filme",
        "description": "CineWOW",
        "streamUrl": "https://vs2127.vcdn.biz/440ee38609a4079dfff5e679049950f6_megogo/live/hls/b/700_2490/u_sid/0/o/183395361/rsid/bad01e4d-83a6-4054-b91e-500ed1360254/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/chunklist-sid179497084923872599-b700000.m3u8",
        "type": "video"
    },
    {
        "id": 88,
        "name": "portoSYNC MUSIC",
        "theme": "muzical",
        "description": "portoSYNC MUSIC este canalul de muzică al portoSYNC, difuzând hituri contemporane, videoclipuri și emisiuni muzicale variate.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncmusic.m3u8",
        "type": "video"
    },
    {
        "id": 89,
        "name": "portoSYNC MUSIC 4K",
        "theme": "muzical, 4k",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncmusic4k.m3u8",
        "type": "video",
        "description": "portoSYNC 4K"
    },
    {
        "id": 90,
        "name": "portoSYNC LOVE",
        "theme": "muzical",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynclove.m3u8",
        "type": "video",
        "description": "portoSYNC LOVE"
    },
    {
        "id": 91,
        "name": "portoSYNC MANELE",
        "theme": "muzical, manele",
        "description": "portoSYNC MANELE este canalul dedicat muzicii de tip manele, oferind hituri populare și emisiuni dedicate acestui gen muzical.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncmanele.m3u8",
        "type": "video"
    },
    {
        "id": 92,
        "name": "portoSYNC DANCE",
        "theme": "muzical",
        "description": "portoSYNC DANCE difuzează muzică de dans, oferind publicului o selecție variată de melodii ritmate.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncdance.m3u8",
        "type": "video"
    },
    {
        "id": 93,
        "name": "portoSYNC ROCK",
        "theme": "muzical",
        "description": "portoSYNC ROCK difuzează muzică rock reinterpretat, pentru iubitorii genurilor muzicale energice și tradiționale.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncrock.m3u8",
        "type": "video"
    },
    {
        "id": 94,
        "name": "portoSYNC FOLCLOR",
        "theme": "muzical, folclor",
        "description": "portoSYNC FOLCLOR este canalul de muzică populară, difuzând folclor autentic din toate regiunile României.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncfolclor.m3u8",
        "type": "video"
    },
    {
        "id": 95,
        "name": "portoSYNC RETRO",
        "theme": "muzical, retro",
        "description": "portoSYNC RETRO difuzează muzică retro din anii 2000-2010, oferind nostalgie și hituri de top pentru fanii genului.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncretro.m3u8",
        "type": "video"
    },
    {
        "id": 96,
        "name": "Aservo MUSIC",
        "theme": "muzical",
        "description": "Aservo MUSIC este canalul muzical al rețelei Aservo, difuzând muzică variată, videoclipuri și programe dedicate pasionaților de muzică.",
        "streamUrl": "https://live.prtsync.ro/hls/aservomusic.m3u8",
        "type": "video"
    },
    {
        "id": 97,
        "name": "Aservo MANELE",
        "theme": "muzical, manele",
        "description": "Aservo MANELE este canalul dedicat muzicii de tip manele al rețelei Aservo, oferind hituri populare și emisiuni tematice.",
        "streamUrl": "https://live.prtsync.ro/hls/aservomanele.m3u8",
        "type": "video"
    },
    {
        "id": 98,
        "name": "Aservo DANCE",
        "theme": "muzical",
        "description": "Aservo DANCE difuzează muzică de dans, oferind publicului o selecție variată de melodii ritmate.",
        "streamUrl": "https://live.prtsync.ro/hls/aservodance.m3u8",
        "type": "video"
    },
    {
        "id": 99,
        "name": "Aservo ROCK",
        "theme": "muzical",
        "description": "Aservo ROCK difuzează muzică rock reinterpretat, pentru iubitorii genurilor muzicale energice și tradiționale.",
        "streamUrl": "https://live.prtsync.ro/hls/aservorock.m3u8",
        "type": "video"
    },
    {
        "id": 100,
        "name": "Aservo FOLCLOR",
        "theme": "muzical, folclor",
        "description": "Aservo FOLCLOR difuzează muzică folclorică autentică și programe dedicate tradițiilor românești.",
        "streamUrl": "https://live.prtsync.ro/hls/aservofolclor.m3u8",
        "type": "video"
    },
    {
        "id": 101,
        "name": "Aservo RETRO",
        "theme": "muzical, retro",
        "description": "Aservo RETRO difuzează hituri retro din anii 2000-2010, aducând muzică clasică pentru iubitorii genului.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoretro.m3u8",
        "type": "video"
    },
    {
        "id": 102,
        "name": "Bytey FOLCLOR",
        "theme": "muzical, folclor",
        "description": "Bytey FOLCLOR difuzează muzică folclorică autentică și programe dedicate tradițiilor românești.",
        "streamUrl": "https://live.prtsync.ro/hls/byteyfolclor.m3u8",
        "type": "video"
    },
    {
        "id": 103,
        "name": "Bytey RETRO",
        "theme": "muzical, retro",
        "description": "Bytey RETRO difuzează hituri retro din anii 2000-2010, aducând muzică clasică pentru iubitorii genului.",
        "streamUrl": "https://live.prtsync.ro/hls/byteyretro.m3u8",
        "type": "video"
    },
    {
        "id": 104,
        "name": "Tudeni Music",
        "theme": "muzical",
        "description": "Tudeni Music",
        "streamUrl": "https://media.helloether.co/hls/media_ll/tudenimusic.m3u8",
        "type": "video"
    },
    {
        "id": 105,
        "name": "Pulse MUZTV",
        "theme": "muzical",
        "streamUrl": "https://media.helloether.co/hls/media/PulseMUZTV_HD.m3u8",
        "type": "video",
        "description": "Pulse MUZTV"
    },
    {
        "id": 106,
        "name": "INTER",
        "theme": "muzical",
        "description": "INTER este canalul de muzică, deținut de cldnef2 Communications Infrastructure.",
        "streamUrl": "https://media.helloether.co/hls/media/inter.m3u8",
        "type": "video"
    },
    {
        "id": 107,
        "name": "Retro TV",
        "theme": "muzical",
        "streamUrl": "https://live.prtsync.ro/hls/retrotv.m3u8",
        "type": "video",
        "description": "Retro TV"
    },
    {
        "id": 108,
        "name": "Aroma TV",
        "theme": "muzical",
        "description": "Aroma TV",
        "streamUrl": "https://live.prtsync.ro/hls/aromatv.m3u8",
        "type": "video"
    },
    {
        "id": 109,
        "name": "Broadcast Music",
        "theme": "muzical",
        "description": "Broadcast Music difuzează muzică variată, de la hituri internaționale la piese românești populare, pentru toate gusturile.",
        "streamUrl": "https://live.prtsync.ro/hls/broadcastmusic.m3u8",
        "type": "video"
    },
    {
        "id": 110,
        "name": "Epilisium TV",
        "theme": "muzical",
        "description": "Epilisium TV",
        "streamUrl": "https://live.prtsync.ro/hls/epilisium.m3u8",
        "type": "video"
    },
    {
        "id": 111,
        "name": "Mynele TV",
        "theme": "muzical, manele",
        "description": "Mynele TV difuzează muzică manele și hituri populare, aducând cele mai noi lansări și videoclipuri de petrecere.",
        "streamUrl": "https://live.prtsync.ro/hls/myneletv.m3u8",
        "type": "video"
    },
    {
        "id": 112,
        "name": "Clubparty",
        "theme": "muzical",
        "description": "Clubparty difuzează muzică modernă și mixuri energice pentru iubitorii de petreceri și distracție.",
        "streamUrl": "https://live.prtsync.ro/hls/clubparty.m3u8",
        "type": "video"
    },
    {
        "id": 113,
        "name": "TVR FOLCLOR",
        "theme": "muzical, folclor",
        "description": "TVR FOLCLOR",
        "streamUrl": "https://tvr-folclor.lg.mncdn.com/tvrfolclor/smil:tvrfolclor.smil/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 114,
        "name": "Emi TV",
        "theme": "muzical, folclor",
        "description": "Emi TV",
        "streamUrl": "https://vs2143.vcdn.biz/fe12e00dc6d1bae0b29c78bc812a1d2b_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183162871/rsid/b2cdd555-2964-42ad-86d0-e12f5e1d9c42/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid5936342843843361125-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 115,
        "name": "Kiss TV",
        "theme": "muzical",
        "description": "Kiss TV difuzează hituri internaționale și românești, videoclipuri și emisiuni dedicate tineretului.",
        "streamUrl": "https://vs2122.vcdn.biz/ec1301fe86928dc8e74c89192df20f5f_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183396811/rsid/bc585a14-9fa0-4ce5-b74b-095d46bb4313/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.0.211*asn/u_srvc/109126/u_did/web_Fbd4uoOcapXzIlVsk39SPOHHC6W1af9x/type.live/chunklist-sid8639905324550229906-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 116,
        "name": "Magic TV",
        "theme": "muzical",
        "description": "Magic TV difuzează muzică variată și videoclipuri pentru toate gusturile.",
        "streamUrl": "https://vs2130.vcdn.biz/519117ad6baafb3f05925ad3d047c611_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183396901/rsid/020de80e-1a1f-4f18-9350-49c13f55229a/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/85.120.23.30*asn/u_srvc/109126/u_did/web_BEhZ0LZLGuQ455jKFFdnE2OFhwWp4SYK/type.live/chunklist-sid7727863863473949822-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 117,
        "name": "Rock TV",
        "theme": "muzical",
        "description": "Rock TV difuzează muzică rock, videoclipuri și emisiuni dedicate fanilor genului.",
        "streamUrl": "https://tv.broadcasting.ro/rocktv/85c83a80-4f71-4f2d-a8d6-43f676896bcb.m3u8",
        "type": "video"
    },
    {
        "id": 118,
        "name": "Taraf TV",
        "theme": "muzical, manele",
        "description": "Taraf TV difuzează manele și muzică de petrecere, videoclipuri, concerte și emisiuni cu artiști cunoscuți, fiind un canal de referință în acest gen muzical.",
        "streamUrl": "https://vs2129.vcdn.biz/8f5510cc44ed9b90ebcceab9f9913777_megogo/live/hls/b/4000/u_sid/0/o/183399001/rsid/e8190161-ef37-4796-99ea-dfa8a167077b/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/79.115.4.61*asn/u_srvc/109126/u_did/web_VJqt6ooaCFcBRJ8XlHEQpr2VJ05YJTGs/type.live/chunklist-sid3427758311381104453-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 119,
        "name": "Tequila Music TV Manele",
        "theme": "muzical, manele",
        "description": "Tequila Music TV Manele",
        "streamUrl": "https://stream.radiotequila.ro/tmp_hls/stream/index.m3u8",
        "type": "video"
    },
    {
        "id": 120,
        "name": "Mooz Dance",
        "theme": "muzical",
        "description": "Mooz Dance difuzează muzică dance și electronică, mixuri și hituri internaționale pentru iubitorii ritmurilor energice.",
        "streamUrl": "https://vs2133.vcdn.biz/5deb15906a3765d7a7eb253282893e54_megogo/live/hls/b/700_2500/u_sid/0/o/183161921/rsid/3c5d107e-21bc-4133-92f6-9a495fbbaf5c/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/85.120.23.30*asn/u_srvc/109126/u_did/web_Kh0G4z2aMpB1VZVZpxcd5gi2gcdQtztX/type.live/chunklist-sid6329562133337448634-b2500000.m3u8",
        "type": "video"
    },
    {
        "id": 121,
        "name": "Atomic TV",
        "theme": "muzical",
        "description": "Atomic TV difuzează muzică variată, de la hituri moderne la clasice, cu emisiuni și videoclipuri pentru pasionații de muzică.",
        "streamUrl": "https://atomic.streamnet.ro/atomictv.m3u8",
        "type": "video"
    },
    {
        "id": 122,
        "name": "Atomic Academy",
        "theme": "muzical",
        "description": "Atomic Academy difuzează muzică, programe și tutoriale muzicale pentru tineri și pasionați.",
        "streamUrl": "https://atomic.streamnet.ro/academia.m3u8",
        "type": "video"
    },
    {
        "id": 123,
        "name": "Music Channel",
        "theme": "muzical",
        "description": "Music Channel",
        "streamUrl": "https://vs2133.vcdn.biz/8e8010f2918123e37b2fabc14caf25cf_megogo/live/hls/b/700_2490/u_sid/0/o/228723541/rsid/2e337997-7c77-406c-82d4-26a3008497b5/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 124,
        "name": "Party Mix",
        "theme": "muzical",
        "description": "Party Mix",
        "streamUrl": "https://vs2144.vcdn.biz/da342997d2dae4884f6ff62e56f82335_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183396881/rsid/72e6efcb-9868-4287-9d3f-75fddfece257/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid5686239233583732056-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 125,
        "name": "Disco Mix",
        "theme": "muzical",
        "description": "Disco Mix",
        "streamUrl": "https://vs2129.vcdn.biz/b62da39282a65152964032499fb8ac09_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183395021/rsid/eae0ed4d-1c29-4c7c-9533-7f6ef7b0c7c4/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid2547962106121559704-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 126,
        "name": "Orizont TV",
        "theme": "muzical, folclor",
        "description": "Orizont TV",
        "streamUrl": "https://vs2141.vcdn.biz/79d368a545a27d292442f2f54ced0279_megogo/live/hls/b/700_2490/u_sid/0/o/185448691/rsid/5f24dd93-870d-49d7-af75-a8aac08bf12e/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid2940822930099067929-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 127,
        "name": "Balada TV",
        "theme": "muzical",
        "description": "Balada TV",
        "streamUrl": "https://vs2144.vcdn.biz/3e776524ed5b85594757143388132f25_megogo/live/hls/b/700_2490/u_sid/0/o/190219471/rsid/222b2cb2-b4a5-464e-afa5-4fa7dddb1014/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid9064176517503131931-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 128,
        "name": "Rapsodia TV",
        "theme": "muzical",
        "description": "Rapsodia TV",
        "streamUrl": "https://vs2124.vcdn.biz/d6b77e2e1e32103b9b5adc8a9391e1eb_megogo/live/hls/b/700_2490/u_sid/0/o/183161911/rsid/efc63396-4608-448e-b015-c1f6280c12cb/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid8071993250473265560-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 129,
        "name": "portoSYNC TOONS",
        "theme": "copii",
        "description": "portoSYNC TOONS difuzează desene animate pentru copii mari, oferind divertisment și animații educative marca portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynctoons.m3u8",
        "type": "video"
    },
    {
        "id": 130,
        "name": "portoSYNC KIDS",
        "theme": "copii",
        "description": "portoSYNC KIDS oferă desene animate pentru copii, programe distractive și educative marca portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynckids.m3u8",
        "type": "video"
    },
    {
        "id": 131,
        "name": "portoSYNC TEEN",
        "theme": "copii",
        "description": "portoSYNC TEEN difuzează animații și seriale pentru adolescenți, cu conținut amuzant și educativ marca portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncteen.m3u8",
        "type": "video"
    },
    {
        "id": 132,
        "name": "portoSYNC JUNIOR",
        "theme": "copii",
        "description": "portoSYNC JUNIOR oferă desene animate și programe pentru cei mai mici, fiind un canal dedicat copiilor marca portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncjunior.m3u8",
        "type": "video"
    },
    {
        "id": 133,
        "name": "Aservo TOONS",
        "theme": "copii",
        "description": "Aservo TOONS oferă desene animate pentru copii mari, cu programe variate și distractive, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservotoons.m3u8",
        "type": "video"
    },
    {
        "id": 134,
        "name": "Aservo KIDS",
        "theme": "copii",
        "description": "Aservo KIDS difuzează desene animate pentru copii, combinând divertisment și învățare, fiind parte din rețeaua Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservokids.m3u8",
        "type": "video"
    },
    {
        "id": 135,
        "name": "Aservo TEEN",
        "theme": "copii",
        "description": "Aservo TEEN este canalul de desene și programe pentru adolescenți, oferind divertisment potrivit vârstei, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoteen.m3u8",
        "type": "video"
    },
    {
        "id": 136,
        "name": "Aservo JUNIOR",
        "theme": "copii",
        "description": "Aservo JUNIOR este canalul de desene și programe educative pentru cei mici, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservojunior.m3u8",
        "type": "video"
    },
    {
        "id": 137,
        "name": "Nupten Kids",
        "theme": "copii",
        "description": "Nupten Kids",
        "streamUrl": "https://live.prtsync.ro/hls/nuptenkids.m3u8",
        "type": "video"
    },
    {
        "id": 138,
        "name": "Tooncast",
        "theme": "copii",
        "description": "Tooncast difuzează desene animate clasice și moderne, oferind programe distractive pentru copii, aparținând de Broadcast Media.",
        "streamUrl": "https://live.prtsync.ro/hls/tooncast.m3u8",
        "type": "video"
    },
    {
        "id": 139,
        "name": "Toonmax",
        "theme": "copii",
        "description": "Toonmax",
        "streamUrl": "https://hls.infinium.top/BanatSyncW0wkw.m3u8",
        "type": "video"
    },
    {
        "id": 140,
        "name": "TraLaLa TV",
        "theme": "copii",
        "description": "TraLaLa TV",
        "streamUrl": "https://vs2130.vcdn.biz/218c32b5f7153f15ef13a4f13f49ba54_megogo/live/hls/b/700_2490_4000/u_sid/0/o/185448041/rsid/d695641f-1dec-4ace-b0ca-543bc31941d1/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 141,
        "name": "portoSYNC DOKU",
        "theme": "documentare",
        "description": "portoSYNC DOKU oferă documentare variate despre natură, știință și cultură, aparținând de portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncdoku.m3u8",
        "type": "video"
    },
    {
        "id": 142,
        "name": "Aservo DOKU",
        "theme": "documentare",
        "description": "Aservo DOKU este canalul de documentare al Aservo, dedicat explorării, științei și culturii.",
        "streamUrl": "https://live.prtsync.ro/hls/aservodoku.m3u8",
        "type": "video"
    },
    {
        "id": 143,
        "name": "DOKU",
        "theme": "documentare",
        "description": "DOKU este un canal de documentare , dedicat explorării, științei și culturii.",
        "streamUrl": "https://live.prtsync.ro/hls/doku.m3u8",
        "type": "video"
    },
    {
        "id": 144,
        "name": "Ade Documentary",
        "theme": "documentare",
        "description": "Ade Documentary prezintă documentare captivante și educative, parte a seriei Ade Media.",
        "streamUrl": "https://media.helloether.co/hls/media/adedocumentary.m3u8",
        "type": "video"
    },
    {
        "id": 145,
        "name": "portoSYNC DISCOVERY",
        "theme": "documentare",
        "description": "portoSYNC DISCOVERY este canalul de explorare și aventură din familia portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncdiscovery.m3u8",
        "type": "video"
    },
    {
        "id": 146,
        "name": "Aservo DISCOVERY",
        "theme": "documentare",
        "description": "Aservo DISCOVERY difuzează documentare de explorare și știință, fiind parte a rețelei Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservodiscovery.m3u8",
        "type": "video"
    },
    {
        "id": 147,
        "name": "portoSYNC TRAVEL",
        "theme": "documentare, călătorii",
        "description": "portoSYNC TRAVEL difuzează programe și documentare de călătorii pentru întreaga familie.",
        "streamUrl": "https://media.helloether.co/hls/media/prtsynctravel.m3u8",
        "type": "video"
    },
    {
        "id": 148,
        "name": "Aservo TRAVEL",
        "theme": "documentare, călătorii",
        "description": "Aservo TRAVEL difuzează programe și documentare de călătorii, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservotravel.m3u8",
        "type": "video"
    },
    {
        "id": 149,
        "name": "Travel Mix",
        "theme": "documentare, călătorii",
        "description": "Travel Mix difuzează programe de călătorii și documentare interesante.",
        "streamUrl": "https://vs2121.vcdn.biz/9b8e0d6fe69c156bdc2efb8ef714e900_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183804761/rsid/b71b4688-f974-4c48-8dec-dcc5130099fa/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.0.211*asn/u_srvc/109126/u_did/web_Fbd4uoOcapXzIlVsk39SPOHHC6W1af9x/type.live/chunklist-sid2475947016838298623-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 150,
        "name": "Zoom TV",
        "theme": "documentare, călătorii",
        "description": "Zoom TV",
        "streamUrl": "https://vs2144.vcdn.biz/1d120f8bb6afed850780147b6723ce96_megogo/live/hls/b/700_2490_4000/u_sid/0/o/192461331/rsid/16b82671-7901-4d9c-86fb-4af259679c3a/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/chunklist-sid7377161688222330589-b4000000-a242831.m3u8",
        "type": "video"
    },
    {
        "id": 151,
        "name": "portoSYNC EXTREME",
        "theme": "documentare, extreme",
        "description": "portoSYNC EXTREME este canalul dedicat sporturilor extreme și documentarelor de acțiune, din seria portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncextreme.m3u8",
        "type": "video"
    },
    {
        "id": 152,
        "name": "Aservo EXTREME",
        "theme": "documentare, extreme",
        "description": "Aservo EXTREME difuzează documentare și programe despre sporturi extreme și aventuri, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoextreme.m3u8",
        "type": "video"
    },
    {
        "id": 153,
        "name": "portoSYNC NATURE",
        "theme": "documentare, natură",
        "description": "portoSYNC NATURE este canalul dedicat documentarelor despre natură și viața sălbatică, parte din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncnature.m3u8",
        "type": "video"
    },
    {
        "id": 154,
        "name": "portoSYNC NATURE 4K",
        "theme": "documentare, natură, 4k",
        "description": "portoSYNC NATURE 4K este canalul dedicat documentarelor despre natură și viața sălbatică, în format 4K, parte din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncnature4km3u8",
        "type": "video"
    },
    {
        "id": 155,
        "name": "Aservo NATURE",
        "theme": "documentare, natură",
        "description": "Aservo NATURE oferă documentare despre natură, ecologie și mediul înconjurător, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservonature.m3u8",
        "type": "video"
    },
    {
        "id": 156,
        "name": "portoSYNC HISTORY",
        "theme": "documentare, cultural",
        "description": "portoSYNC HISTORY prezintă evenimente și momente istorice importante, fiind parte din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynchistory.m3u8",
        "type": "video"
    },
    {
        "id": 157,
        "name": "Aservo HISTORY",
        "theme": "documentare, cultural",
        "description": "Aservo HISTORY este canalul dedicat istoriei și civilizațiilor, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservohistory.m3u8",
        "type": "video"
    },
    {
        "id": 158,
        "name": "portoSYNC EDU",
        "theme": "documentare, EDUCAȚIONAL",
        "description": "portoSYNC EDU",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncedu.m3u8",
        "type": "video"
    },
    {
        "id": 159,
        "name": "portoSYNC CULTURAL",
        "theme": "cultural",
        "description": "portoSYNC CULTURAL promovează arta, cultura și valorile tradiționale, fiind parte din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynccultural.m3u8",
        "type": "video"
    },
    {
        "id": 160,
        "name": "Aservo CULTURAL",
        "theme": "cultural",
        "description": "Aservo CULTURAL difuzează emisiuni culturale, artistice și educative, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservocultural.m3u8",
        "type": "video"
    },
    {
        "id": 161,
        "name": "TVR CULTURAL",
        "theme": "cultural",
        "description": "TVR CULTURAL promovează arta, cultura și valorile tradiționale, fâcând parte din TVR.",
        "streamUrl": "https://tvr-cultural.lg.mncdn.com/tvrcultural/smil:tvrcultural.smil/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 162,
        "name": "Broadcast Cultural",
        "theme": "cultural",
        "description": "Broadcast Cultural este canalul de artă și cultură din portofoliul Broadcast Media.",
        "streamUrl": "https://live.prtsync.ro/hls/brcultural.m3u8",
        "type": "video"
    },
    {
        "id": 163,
        "name": "portoSYNC ARCHITECTURE",
        "theme": "arhitectură",
        "description": "portoSYNC ARCHITECTURE",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncarchitecture.m3u8",
        "type": "video"
    },
    {
        "id": 164,
        "name": "Aservo ARCHITECTURE",
        "theme": "arhitectură",
        "description": "Aservo ARCHITECTURE",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncarchitecture.m3u8",
        "type": "video"
    },
    {
        "id": 165,
        "name": "Sens TV",
        "theme": "arhitectură",
        "description": "Sens TV",
        "streamUrl": "https://vs2139.vcdn.biz/2b58917f97a7a45ed14a6a3f4e1df9e5_megogo/live/hls/b/700_2490_4000/u_sid/0/o/185448721/rsid/d061a40b-864b-43ec-a02a-d6efe10bbf8a/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid7362893080418181401-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 166,
        "name": "portoSYNC AGRO",
        "theme": "agricol",
        "description": "portoSYNC AGRO este canalul dedicat agriculturii și mediului rural, parte din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncagro.m3u8",
        "type": "video"
    },
    {
        "id": 167,
        "name": "Aservo AGRO",
        "theme": "agricol",
        "description": "Aservo AGRO difuzează programe despre agricultură, viață rurală și inovație în domeniu, aparținând de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoagro.m3u8",
        "type": "video"
    },
    {
        "id": 168,
        "name": "Agro TV",
        "theme": "agricol",
        "description": "Agro TV este postul românesc dedicat agriculturii și mediului rural, oferind știri, analize și emisiuni pentru fermieri.",
        "streamUrl": "https://agrotv.streamnet.ro/mobile_tv/agrotv.m3u8",
        "type": "video"
    },
    {
        "id": 169,
        "name": "Trinitas TV",
        "theme": "religios",
        "description": "Trinitas TV este canalul Patriarhiei Române dedicat credinței, spiritualității și valorilor creștine ortodoxe.",
        "streamUrl": "https://vs2132.vcdn.biz/bc7b13a3079707f24f15f937a30ec953_megogo/live/hls/b/2490/u_sid/0/o/183161701/rsid/6e0a0469-3a8e-408b-9877-1bc9c0d901c7/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/79.115.4.61*asn/u_srvc/109126/u_did/web_VJqt6ooaCFcBRJ8XlHEQpr2VJ05YJTGs/type.live/chunklist-sid8970145987557396522-b2490000.m3u8",
        "type": "video"
    },
    {
        "id": 170,
        "name": "Alfa Omega TV",
        "theme": "religios",
        "description": "Alfa Omega TV este un canal creștin ce promovează valorile morale, familia și credința prin programe inspiraționale.",
        "streamUrl": "https://aom-live.maghost.ro/aomTV/streams/OOztu5o9Fx6dh9mD1711027803849.m3u8",
        "type": "video"
    },
    {
        "id": 171,
        "name": "Angelus TV",
        "theme": "religios",
        "description": "Angelus TV este un canal religios românesc dedicat spiritualității, rugăciunii și reflecției creștine.",
        "streamUrl": "https://video.angelustv.ro/hls/angelustv.m3u8",
        "type": "video"
    },
    {
        "id": 172,
        "name": "Shop on TV",
        "theme": "teleshopping",
        "description": "Shop on TV",
        "streamUrl": "https://vs2126.vcdn.biz/bae3947e6c004b22944c04feb8c5350d_megogo/live/hls/b/700_2490_4000/u_sid/0/o/183161731/rsid/b684e5ee-3cf5-49a1-b86a-1945dd3570af/u_uid/0/u_vod/0/u_device/cms_html5/u_devicekey/_site/lip/79.115.2.168*asn/u_srvc/109126/u_did/web_DAMMBeC63nxGnAVUxhNfrRs1RUQk8zMg/type.live/chunklist-sid8226348441878368318-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 173,
        "name": "portoSYNC INTERNAȚIONAL",
        "theme": "internațional, generalist",
        "description": "portoSYNC INTERNAȚIONAL este canalul internațional al portoSYNC, difuzând programe variate pentru publicul din afara României.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncint.m3u8",
        "type": "video"
    },
    {
        "id": 174,
        "name": "Aservo INTERNAȚIONAL",
        "theme": "internațional, generalist",
        "description": "Aservo INTERNAȚIONAL este canalul internațional al rețelei Aservo, cu programe de știri, divertisment și producții proprii pentru audiența internațională.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoint.m3u8",
        "type": "video"
    },
    {
        "id": 175,
        "name": "Bytey INTERNAȚIONAL",
        "theme": "internațional, generalist",
        "description": "Bytey INTERNAȚIONAL este canalul internațional al Bytey, oferind programe variate de știri, divertisment și cultură pentru publicul global.",
        "streamUrl": "https://live.prtsync.ro/hls/byteyint.m3u8",
        "type": "video"
    },
    {
        "id": 176,
        "name": "TVR INTERNAȚIONAL",
        "theme": "internațional, generalist",
        "streamUrl": "https://tvr-international.lg.mncdn.com/tvrinternational/smil:tvrinternational.smil/playlist.m3u8",
        "type": "video",
        "description": "TVR INTERNAȚIONAL"
    },
    {
        "id": 177,
        "name": "Moldova 1",
        "theme": "internațional, generalist, moldova",
        "description": "Moldova 1 este principalul canal public de televiziune din Republica Moldova.",
        "streamUrl": "https://v0.trm.md/static/streaming-playlists/hls/9b79338b-1870-4cd7-91d4-0f6ce5cac7ca/master.m3u8",
        "type": "video"
    },
    {
        "id": 178,
        "name": "Moldova 2",
        "theme": "internațional, generalist, moldova",
        "description": "Moldova 2 completează oferta Moldova 1.",
        "streamUrl": "https://v.trm.md/static/streaming-playlists/hls/937e4e0e-7174-4fb2-a299-480e68b49ecb/master.m3u8",
        "type": "video"
    },
    {
        "id": 179,
        "name": "TVR MOLDOVA",
        "theme": "internațional, generalist, moldova",
        "streamUrl": "https://tvr-moldova.lg.mncdn.com/tvrmoldova/smil:tvrmoldova.smil/chunklist.m3u8",
        "type": "video",
        "description": "TVR MOLDOVA"
    },
    {
        "id": 180,
        "name": "Rai 1",
        "theme": "internațional, generalist, italia",
        "description": "Rai 1 este principalul canal public italian.",
        "streamUrl": "https://ilglobotv-live.akamaized.net/channels/RAI1/Live.m3u8",
        "type": "video"
    },
    {
        "id": 181,
        "name": "Rai 2",
        "theme": "internațional, generalist, italia",
        "description": "Rai 2 este canalul italian de divertisment.",
        "streamUrl": "https://ilglobotv-live.akamaized.net/channels/RAI2/Live.m3u8",
        "type": "video"
    },
    {
        "id": 182,
        "name": "Rai 3",
        "theme": "internațional, generalist, italia",
        "description": "Rai 3 este canalul italian axat pe informație și cultură.",
        "streamUrl": "https://ilglobotv-live.akamaized.net/channels/RAI3/Live.m3u8",
        "type": "video"
    },
    {
        "id": 183,
        "name": "M1",
        "theme": "internațional, generalist, ungaria",
        "description": "M1",
        "streamUrl": "https://vs2133.vcdn.biz/8144eb64c6355d74198e57964ecd133f_megogo/live/hls/b/700_2490_4000/u_sid/0/o/187532331/rsid/48280f47-3d00-4620-b7f9-e91ab7325c6f/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.5.86*asn/u_srvc/109686/te/1784008856/u_did/web_Z4587XfKu5isZnGDbiSqqBiYi57r15VG/type.live/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 184,
        "name": "Duna",
        "theme": "internațional, generalist, ungaria",
        "description": "Duna",
        "streamUrl": "https://vs2122.vcdn.biz/b07d37f29c52af4b14865886720b9146_megogo/live/hls/b/700_2490_4000/u_sid/0/o/187538391/rsid/bbe24099-a194-4c83-b2b9-67e60399578a/u_uid/2176935797/u_vod/4/u_device/cms_html5/u_devicekey/_site/lip/79.115.0.188*asn/u_srvc/109686/te/1784008856/u_did/web_GxfKUmSXdYk34fLj2ODBMpZYL3yxsWtk/type.live/chunklist-sid4797714409851296771-b4000000.m3u8",
        "type": "video"
    },
    {
        "id": 185,
        "name": "BBC One",
        "theme": "internațional, generalist, marea britanie",
        "description": "BBC One este canalul principal al televiziunii publice britanice.",
        "streamUrl": "https://streamer.nexyl.uk/5c858268-a93b-45f8-9e82-41d66b526d6c.m3u8",
        "type": "video"
    },
    {
        "id": 186,
        "name": "BBC Two",
        "theme": "internațional, generalist, marea britanie",
        "description": "BBC Two difuzează programe educative și culturale.",
        "streamUrl": "https://streamer.nexyl.uk/69ef899e-8ca9-4537-9f1a-fe8b4216afbb.m3u8",
        "type": "video"
    },
    {
        "id": 187,
        "name": "BBC Three",
        "theme": "internațional, generalist, marea britanie",
        "description": "BBC Three",
        "streamUrl": "https://streamer.nexyl.uk/39290a19-b8dd-43ea-b8dc-081c37790f24.m3u8",
        "type": "video"
    },
    {
        "id": 188,
        "name": "Euronews French",
        "theme": "internațional, știri, franța",
        "description": "Euronews French",
        "streamUrl": "https://euronews-live-fra-fr.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6564/bitok/eyJzdGlkIjoiYjA1ZmVmMzAtYjhkZC00Y2E5LThkM2ItMTRkNjE1MjdmYjE0IiwibWt0IjoiZnIiLCJjaCI6NjU2NCwicHRmIjo1fQ==/26032/euronews-fr.m3u8",
        "type": "video"
    },
    {
        "id": 189,
        "name": "RT French",
        "theme": "internațional, știri, franța",
        "description": "RT French",
        "streamUrl": "https://rt-fra.rttv.com/dvr/rtfrance/playlist_800Kb.m3u8",
        "type": "video"
    },
    {
        "id": 190,
        "name": "France 24",
        "theme": "internațional, știri, franța",
        "description": "France 24",
        "streamUrl": "https://dash4.antik.sk/live/test_france24_france/playlist.m3u8",
        "type": "video"
    },
    {
        "id": 191,
        "name": "portoSYNC BUZĂU",
        "theme": "regional, generalist",
        "description": "portoSYNC BUZĂU",
        "streamUrl": "https://media.helloether.co/hls/media/prtsyncbz.m3u8",
        "type": "video"
    },
    {
        "id": 193,
        "name": "portoSYNC GALAȚI",
        "theme": "regional, generalist",
        "description": "portoSYNC GALAȚI",
        "streamUrl": "https://media.helloether.co/hls/media/prtsyncgl.m3u8",
        "type": "video"
    },
    {
        "id": 193,
        "name": "portoSYNC SUCEAVA",
        "theme": "regional, generalist",
        "description": "portoSYNC SUCEAVA",
        "streamUrl": "https://media.helloether.co/hls/media/prtsyncsv.m3u8",
        "type": "video"
    },
    {
        "id": 194,
        "name": "portoSYNC IAȘI",
        "theme": "regional, generalist",
        "description": "portoSYNC IAȘI",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncis.m3u8",
        "type": "video"
    },
    {
        "id": 195,
        "name": "portoSYNC VRANCEA",
        "theme": "regional, generalist",
        "description": "portoSYNC VRANCEA",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncvn.m3u8",
        "type": "video"
    },
    {
        "id": 196,
        "name": "portoSYNC BIHOR",
        "theme": "regional, generalist",
        "description": "portoSYNC BIHOR",
        "streamUrl": "https://media.helloether.co/hls/media/prtsyncbh.m3u8",
        "type": "video"
    },
    {
        "id": 197,
        "name": "portoSYNC DOLJ",
        "theme": "regional, generalist",
        "description": "portoSYNC DOLJ",
        "streamUrl": "https://media.helloether.co/hls/media/prtsyncdj.m3u8",
        "type": "video"
    },
    {
        "id": 198,
        "name": "UPTV",
        "theme": "regional, generalist",
        "description": "UPTV",
        "streamUrl": "https://media.helloether.co/hls/media/uptv.m3u8",
        "type": "video"
    },
    {
        "id": 199,
        "name": "OTV Bihor",
        "theme": "regional, generalist",
        "description": "OTV Bihor",
        "streamUrl": "https://media.helloether.co/hls/media/otvbh.m3u8",
        "type": "video"
    },
    {
        "id": 200,
        "name": "OTV Călărași",
        "theme": "regional, generalist",
        "description": "OTV Călărași",
        "streamUrl": "https://media.helloether.co/hls/media/otvcl.m3u8",
        "type": "video"
    },
    {
        "id": 201,
        "name": "TVR CLUJ",
        "theme": "regional, generalist",
        "streamUrl": "https://tvr-cluj.lg.mncdn.com/tvrcluj/smil:tvrcluj.smil/chunklist_b5160000.m3u8",
        "type": "video"
    },
    {
        "id": 202,
        "name": "TVR CRAIOVA",
        "theme": "regional, generalist",
        "streamUrl": "https://tvr-craiova.lg.mncdn.com/tvrcraiova/smil:tvrcraiova.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR CRAIOVA"
    },
    {
        "id": 203,
        "name": "TVR IAȘI",
        "theme": "regional, generalist",
        "streamUrl": "https://tvr-iasi.lg.mncdn.com/tvriasi/smil:tvriasi.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR IAȘI"
    },
    {
        "id": 204,
        "name": "TVR TÂRGU MUREȘ",
        "theme": "regional, generalist",
        "streamUrl": "https://tvr-tgmures.lg.mncdn.com/tvrtgmures/smil:tvrtgmures.smil/playlist.m3u8",
        "type": "video",
        "description": "TVR TÂRGU MUREȘ"
    },
    {
        "id": 205,
        "name": "TVR TIMIȘOARA",
        "theme": "regional, generalist",
        "streamUrl": "https://tvr-timisoara.lg.mncdn.com/tvrtimisoara/smil:tvrtimisoara.smil/chunklist_b5160000.m3u8",
        "type": "video",
        "description": "TVR TIMIȘOARA"
    },
    {
        "id": 206,
        "name": "portoSYNC 4:3",
        "theme": "4:3, generalist",
        "description": "portoSYNC 4:3 este canalul generalist din portoSYNC care difuzează programe în format 4:3.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync4:3.m3u8",
        "type": "video"
    },
    {
        "id": 207,
        "name": "Aservo 4:3",
        "theme": "4:3, generalist",
        "description": "Aservo 4:3 este canalul generalist de pe Aservo care difuzează programe în format 4:3.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo4:3.m3u8",
        "type": "video"
    },
    {
        "id": 208,
        "name": "portoSYNC HD",
        "theme": "hd, generalist",
        "description": "portoSYNC HD este primul canal exclusiv formatului HD, aparține de portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsynchd.m3u8",
        "type": "video"
    },
    {
        "id": 209,
        "name": "Aservo HD",
        "theme": "hd, generalist",
        "description": "Aservo HD este primul canal exclusiv formatului HD, aparține de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservohd.m3u8",
        "type": "video"
    },
    {
        "id": 210,
        "name": "portoSYNC QHD",
        "theme": "qhd, generalist",
        "description": "portoSYNC QHD este primul canal exclusiv formatului QHD, aparține de portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncqhd.m3u8",
        "type": "video"
    },
    {
        "id": 211,
        "name": "Aservo QHD",
        "theme": "qhd, generalist",
        "description": "Aservo QHD este primul canal exclusiv formatului QHD, aparține de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoqhd.m3u8",
        "type": "video"
    },
    {
        "id": 212,
        "name": "portoSYNC 4K",
        "theme": "4k, generalist",
        "description": "portoSYNC 4K este primul canal 4K din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync4k.m3u8",
        "type": "video"
    },
    {
        "id": 213,
        "name": "Aservo 4K",
        "theme": "4k, generalist",
        "description": "Aservo 4K este primul canal 4K, aparține de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo4k.m3u8",
        "type": "video"
    },
    {
        "id": 214,
        "name": "portoSYNC 8K",
        "theme": "8k, generalist",
        "description": "portoSYNC 8K este primul canal 8K din portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync8k.m3u8",
        "type": "video"
    },
    {
        "id": 215,
        "name": "Aservo 8K",
        "theme": "8k, generalist",
        "description": "Aservo 8K este primul canal 8K, aparține de Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo8k.m3u8",
        "type": "video"
    },
    {
        "id": 216,
        "name": "portoSYNC PPV",
        "theme": "ppv, generalist",
        "description": "portoSYNC PPV este singurul canal pay-per-view al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncppv.m3u8",
        "type": "video",
        "password": "portoSYNC"
    },
    {
        "id": 217,
        "name": "portoSYNC PPV 2",
        "theme": "ppv, generalist",
        "description": "portoSYNC PPV este al doilea canal pay-per-view al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncppv2.m3u8",
        "type": "video",
        "password": "portoSYNC"
    },
    {
        "id": 218,
        "name": "Aservo PPV",
        "theme": "ppv, generalist",
        "description": "Aservo PPV este singurul canal pay-per-view al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoppv.m3u8",
        "type": "video",
        "password": "portoSYNC"
    },
    {
        "id": 219,
        "name": "Aservo PPV 2",
        "theme": "ppv, generalist",
        "description": "Aservo PPV este al doilea canal pay-per-view al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoppv2.m3u8",
        "type": "video",
        "password": "portoSYNC"
    },
    {
        "id": 220,
        "name": "portoSYNC ADULT",
        "theme": "adulți",
        "description": "portoSYNC ADULT este singurul canal de adulți care este al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsyncadult.m3u8",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 221,
        "name": "Aservo ADULT",
        "theme": "adulți",
        "description": "Aservo ADULT este singurul canal de adulți care este al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservoadult.m3u8",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 222,
        "name": "portoSYNC 18+",
        "theme": "adulți",
        "description": "portoSYNC 18+ este al doilea canal de adulți care este al portoSYNC.",
        "streamUrl": "https://live.prtsync.ro/hls/prtsync18+.m3u8",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 223,
        "name": "Aservo 18+",
        "theme": "adulți",
        "description": "Aservo 18+ este al doilea canal de adulți care este al Aservo.",
        "streamUrl": "https://live.prtsync.ro/hls/aservo18+.m3u8",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 224,
        "name": "portoSYNC XXX 1",
        "theme": "adulți",
        "description": "portoSYNC XXX 1",
        "streamUrl": "https://prtsync.ro/prt.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 225,
        "name": "portoSYNC XXX 2",
        "theme": "adulți",
        "description": "portoSYNC XXX 2",
        "streamUrl": "https://prtsync.ro/prt2.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 226,
        "name": "portoSYNC XXX 3",
        "theme": "adulți",
        "description": "portoSYNC XXX 3",
        "streamUrl": "https://prtsync.ro/prt3.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 227,
        "name": "portoSYNC XXX 4",
        "theme": "adulți",
        "description": "portoSYNC XXX 4",
        "streamUrl": "https://prtsync.ro/prt4.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 228,
        "name": "portoSYNC XXX 5",
        "theme": "adulți",
        "description": "portoSYNC XXX 5",
        "streamUrl": "https://prtsync.ro/prt5.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 229,
        "name": "portoSYNC XXX 6",
        "theme": "adulți",
        "description": "portoSYNC XXX 6",
        "streamUrl": "https://prtsync.ro/prt6.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 230,
        "name": "portoSYNC XXX 7",
        "theme": "adulți",
        "description": "portoSYNC XXX 7",
        "streamUrl": "https://prtsync.ro/prt7.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 231,
        "name": "portoSYNC XXX 8",
        "theme": "adulți",
        "description": "portoSYNC XXX 8",
        "streamUrl": "https://prtsync.ro/prt8.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 232,
        "name": "portoSYNC XXX 9",
        "theme": "adulți",
        "description": "portoSYNC XXX 9",
        "streamUrl": "https://prtsync.ro/prt9.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 233,
        "name": "portoSYNC XXX 10",
        "theme": "adulți",
        "description": "portoSYNC XXX 10",
        "streamUrl": "https://prtsync.ro/prt10.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 234,
        "name": "portoSYNC XXX 11",
        "theme": "adulți",
        "description": "portoSYNC XXX 11",
        "streamUrl": "https://prtsync.ro/prt11.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 235,
        "name": "portoSYNC XXX 12",
        "theme": "adulți",
        "description": "portoSYNC XXX 12",
        "streamUrl": "https://prtsync.ro/prt12.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 236,
        "name": "portoSYNC XXX 13",
        "theme": "adulți",
        "description": "portoSYNC XXX 13",
        "streamUrl": "https://prtsync.ro/prt13.mp4",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 237,
        "name": "portoSYNC XXX 14",
        "theme": "adulți",
        "description": "portoSYNC XXX 14",
        "streamUrl": "https://prtsync.ro/prt14.mp4",
        "type": "video",
        "password": "ADULT"
    },
{
    "id": 238,
    "name": "portoSYNC XXX 15",
    "theme": "adulți",
    "streamUrl": "https://prtsync.ro/prt15.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 15"
},
{
    "id": 239,
    "name": "portoSYNC XXX 16",
    "theme": "adulți",
    "streamUrl": "https://prtsync.ro/prt16.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 16"
},
{
    "id": 240,
    "name": "portoSYNC XXX 16",
    "theme": "adulți",
    "streamUrl": "https://prtsync.ro/prt17.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 17"
},
{
    "id": 241,
    "name": "portoSYNC XXX 18",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt18.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 18"
},
{
    "id": 242,
    "name": "portoSYNC XXX 19",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt19.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 19"
},
{
    "id": 243,
    "name": "portoSYNC XXX 20",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt20.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 20"
},
{
    "id": 244,
    "name": "portoSYNC XXX 21",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt21.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 21"
},
{
    "id": 245,
    "name": "portoSYNC XXX 22",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt22.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 22"
},
{
    "id": 246,
    "name": "portoSYNC XXX 4K",
    "theme": "adulți",
    "streamUrl": "https://live.prtsync.ro/prt4k.mp4",
    "type": "video",
    "password": "ADULT",
    "description": "portoSYNC XXX 4K"
},
    {
        "id":247,
        "name": "EroticArt",
        "theme": "adulți",
        "description": "EroticArt",
        "streamUrl": "https://live.prtsync.ro/hls/eroticart.m3u8",
        "type": "video",
        "password": "ADULT"
    },
    {
        "id": 248,
        "name": "portoSYNC RADIO",
        "theme": "radio",
        "description": "portoSYNC RADIO este primul canal de radio cu muzică 24/7 din cadrul portoSYNC.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 249,
        "name": "portoSYNC RADIO 2",
        "theme": "radio",
        "description": "portoSYNC RADIO 2 este al doilea canal de radio cu muzică 24/7 din cadrul portoSYNC.",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 250,
        "name": "portoSYNC RADIO 3",
        "theme": "radio",
        "description": "portoSYNC RADIO 3 este al treilea canal de radio cu muzică 24/7 din cadrul portoSYNC.",
        "streamUrl": "https://stream-177.zeno.fm/jmtsijdreecuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJqbXRzaWpkcmVlY3V2IiwiaG9zdCI6InN0cmVhbS0xNzcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjNaRVNMd2J1VGZPRnptckRnWnFrTUEiLCJpYXQiOjE3NjU4OTEwNzEsImV4cCI6MTc2NTg5MTEzMX0.ZQ6OfQbtwy25J_kEvBv2-9DwrWN9yCFRoOAW12L7qcw",
        "type": "audio"
    },
    {
        "id": 251,
        "name": "portoSYNC RADIO Colinde",
        "theme": "radio",
        "description": "portoSYNC RADIO Colinde",
        "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
        "type": "audio"
    },
    {
        "id": 252,
        "name": "Aservo RADIO",
        "theme": "radio",
        "description": "Aservo RADIO este primul canal de radio cu muzică 24/7 din cadrul Aservo.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 253,
        "name": "Aservo RADIO 2",
        "theme": "radio",
        "description": "Aservo RADIO 2 este al doilea canal de radio cu muzică 24/7 din cadrul Aservo.",
        "streamUrl": "https://stream-177.zeno.fm/jmtsijdreecuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJqbXRzaWpkcmVlY3V2IiwiaG9zdCI6InN0cmVhbS0xNzcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjNaRVNMd2J1VGZPRnptckRnWnFrTUEiLCJpYXQiOjE3NjU4OTEwNzEsImV4cCI6MTc2NTg5MTEzMX0.ZQ6OfQbtwy25J_kEvBv2-9DwrWN9yCFRoOAW12L7qcw",
        "type": "audio"
    },
    {
        "id": 254,
        "name": "Aservo RADIO 3",
        "theme": "radio",
        "description": "Aservo RADIO 3 este al treilea canal de radio cu muzică 24/7 din cadrul Aservo.",
        "streamUrl": "https://stream-177.zeno.fm/jmtsijdreecuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJqbXRzaWpkcmVlY3V2IiwiaG9zdCI6InN0cmVhbS0xNzcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjNaRVNMd2J1VGZPRnptckRnWnFrTUEiLCJpYXQiOjE3NjU4OTEwNzEsImV4cCI6MTc2NTg5MTEzMX0.ZQ6OfQbtwy25J_kEvBv2-9DwrWN9yCFRoOAW12L7qcw",
        "type": "audio"
    },
    {
        "id": 255,
        "name": "Aservo RADIO Colinde",
        "theme": "radio",
        "description": "Aservo RADIO Colinde",
        "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
        "type": "audio"
    },
    {
        "id": 256,
        "name": "vranceaSYNC",
        "theme": "radio",
        "description": "vranceaSYNC",
        "streamUrl": "https://stream-177.zeno.fm/jmtsijdreecuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJqbXRzaWpkcmVlY3V2IiwiaG9zdCI6InN0cmVhbS0xNzcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjNaRVNMd2J1VGZPRnptckRnWnFrTUEiLCJpYXQiOjE3NjU4OTEwNzEsImV4cCI6MTc2NTg5MTEzMX0.ZQ6OfQbtwy25J_kEvBv2-9DwrWN9yCFRoOAW12L7qcw",
        "type": "audio"
    },
    {
        "id": 257,
        "name": "Ade Radio",
        "theme": "radio",
        "description": "Ade Radio este primul canal radio marca Ade Media.",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 258,
        "name": "Ade Radio Colinde",
        "theme": "radio",
        "description": "Ade Radio Colinde",
        "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
        "type": "audio"
    },
    {
        "id": 259,
        "name": "Alpha Radio",
        "theme": "radio",
        "description": "Alpha Radio",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 260,
        "name": "Alpha Radio Colinde",
        "theme": "radio",
        "description": "Alpha Radio Colinde",
        "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
        "type": "audio"
    },
    {
        "id": 261,
        "name": "Bytey RADIO",
        "theme": "radio",
        "description": "Bytey RADIO",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 262,
        "name": "Bytey RADIO Colinde",
        "theme": "radio",
        "description": "Bytey RADIO Colinde",
        "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
        "type": "audio"
    },
    {
        "id": 263,
        "name": "Pulse RADIO",
        "theme": "radio",
        "description": "Pulse RADIO este un post de radio românesc dedicat muzicii electronice și celor mai fresh hituri.",
        "streamUrl": "https://stream-173.zeno.fm/vmcnvbbfcvxuv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 264,
        "name": "Pulse MUZFM",
        "theme": "radio",
        "description": "Pulse MUZFM",
        "streamUrl": "https://stream.zeno.fm/pgudgo6oqwvvv",
        "type": "audio"
    },
    {
        "id": 265,
        "name": "XATVCFM",
        "theme": "radio",
        "description": "XATVCFM",
        "streamUrl": "https://stream.zeno.fm/ess1bmm24jutv",
        "type": "audio"
    },
    {
        "id": 266,
        "name": "Radio BanatSync Manele",
        "theme": "radio",
        "streamUrl": "https://listen.banatsync.com/manele",
        "type": "audio",
        "description": "Radio BanatSync Manele"
    },
    {
        "id": 267,
        "name": "Radio BanatSync Populară",
        "theme": "radio",
        "streamUrl": "https://listen.banatsync.com/populara",
        "type": "audio",
        "description": "Radio BanatSync Populară"
    },
    {
        "id": 268,
        "name": "Radio BanatSync Dance",
        "theme": "radio",
        "streamUrl": "https://listen.banatsync.com/dance",
        "type": "audio",
        "description": "Radio BanatSync Dance"
    },
    {
        "id": 269,
        "name": "OLTS Radio",
        "theme": "radio",
        "description": "OLTS Radio e un radio mai altfel, fiind deținută de OLTS.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 270,
        "name": "Broadcast FM",
        "theme": "radio",
        "description": "Broadcast FM este radioul tău de petrecere și de suflet.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 271,
        "name": "Homa",
        "theme": "radio",
        "description": "Homa este un radio de tip electronic, însă are un vibe mai de făcut de acasă.",
        "streamUrl": "https://live.clubradio.ro/listen/clubradio/live",
        "type": "audio"
    },
    {
        "id": 272,
        "name": "Epilisium",
        "theme": "radio",
        "description": "Epilisium este canalul de radio cu muzică 24/7 din cadrul companiei portoSYNC.",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 273,
        "name": "Epilisium Plus",
        "theme": "radio",
        "description": "Epilisium Plus este radioul care aduce muzică în plus.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 274,
        "name": "Teleaudio",
        "theme": "radio",
        "description": "Teleaudio este radioul tău de suflet.",
        "streamUrl": "https://stream-174.zeno.fm/cx6iyynkgzzvv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 275,
        "name": "Teleradio",
        "theme": "radio",
        "description": "Teleradio este radioul tău de petrecere.",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },
    {
        "id": 276,
        "name": "RadioMix",
        "theme": "radio",
        "description": "RadioMix este radioul tău de petrecere.",
        "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
        "type": "audio"
    },

{
    "id": 277,
    "name": "RadioArt",
    "theme": "radio",
    "description": "RadioArt este radioul tău de petrecere.",
    "streamUrl": "https://stream-172.zeno.fm/fcdm6igj1svtv?zt=eyJhbGciOiJIUzI1NiJ9",
    "type": "audio"
},
{
    "id": 278,
    "name": "RadioArt +",
    "theme": "radio",
    "description": "RadioArt +",
    "streamUrl": "https://live.clubradio.ro/listen/clubradio/live",
    "type": "audio"
},
{
    "id": 279,
    "name": "RadioArt Disco",
    "theme": "radio",
    "description": "RadioArt Disco",
    "streamUrl": "https://sonic2-rbx.cloud-center.ro:8034/stream",
    "type": "audio"
},
{
    "id": 280,
    "name": "RadioArt Colinde",
    "theme": "radio",
    "description": "RadioArt Colinde",
    "streamUrl": "https://stream-170.zeno.fm/owyv2kqb88hvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvd3l2MmtxYjg4aHZ2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1iMzhTNUJYUzlDQi1IR21ZTGZGU2ciLCJpYXQiOjE3NjM2NjQ3NTIsImV4cCI6MTc2MzY2NDgxMn0.QwC1xZfZNEVm6MBbd6MPsWDzYBNW5lywyCP2wf5Ftlg",
    "type": "audio"
},
{
    "id": 281,
    "name": "You FM",
    "theme": "radio",
    "description": "You FM este un radio tip CHR, apreciat de Colegiul Tehnic “Edmond Nicolau” Focșani.",
    "streamUrl": "https://sonic2-rbx.cloud-center.ro:8034/stream",
    "type": "audio"
},
{
    "id": 282,
    "name": "Clubradio",
    "theme": "radio",
    "description": "Clubradio este postul de radio dedicat muzicii dance și clubbing, difuzând cele mai tari ritmuri pentru o atmosferă de petrecere non-stop.",
    "streamUrl": "https://live.clubradio.ro/listen/clubradio/live",
    "type": "audio"
},
{
    "id": 283,
    "name": "Radio Te Ador",
    "theme": "radio",
    "description": "Radio Te Ador e un radio care combină vechiul cu actualul.",
    "streamUrl": "https://sonicpanel.namehost.ro:1260/stream",
    "type": "audio"
},
{
    "id": 284,
    "name": "Kiss FM",
    "theme": "radio",
    "description": "Kiss FM are o activitate de peste 20 de ani în România. Este #1 în clasamentele de audiență.",
    "streamUrl": "https://live.kissfm.ro/kissfm.aacp",
    "type": "audio"
},
{
    "id": 285,
    "name": "Magic FM",
    "theme": "radio",
    "description": "Magic FM este un post de radio dedicat melodiilor clasice, baladelor și muzicii relaxante.",
    "streamUrl": "https://live.rockfm.ro:8443/magicfm.aacp",
    "type": "audio"
},
{
    "id": 286,
    "name": "Rock FM",
    "theme": "radio",
    "description": "Rock FM.",
    "streamUrl": "https://live.rockfm.ro/rockfm.aacp",
    "type": "audio"
},
{
    "id": 287,
    "name": "Radio ZU",
    "theme": "radio",
    "description": "Radio ZU este un post de radio din România, orientat spre muzică pop, hituri internaționale și emisiuni de divertisment energice.",
    "streamUrl": "https://live7digi.antenaplay.ro/radiozu/radiozu-48000.m3u8",
    "type": "audio"
},
{
    "id": 288,
    "name": "Focus FM",
    "theme": "radio",
    "description": "Focus FM",
    "streamUrl": "https://stream1.rdstrm.com/focus-fm.ogg",
    "type": "audio"
},
{
    "id": 289,
    "name": "DIGI FM",
    "theme": "radio",
    "description": "DIGI FM este un post de radio național din România, parte a grupului DIGI, care oferă programe de știri, muzică și divertisment.",
    "streamUrl": "https://edge76.rcs-rds.ro/digifm/digifm.mp3",
    "type": "audio"
},
{
    "id": 290,
    "name": "DIGI 24 FM",
    "theme": "radio",
    "description": "DIGI 24 FM este postul de radio al rețelei DIGI 24, oferind știri, actualități și analize în timp real.",
    "streamUrl": "https://edge76.rcs-rds.ro/digifm/digi24fm.mp3",
    "type": "audio"
},
{
    "id": 291,
    "name": "PRO FM",
    "theme": "radio",
    "description": "PRO FM",
    "streamUrl": "https://edge126.rcs-rds.ro/profm/profm.mp3",
    "type": "audio"
},

{
    "id": 292,
    "name": "Dance FM",
    "theme": "radio",
    "description": "Dance FM",
    "streamUrl": "https://edge126.rcs-rds.ro/profm/dancefm.mp3",
    "type": "audio"
},
{
    "id": 293,
    "name": "Radio Impuls",
    "theme": "radio",
    "description": "Radio Impuls este un radio de tip mainstream, aparținând de Dogan Media International.",
    "streamUrl": "https://live.radio-impuls.ro/stream.mp3",
    "type": "audio"
},
{
    "id": 294,
    "name": "Europa FM",
    "theme": "radio",
    "description": "Europa FM este un post de radio național din România, cunoscut pentru muzică actuală, știri de încredere și emisiuni cu audiență largă.",
    "streamUrl": "https://astreaming.edi.ro:8443/europafm_aacp48k",
    "type": "audio"
},
{
    "id": 295,
    "name": "Virgin Radio",
    "theme": "radio",
    "description": "Virgin Radio este un post de radio modern din România, axat pe hituri actuale și conținut urban.",
    "streamUrl": "https://astreaming.edi.ro:8443/virgin_aacp_64k",
    "type": "audio"
},
{
    "id": 296,
    "name": "Radio Boom",
    "theme": "radio",
    "description": "Este un radio buzoian care emite pe internet. Aparține de TVSat.",
    "streamUrl": "https://stream.radioboom.ro:8520/radio.mp3",
    "type": "audio"
},
{
    "id": 297,
    "name": "Radio Manele",
    "theme": "radio",
    "description": "Radio Manele este un radio de manele TOP, 24/7.",
    "streamUrl": "https://play.wrhradios.com/8044/stream",
    "type": "audio"
},
{
    "id": 298,
    "name": "Radio 1 Manele",
    "theme": "radio, manele",
    "description": "Radio 1 Manele este un radio de manele unic.",
    "streamUrl": "https://ssl.omegahost.ro/8000/stream",
    "type": "audio"
},
{
    "id": 299,
    "name": "Radio Trinitas",
    "theme": "radio, religios",
    "description": "Radio Trinitas este postul de radio al Patriarhiei Române, cu programe religioase, culturale și educative în spirit creștin-ortodox.",
    "streamUrl": "https://live.radiotrinitas.ro:8003/;",
    "type": "audio"
},
{
    "id": 300,
    "name": "Denisa - Inimă nu-mi spune tu",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/inimadenisa.mp3",
    "type": "audio",
    "description": "Denisa - Inimă nu-mi spune tu"
},
{
    "id": 301,
    "name": "Bogdan Pîrvu - Am să plâng pentru tot ce am trăit | Bioxic Remix",
    "theme": "muzică, mp3",
    "description": "Bogdan Pîrvu - Am să plâng pentru tot ce am trăit | Bioxic Remix",
    "streamUrl": "https://prtsync.ro/plang.mp3",
    "type": "audio"
},
{
    "id": 302,
    "name": "Ticy, Denisa - Fac orice",
    "theme": "muzică, mp3",
    "description": "Ticy, Denisa - Fac orice",
    "streamUrl": "https://prtsync.ro/facorice.mp3",
    "type": "audio"
},
{
    "id": 303,
    "name": "Alexandra Cotruș - Lady Boss",
    "theme": "muzică, mp3",
    "description": "Alexandra Cotruș - Lady Boss",
    "streamUrl": "https://prtsync.ro/ladyboss.mp3",
    "type": "audio"
},
{
    "id": 304,
    "name": "Alexandra Cotruș - Lady Boss | Porto Remix",
    "theme": "muzică, mp3",
    "description": "Alexandra Cotruș - Lady Boss | Porto Remix",
    "streamUrl": "https://prtsync.ro/ladybossrmx.mp3",
    "type": "audio"
},
{
    "id": 305,
    "name": "Denisa - Eu te iubesc | Everest Remix",
    "theme": "muzică, mp3",
    "description": "Denisa - Eu te iubesc | Everest Remix",
    "streamUrl": "https://prtsync.ro/euteiub.mp3",
    "type": "audio"
},
{
    "id": 306,
    "name": "Babi Minune - Sărac sau rege",
    "theme": "muzică, mp3",
    "description": "Babi Minune - Sărac sau rege",
    "streamUrl": "https://prtsync.ro/saracsaurege.mp3",
    "type": "audio"
},
{
    "id": 307,
    "name": "Kali - Kato te pochna",
    "theme": "muzică, mp3",
    "description": "Kali - Kato te pochna",
    "streamUrl": "https://prtsync.ro/saracsauregebg.mp3",
    "type": "audio"
},
{
    "id": 308,
    "name": "Claudia, Asu, Ticy - Zalele",
    "theme": "muzică, mp3",
    "description": "Claudia, Asu, Ticy - Zalele",
    "streamUrl": "https://prtsync.ro/zalele.mp3",
    "type": "audio"
},
{
    "id": 309,
    "name": "Babi Minune - Inimă de Țigan",
    "theme": "muzică, mp3",
    "description": "Babi Minune - Inimă de Țigan",
    "streamUrl": "https://prtsync.ro/tigan.mp3",
    "type": "audio"
},
{
    "id": 310,
    "name": "Florin Salam, Mr. Juve - Sanki Sanki",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Mr. Juve - Sanki Sanki",
    "streamUrl": "https://prtsync.ro/sankisanki.mp3",
    "type": "audio"
},
{
    "id": 311,
    "name": "Mr. Juve, Cristinel - Bagă dans frumos",
    "theme": "muzică, mp3",
    "description": "Mr. Juve, Cristinel - Bagă dans frumos",
    "streamUrl": "https://prtsync.ro/bagadans.mp3",
    "type": "audio"
},
{
    "id": 312,
    "name": "AlbertNBN, Marius Babanu - Arăboaica alarmantă | CRX, Everest Mashup",
    "theme": "muzică, mp3",
    "description": "AlbertNBN, Marius Babanu - Arăboaica alarmantă | CRX, Everest Mashup",
    "streamUrl": "https://prtsync.ro/portovsmiruna.mp3",
    "type": "audio"
},
{
    "id": 313,
    "name": "Florin Salam, Raluca Drăgoi - Nebunia anului",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Raluca Drăgoi - Nebunia anului",
    "streamUrl": "https://prtsync.ro/nebuniaanului.mp3",
    "type": "audio"
},
{
    "id": 314,
    "name": "Costel Ciofu, Leonard - Toți banii din lume",
    "theme": "muzică, mp3",
    "description": "Costel Ciofu, Leonard - Toți banii din lume",
    "streamUrl": "https://prtsync.ro/totibanii.mp3",
    "type": "audio"
},
{
    "id": 315,
    "name": "Jean de la Craiova, Mădălina - Beyonce de România",
    "theme": "muzică, mp3",
    "description": "Jean de la Craiova, Mădălina - Beyonce de România",
    "streamUrl": "https://prtsync.ro/beyoncero.mp3",
    "type": "audio"
},
{
    "id": 316,
    "name": "Irina Loghin - Valea Prahovei | DJD Remix",
    "theme": "muzică, mp3",
    "description": "Irina Loghin - Valea Prahovei | DJD Remix",
    "streamUrl": "https://prtsync.ro/valeaprahoveirmx.mp3",
    "type": "audio"
},
{
    "id": 317,
    "name": "Tzanca Uraganu - Dansezi de 60 de minute",
    "theme": "muzică, mp3",
    "description": "Tzanca Uraganu - Dansezi de 60 de minute",
    "streamUrl": "https://prtsync.ro/danseaza.mp3",
    "type": "audio"
},
{
    "id": 318,
    "name": "Cătălin Arabu’, Minodora - Întoarce-te în viața mea",
    "theme": "muzică, mp3",
    "description": "Cătălin Arabu’, Minodora - Întoarce-te în viața mea",
    "streamUrl": "https://prtsync.ro/viata.mp3",
    "type": "audio"
},
{
    "id": 319,
    "name": "Florin Salam, Denisa - Iubire iartă-mă | Everest Remix",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Denisa - Iubire iartă-mă | Everest Remix",
    "streamUrl": "https://prtsync.ro/iubireeverest.mp3",
    "type": "audio"
},

{
    "id": 320,
    "name": "Florin Salam, Blondu de la Timișoara - Apasă pe sufletul meu | Bioxic Mashup",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Blondu de la Timișoara - Apasă pe sufletul meu | Bioxic Mashup",
    "streamUrl": "https://prtsync.ro/apasasuflet.mp3",
    "type": "audio"
},
{
    "id": 321,
    "name": "Ionuț Ene - Cum se aude gagică-ta",
    "theme": "muzică, mp3",
    "description": "Ionuț Ene - Cum se aude gagică-ta",
    "streamUrl": "https://prtsync.ro/hitgagica.mp3",
    "type": "audio"
},
{
    "id": 322,
    "name": "Claudia, Play AJ - Îți dau numărul meu pe mess | Bioxic Remix",
    "theme": "muzică, mp3",
    "description": "Claudia, Play AJ - Îți dau numărul meu pe mess | Bioxic Remix",
    "streamUrl": "https://prtsync.ro/mess.mp3",
    "type": "audio"
},
{
    "id": 323,
    "name": "Florin Salam, Frații Turcitu - Alo România",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Frații Turcitu - Alo România",
    "streamUrl": "https://prtsync.ro/aloromania.mp3",
    "type": "audio"
},
{
    "id": 324,
    "name": "Denis Rămînceanu - Tăgădăm paș paș | EVM Remix",
    "theme": "muzică, mp3",
    "description": "Denis Rămînceanu - Tăgădăm paș paș | EVM Remix",
    "streamUrl": "https://prtsync.ro/tagadampas.mp3",
    "type": "audio"
},
{
    "id": 325,
    "name": "Florin Salam - 7 Zile | Bioxic Remix",
    "theme": "muzică, mp3",
    "description": "Florin Salam - 7 Zile | Bioxic Remix",
    "streamUrl": "https://prtsync.ro/7zile.mp3",
    "type": "audio"
},
{
    "id": 326,
    "name": "Real Skitt - Colindul Vagabonților",
    "theme": "muzică, mp3",
    "description": "Real Skitt - Colindul Vagabonților",
    "streamUrl": "https://prtsync.ro/cvag1.mp3",
    "type": "audio"
},
{
    "id": 327,
    "name": "Real Skitt, Marinică Piticu - Colindul Vagabonților 2",
    "theme": "muzică, mp3",
    "description": "Real Skitt, Marinică Piticu - Colindul Vagabonților 2",
    "streamUrl": "https://prtsync.ro/cvag2.mp3",
    "type": "audio"
},
{
    "id": 328,
    "name": "Real Skitt, Marinică Piticu - Colindul Vagabonților 3",
    "theme": "muzică, mp3",
    "description": "Real Skitt, Marinică Piticu - Colindul Vagabonților 3",
    "streamUrl": "https://prtsync.ro/cvag3.mp3",
    "type": "audio"
},
{
    "id": 329,
    "name": "Armin Nicoară - Instrumentala lui Armin",
    "theme": "muzică, mp3",
    "description": "Armin Nicoară - Instrumentala lui Armin",
    "streamUrl": "https://prtsync.ro/armin.mp3",
    "type": "audio"
},
{
    "id": 330,
    "name": "B.U.G. Mafia, MOZA KALIZA - Au!",
    "theme": "muzică, mp3",
    "description": "B.U.G. Mafia, MOZA KALIZA - Au!",
    "streamUrl": "https://prtsync.ro/au.mp3",
    "type": "audio"
},
{
    "id": 331,
    "name": "Real Skitt, Marinică Piticu - Sistemul Thoia Thoing",
    "theme": "muzică, mp3",
    "description": "Real Skitt, Marinică Piticu - Sistemul Thoia Thoing",
    "streamUrl": "https://prtsync.ro/sistemthoia.mp3",
    "type": "audio"
},
{
    "id": 332,
    "name": "Șușanu - I-auzi ia",
    "theme": "muzică, mp3",
    "description": "Șușanu - I-auzi ia",
    "streamUrl": "https://prtsync.ro/iauzi.mp3",
    "type": "audio"
},
{
    "id": 333,
    "name": "Nicolae Guță, Șușanu - Puștoiaco cu păr roșcat (CD Version)",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță, Șușanu - Puștoiaco cu păr roșcat (CD Version)",
    "streamUrl": "https://prtsync.ro/roscatcd.mp3",
    "type": "audio"
},
{
    "id": 334,
    "name": "Nicolae Guță - Cine te iubește",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță - Cine te iubește",
    "streamUrl": "https://prtsync.ro/teiubeste.mp3",
    "type": "audio"
},
{
    "id": 335,
    "name": "Nicolae Guță - Cine te iubește | Everest Remix",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță - Cine te iubește | Everest Remix",
    "streamUrl": "https://prtsync.ro/teiubestermx.mp3",
    "type": "audio"
},
{
    "id": 336,
    "name": "Bairam - Alladin",
    "theme": "muzică, mp3",
    "description": "Bairam - Alladin",
    "streamUrl": "https://prtsync.ro/alladin.mp3",
    "type": "audio"
},
{
    "id": 337,
    "name": "Claudia - Și mi-e dor",
    "theme": "muzică, mp3",
    "description": "Claudia - Și mi-e dor",
    "streamUrl": "https://prtsync.ro/dor.mp3",
    "type": "audio"
},
{
    "id": 338,
    "name": "Asu, Ionuț Prințu - Te iubesc din Corason",
    "theme": "muzică, mp3",
    "description": "Asu, Ionuț Prințu - Te iubesc din Corason",
    "streamUrl": "https://prtsync.ro/corason.mp3",
    "type": "audio"
},
{
    "id": 339,
    "name": "Nicușor Guță - Nu vreau răzbunare",
    "theme": "muzică, mp3",
    "description": "Nicușor Guță - Nu vreau răzbunare",
    "streamUrl": "https://prtsync.ro/inchis.mp3",
    "type": "audio"
},
{
    "id": 340,
    "name": "Florin Bora, Sică de la Oltenița - Sistemul Balmain",
    "theme": "muzică, mp3",
    "description": "Florin Bora, Sică de la Oltenița - Sistemul Balmain",
    "streamUrl": "https://prtsync.ro/balmain.mp3",
    "type": "audio"
},
{
    "id": 341,
    "name": "Denisa, Leo de la Roșiori - Cât ar jura inima mea | Bioxic Mashup",
    "theme": "muzică, mp3",
    "description": "Denisa, Leo de la Roșiori - Cât ar jura inima mea | Bioxic Mashup",
    "streamUrl": "https://prtsync.ro/jurainima.mp3",
    "type": "audio"
},
{
    "id": 342,
    "name": "Florin Salam, Oana - La orice pas",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Oana - La orice pas",
    "streamUrl": "https://prtsync.ro/laoricepas.mp3",
    "type": "audio"
},
{
    "id": 343,
    "name": "Florin Salam, Oana - La orice pas | Bioxic Remix",
    "theme": "muzică, mp3",
    "description": "Florin Salam, Oana - La orice pas | Bioxic Remix",
    "streamUrl": "https://prtsync.ro/laoricepasrmx.mp3",
    "type": "audio"
},
{
    "id": 344,
    "name": "Denisa - Clipele frumoase și senine",
    "theme": "muzică, mp3",
    "description": "Denisa - Clipele frumoase și senine",
    "streamUrl": "https://prtsync.ro/clipe.mp3",
    "type": "audio"
},
{
    "id": 345,
    "name": "Denisa - Clipele frumoase și senine | Porto, DJ Vasile, Sufletul Manelelor, ovou Remix",
    "theme": "muzică, mp3",
    "description": "Denisa - Clipele frumoase și senine | Porto, DJ Vasile, Sufletul Manelelor, ovou Remix",
    "streamUrl": "https://prtsync.ro/clipermx.mp3",
    "type": "audio"
},
{
    "id": 346,
    "name": "Geany Morandi - Vreau să te văd fericită | Remix",
    "theme": "muzică, mp3",
    "description": "Geany Morandi - Vreau să te văd fericită | Remix",
    "streamUrl": "https://prtsync.ro/nevastarmx.mp3",
    "type": "audio"
},
{
    "id": 347,
    "name": "Alexia Nicole Alb - Dragostea mea nu meritai",
    "theme": "muzică, mp3",
    "description": "Alexia Nicole Alb - Dragostea mea nu meritai",
    "streamUrl": "https://prtsync.ro/dragosteamea.mp3",
    "type": "audio"
},
{
    "id": 348,
    "name": "Giulia - Inimi sigilate",
    "theme": "muzică, mp3",
    "description": "Giulia - Inimi sigilate",
    "streamUrl": "https://prtsync.ro/inimisigilate.mp3",
    "type": "audio"
},
{
    "id": 349,
    "name": "Florin Pește, Denisa, Play AJ - Inimă de gheață tu ai",
    "theme": "muzică, mp3",
    "description": "Florin Pește, Denisa, Play AJ - Inimă de gheață tu ai",
    "streamUrl": "https://prtsync.ro/gheata.mp3",
    "type": "audio"
},
{
    "id": 350,
    "name": "Cristian Rizescu, Denisa - Alo tu iubirea mea",
    "theme": "muzică, mp3",
    "description": "Cristian Rizescu, Denisa - Alo tu iubirea mea",
    "streamUrl": "https://prtsync.ro/aloiubireamea.mp3",
    "type": "audio"
},
{
    "id": 351,
    "name": "Cristian Rizescu, Denisa - Alo tu iubirea mea | Bioxic, XOB3R Remix",
    "theme": "muzică, mp3",
    "description": "Cristian Rizescu, Denisa - Alo tu iubirea mea | Bioxic, XOB3R Remix",
    "streamUrl": "https://prtsync.ro/aloiubireamearmx.mp3",
    "type": "audio"
},
{
    "id": 352,
    "name": "Cristi Dules - Arde inima",
    "theme": "muzică, mp3",
    "description": "Cristi Dules - Arde inima",
    "streamUrl": "https://prtsync.ro/ardeinima.mp3",
    "type": "audio"
},
{
    "id": 353,
    "name": "Nicolae Guță, Blondu de la Timișoara - Fac ce vreau",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță, Blondu de la Timișoara - Fac ce vreau",
    "streamUrl": "https://prtsync.ro/faccevreau.mp3",
    "type": "audio"
},
{
    "id": 354,
    "name": "Nicolae Guță, Albert Guță - Ola Chiquita",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță, Albert Guță - Ola Chiquita",
    "streamUrl": "https://prtsync.ro/chiquita.mp3",
    "type": "audio"
},
{
    "id": 355,
    "name": "Nicolae Guță, Play AJ, Ticy - Cât de bună e nebuna mă",
    "theme": "muzică, mp3",
    "description": "Nicolae Guță, Play AJ, Ticy - Cât de bună e nebuna mă",
    "streamUrl": "https://prtsync.ro/catdebuna.mp3",
    "type": "audio"
},
{
    "id": 356,
    "name": "Alex de la Caracal - Ton de reggaeton",
    "theme": "muzică, mp3",
    "description": "Alex de la Caracal - Ton de reggaeton",
    "streamUrl": "https://prtsync.ro/reggaeton.mp3",
    "type": "audio"
},
{
    "id": 357,
    "name": "Adrian Minune - Chef de chef",
    "theme": "muzică, mp3",
    "description": "Adrian Minune - Chef de chef",
    "streamUrl": "https://prtsync.ro/chefdechef.mp3",
    "type": "audio"
},
{
    "id": 358,
    "name": "Adrian Minune - Ești singura dintre femei",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/singura.mp3",
    "type": "audio",
    "description": "Adrian Minune - Ești singura dintre femei"
},
{
    "id": 359,
    "name": "Florin Salam - Hai cu mine în Bali",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/bali.mp3",
    "type": "audio",
    "description": "Florin Salam - Hai cu mine în Bali"
},
{
    "id": 360,
    "name": "Jean de la Craiova - Te iubesc amor",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/amor.mp3",
    "type": "audio",
    "description": "Jean de la Craiova - Te iubesc amor"
},
{
    "id": 361,
    "name": "Nek, ASU, Alessio - De pe marte",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/marte.mp3",
    "type": "audio",
    "description": "Nek, ASU, Alessio - De pe marte"
},
{
    "id": 362,
    "name": "Sorinel Puștiu - Bomba bombelor",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/bomba.mp3",
    "type": "audio",
    "description": "Sorinel Puștiu - Bomba bombelor"
},
{
    "id": 363,
    "name": "Tzanca Uraganu - Bombele",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/bombeletzu.mp3",
    "type": "audio",
    "description": "Tzanca Uraganu - Bombele"
},
{
    "id": 364,
    "name": "Nek, Florin Salam - Îmi fac nebuniile | Everest Remix",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/nebuniile.mp3",
    "type": "audio",
    "description": "Nek, Florin Salam - Îmi fac nebuniile | Everest Remix"
},
{
    "id": 365,
    "name": "Denis M, Everest Manele - De ce ai plecat",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/deceaiplecat.mp3",
    "type": "audio",
    "description": "Denis M, Everest Manele - De ce ai plecat"
},
{
    "id": 366,
    "name": "Theo Rose - A venit poliția",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/politia.mp3",
    "type": "audio",
    "description": "Theo Rose - A venit poliția"
},
{
    "id": 367,
    "name": "Adrian Norocel - Numai femei",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/femei.mp3",
    "type": "audio",
    "description": "Adrian Norocel - Numai femei"
},
{
    "id": 368,
    "name": "Randi - Visător",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/visator.mp3",
    "type": "audio",
    "description": "Randi - Visător"
},
{
    "id": 369,
    "name": "Nicolae Guță - Nu pun banii la saltea | Bioxic, LCO Remix",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/baniilasaltea.mp3",
    "type": "audio",
    "description": "Nicolae Guță - Nu pun banii la saltea | Bioxic, LCO Remix"
},
{
    "id": 370,
    "name": "Jador - Șefa",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/sefa.mp3",
    "type": "audio",
    "description": "Jador - Șefa"
},

{
    "id": 371,
    "name": "Nicolae Guță, Sușanu, Mr Juve, Don Genove - Pariu | Bioxic Remix",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/pariurmx.mp3",
    "type": "audio",
    "description": "Nicolae Guță, Sușanu, Mr Juve, Don Genove - Pariu | Bioxic Remix"
},
{
    "id": 372,
    "name": "Carmen de la Sălciua - Doamne ascultă-mă",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/doamneascultama.mp3",
    "type": "audio",
    "description": "Carmen de la Sălciua - Doamne ascultă-mă"
},
{
    "id": 373,
    "name": "Șușanu - Jagah Jagah",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/jagah.mp3",
    "type": "audio",
    "description": "Șușanu - Jagah Jagah"
},
{
    "id": 374,
    "name": "Nicolae Guță, Florin Salam - 2 inimi s-au îndrăgostit | Bioxic Remix",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/2inimiindragostit.mp3",
    "type": "audio",
    "description": "Nicolae Guță, Florin Salam - 2 inimi s-au îndrăgostit | Bioxic Remix"
},
{
    "id": 375,
    "name": "Alex de la Orăștie, Lorenna - Mașină de fițe",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/fite.mp3",
    "type": "audio",
    "description": "Alex de la Orăștie, Lorenna - Mașină de fițe"
},
{
    "id": 376,
    "name": "Cristian Rizescu - Și ce dacă n-avem bani",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/nuavembani.mp3",
    "type": "audio",
    "description": "Cristian Rizescu - Și ce dacă n-avem bani"
},
{
    "id": 377,
    "name": "Cristian Rizescu - Și ce dacă n-avem bani (portoSYNC Extended)",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/prtbani.mp3",
    "type": "audio",
    "description": "Cristian Rizescu - Și ce dacă n-avem bani (portoSYNC Extended)"
},
{
    "id": 378,
    "name": "Florin Salam - Ia-mă viața mea în brațe",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/viatamea.mp3",
    "type": "audio",
    "description": "Florin Salam - Ia-mă viața mea în brațe"
},
{
    "id": 379,
    "name": "Lunna, Luis Gabriel - Ardem amândoi (În mare goi)",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/ardem.mp3",
    "type": "audio",
    "description": "Lunna, Luis Gabriel - Ardem amândoi (În mare goi)"
},
{
    "id": 380,
    "name": "Cristian Rizescu - Sunt golan, sunt vagabond",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/golan.mp3",
    "type": "audio",
    "description": "Cristian Rizescu - Sunt golan, sunt vagabond"
},

{
    "id": 381,
    "name": "Adrian Norocel - E wow",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/wow.mp3",
    "type": "audio",
    "description": "Adrian Norocel - E wow"
},
{
    "id": 382,
    "name": "Nicolae Guță, Șușanu - Nu mă supărați",
    "theme": "muzică, mp3",
    "streamUrl": "suparati.mp3",
    "type": "audio",
    "description": "Nicolae Guță, Șușanu - Nu mă supărați"
},
{
    "id": 383,
    "name": "Mr Juve, Katalin Girona - Bagă fata",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/fata.mp3",
    "type": "audio",
    "description": "Mr Juve, Katalin Girona - Bagă fata"
},
{
    "id": 384,
    "name": "Bioxic Mashup",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/demo.mp3",
    "type": "audio",
    "description": "Bioxic Mashup"
},
{
    "id": 385,
    "name": "Edward Maya, LavBbe, Costi - Everybody needs somebody (Eurovision Version)",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/eurosomebody.mp3",
    "type": "audio",
    "description": "Edward Maya, LavBbe, Costi - Everybody needs somebody (Eurovision Version)"
},
{
    "id": 386,
    "name": "Bogdan Gavriș - Fericirea mea",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/fericire.mp3",
    "type": "audio",
    "description": "Bogdan Gavriș - Fericirea mea"
},
{
    "id": 387,
    "name": "Edward Maya, LavBbe, Costi - Everybody needs somebody",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/somebody.mp3",
    "type": "audio",
    "description": "Edward Maya, LavBbe, Costi - Everybody needs somebody"
},
{
    "id": 388,
    "name": "Antonio Pican - Humans",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/humans.mp3",
    "type": "audio",
    "description": "Antonio Pican - Humans"
},
{
    "id": 389,
    "name": "Real Skitt, Bogdan Pîrvu - Planetara",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/planetara.mp3",
    "type": "audio",
    "description": "Real Skitt, Bogdan Pîrvu - Planetara"
},
{
    "id": 390,
    "name": "wrs - All the way",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/way.mp3",
    "type": "audio",
    "description": "wrs - All the way"
},
{
    "id": 391,
    "name": "Florin Salam - Vreau să-mi împart viața doar cu tine",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/impart.mp3",
    "type": "audio",
    "description": "Florin Salam - Vreau să-mi împart viața doar cu tine"
},
{
    "id": 392,
    "name": "Iuly Neamțu - Țigancă de București",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/tiganca.mp3",
    "type": "audio",
    "description": "Iuly Neamțu - Țigancă de București"
},
{
    "id": 393,
    "name": "Leo de la Kuweit - Am bani mulți de tot",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/banimulti.mp3",
    "type": "audio",
    "description": "Leo de la Kuweit - Am bani mulți de tot"
},
{
    "id": 394,
    "name": "Iuly Neamțu - Legenda",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/legenda.mp3",
    "type": "audio",
    "description": "Iuly Neamțu - Legenda"
},
{
    "id": 395,
    "name": "Dharia - Sugar & Brownies",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/sugar.mp3",
    "type": "audio",
    "description": "Dharia - Sugar & Brownies"
},
{
    "id": 396,
    "name": "Petrică Cercel - Plătesc pentru plăcerea mea",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/placerea.mp3",
    "type": "audio",
    "description": "Petrică Cercel - Plătesc pentru plăcerea mea"
},
{
    "id": 397,
    "name": "Petrică Cercel - Dacă plouă, nu mă plouă",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/ploua.mp3",
    "type": "audio",
    "description": "Petrică Cercel - Dacă plouă, nu mă plouă"
},
{
    "id": 398,
    "name": "Fly Project - Get Wet",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/getwet.mp3",
    "type": "audio",
    "description": "Fly Project - Get Wet"
},
{
    "id": 399,
    "name": "Jean de la Craiova - O mie de vieți",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/omie.mp3",
    "type": "audio",
    "description": "Jean de la Craiova - O mie de vieți"
},
{
    "id": 400,
    "name": "Prințu de la Cluj - Toma tapa",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/tomatapa.mp3",
    "type": "audio",
    "description": "Prințu de la Cluj - Toma tapa"
},
{
    "id": 401,
    "name": "Costi Ioniță - Barul pe dos",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/dos.mp3",
    "type": "audio",
    "description": "Costi Ioniță - Barul pe dos"
},
{
    "id": 402,
    "name": "Jean de la Craiova - Hola la",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/holala.mp3",
    "type": "audio",
    "description": "Jean de la Craiova - Hola la"
},
{
    "id": 403,
    "name": "Florin Minune - Ți-am jurat iubire",
    "theme": "muzică, mp3",
    "streamUrl": "https://prtsync.ro/otrava.mp3",
    "type": "audio",
    "description": "Florin Minune - Ți-am jurat iubire"
},
{
    "id": 404,
    "name": "ADEVELION 2025: HIGHLIGHTS",
    "theme": "special, adevelion",
    "streamUrl": "https://prtsync.ro/adevelion25moments.mp4",
    "type": "video",
    "description": "ADEVELION 2025: HIGHLIGHTS"
},
{
    "id": 405,
    "name": "ADEVELION 2026: SOUNDTRACK",
    "theme": "special, adevelion, muzică, mp3",
    "streamUrl": "https://prtsync.ro/adevelion2026.mp3",
    "type": "audio",
    "description": "ADEVELION 2026: SOUNDTRACK"
},
{
    "id": 406,
    "name": "ADEVELION 2026: Revelionul care face diferența",
    "theme": "special, adevelion",
    "streamUrl": "https://prtsync.ro/adevelion26.mp4",
    "type": "video",
    "description": "ADEVELION 2026: Revelionul care face diferența"
},
{
    "id": 407,
    "name": "ADEVELION 2026: HIGHLIGHTS",
    "theme": "special, adevelion",
    "streamUrl": "adevelion26moments.mp4",
    "type": "video",
    "description": "ADEVELION 2026: HIGHLIGHTS"
},
{
    "id": 408,
    "name": "Trăiască PSD-ul",
    "theme": "special",
    "streamUrl": "https://prtsync.ro/psd.mp4",
    "type": "video",
    "description": "Trăiască PSD-ul"
},
{
    "id": 409,
    "name": "Alegeri 2025 - TURUL 1",
    "theme": "special",
    "streamUrl": "https://prtsync.ro/turu1.mp4",
    "type": "video",
    "description": "Alegeri 2025 - TURUL 1"
},
]