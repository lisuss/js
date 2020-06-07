export default function (window) {
    const bodyDiv = window.document.createElement('div')

    const rowDiv = window.document.createElement('div')
    rowDiv.className = "row"

    const leftDiv = window.document.createElement('div')
    leftDiv.className = "column left"
    leftDiv.style = "background-color:#bbb;"

    const h2Left = window.document.createElement('h2')
    h2Left.className = "about"
    h2Left.innerText = "About me"

    const containerLeft = window.document.createElement('div')
    containerLeft.className = "container1"


    const pAboutMe = window.document.createElement('p')
    pAboutMe.className = "about"
    pAboutMe.innerText = "Hello this is about me"

    const imgMe = window.document.createElement('img')
    imgMe.className = "photo"
    imgMe.src = `https://ocdn.eu/pulscms-transforms/1/1AAk9kpTURBXy9hZjA2NDY0YWVkN2JiMjJiMTUyMmZjNDg3MGI0ZDU2My5qcGeTkwXNAxTNAbyVB9kyL3B1bHNjbXMvTURBXy8yMzM3YzlmZDZiOTMxZWU2Y2IwZDIzZGNiYTI1OGE5ZC5wbmcAwgCTCaZkNjFjMTgGgaEwAQ/zwycieskie-zdjecie-wildlife-photographer-of-the-year-2019-autor-yongqing-bao.jpg`

    imgMe.addEventListener('click', (e) => {

        const modal = document.createElement('div'); 
        modal.id = "modal"    
        document.getElementsByTagName('body')[0].appendChild(modal);
    
        const modalContent = document.createElement('div')
        modalContent.id = 'modal-content'
        document.getElementById('modal').appendChild(modalContent)
    
        const modalImage = document.createElement('img')
        modalImage.id = 'modal-image'
        modalImage.src = `${imgMe.src}`
        document.getElementById('modal-content').appendChild(modalImage)
    
        const modalEmail = document.createElement('div')
        modalEmail.id = 'modal-email'
        modalEmail.textContent = 'wojciech.sebestowicz@gmail.com'
        document.getElementById('modal-content').appendChild(modalEmail)
    
        const modalButton = document.createElement('div')
        modalButton.id = 'modal-button'
        modalButton.classList = 'modal-button-cls'
        modalButton.addEventListener('click', () => document.getElementById('modal').remove())
        modalButton.textContent = 'Close'
        document.getElementById('modal-content').appendChild(modalButton)
    
       })

    const pPersonalInfo = window.document.createElement('p')
    pPersonalInfo.className = "personalInfo"
    pPersonalInfo.innerText = `Name: Wojciech Sebestowicz
                               Date of birth: 24. 04. 1992
                               Phone: +48 888 769 497
                               E-mail: wojciech.sebestowicz@gmail.com`


    const middleDiv = window.document.createElement('div')
    middleDiv.className = "column middle"
    middleDiv.style = "background-color:#aaa;"

    const middleBody = window.document.createElement('h2')
    middleBody.id = "middleTitle"
    middleBody.innerText = "Książka – dokument piśmienniczy, zapis myśli ludzkiej, raczej obszerny, w postaci publikacji wielostronicowej o określonej liczbie stron, o charakterze trwałym. Dzisiejsza postać książki wywodzi się od kodeksu, czyli kartek połączonych grzbietem, które wraz z upowszechnieniem pergaminu zastąpiły poprzednią formę dokumentu piśmienniczego, czyli zwój. Spis treści 1 Kryteria 2 Elementy budowy książki 2.1 Okładka 2.2 Karty tytułowe 2.3 Blok książki 2.3.1 Materiały wprowadzające 2.3.2 Tekst główny 2.3.3 Materiały uzupełniające tekst główny 2.3.4 Materiały pomocnicze i informacyjne 3 Digitalizacja książki 4 Zobacz też 5 Przypisy 6 Bibliografia Kryteria Za książkę uważa się: wydawnictwo zwarte[1][2] – przeciwieństwo czasopisma, może to być duży utwór literacki, zbiór mniejszych utworów, leksykon, podręcznik, poradnik, praca naukowa, dokument lub zbiór dokumentów, album, atlas itp. wydawnictwo dziełowe – przeciwieństwo akcydensu[3] utwór prozatorski, synonim powieści – utwór obszerniejszy niż opowiadanie, nowela czy esej zbiór mniejszych utworów prozatorskich, o określonej myśli przewodniej i wspólnej kompozycji, powiązanych w całość redakcyjną, także zbiór myśli, zapisków, notatek, artykułów zbindowany lub oprawiony wydruk elektronicznej wersji publikacji (np. z pliku PDF). w terminologii bibliotekarskiej: publikację powyżej 48 stron[4] – publikacja mniejsza określana jest wtedy jako broszura[5] każdą pozycję biblioteczną w oprawie twardej – także np. nuty, mapy, oprawione zszywki czasopism itp. Elementy budowy książki Okładka Przykład okładki podwójnej – na zdjęciu widać rozłożoną okładkę książki Okładka to zewnętrzna część oprawy trwale połączona z wkładem. Zbudowana jest z okładziny tylnej, przedniej i grzbietu[6]. Wykonuje się ją z trwałego papieru, kartonu, tektury, tkaniny czy też tworzywa sztucznego. Jest zwykle przedmiotem opracowania graficznego. Powinny być na niej umieszczone tytuł dzieła, nazwiska autorów i nazwa wydawcy. W wydaniach wielotomowych umieszczona jest informacja o numerze tomu oraz zbiorczy tytuł całego wydania. Na grzbiecie okładki – jeśli szerokość na to pozwala – umieszcza się nazwisko autora i tytuł dzieła. Na grzbietach grubych książek napisy składane są w poprzek grzbietu, natomiast na cieńszych – wzdłuż grzbietu (od góry do dołu). Czwarta strona okładki (z tyłu) jest miejscem dla ceny książki, jej kodu kreskowego, numeru ISBN oraz ewentualnych informacji o autorze, treści dzieła lub serii wydawniczej[7]. Okładka jest jednym ze źródeł informacji potrzebnych do sporządzenia opisu bibliograficznego[8][9]. Wklejka Jest to ddzielna, pojedyncza kartka, w formacie równym lub większym od formatu stronicy, wklejona w grzbiecie książki lub czasopisma. Karty tytułowe Strona tytułowa „Lalki” Bolesława Prusa Karty tytułowe nazywane są często czwórką tytułową. Obejmują cztery pierwsze stronice książki, które powinny zawierać wszystkie formalne i prawne informacje o wydaniu. Coraz częściej można spotkać książki z jedną stroną tytułową. Pierwszą stronicą książki jest strona przedtytułowa. Zwykle umieszcza się na niej skrócony tytuł dzieła (tzw. przedtytuł). W wydaniach seryjnych można na niej umieścić nazwę i znak serii. Pochodzenie stronicy z przedtytułem sięga okresu inkunabułów, kiedy książki trafiały do handlu nieoprawione, a pierwsza stronica miała napisany odręcznie tytuł i chroniła początek dzieła przed zabrudzeniem. Drugą stronicą jest strona przytytułowa (wakat, kontrtytuł) i jest zazwyczaj pusta. Bywa jednak traktowana przez typografa lub grafika jako dodatkowa powierzchnia przy projektowaniu karty tytułowej i wówczas tytulatura znajduje się na dwóch stronach na rozkładzie. Zawiera czasem tzw. frontyspis, czyli ilustrację na niej naklejoną lub wydrukowaną (albo też obcojęzyczną stronę tytułową). Strona tytułowa musi zawierać imiona i nazwiska autorów, tytuł główny wraz z podtytułem, imiona i nazwiska głównych współwydawców książki, oznaczenie numeru wydania, sygnet i nazwę wydawcy w pełnym brzmieniu oraz miejsce i rok wydania. W przypadku książki wielotomowej należy umieścić w tym miejscu numer i tytuł indywidualny tomu[10]. Blok książki Dedykacja Tworzy komplet składek lub kart połączonych na grzbiecie i przygotowanych do połączenia z okładką. Jest to więc wewnętrzna część oprawy, rozumianej jako forma wykończenia druków. Materiały wprowadzające Są to przedmowy, wstęp krytyczny, życiorys autora, nota wydawnicza, podziękowania, dedykacja oraz motto. Teksty pochodzące od autorów uważane są za fragmenty głównego dzieła, w innym wypadku materiały wprowadzające traktuje się jak dzieła współwydane. Przedmowy nie napisane przez autora należy umieszczać po kartach tytułowych i spisie treści, a w następnej kolejności wstęp krytyczny. Przedmowa pióra autora powinna znaleźć się bezpośrednio przed tekstem głównym. Dedykacja powinna się znaleźć na osobnej karcie przed tekstem głównym lub przedmową autora[11]. Tekst główny Przykład tekstu głównego Najczęściej treść dzieła jest wyrażona w postaci tekstu słownego. Bywa też czasem przedstawiana w postaci map, wykresów, nut albo obrazów. Tekst główny bywa przez autora lub wydawcę podzielony na tomy, części, rozdziały, podrozdziały i ewentualnie paragrafy. Partie tekstu mogą być opatrzone kolejnymi numerami, numeracją i tytułami lub samymi tytułami[12]. Materiały uzupełniające tekst główny Spis treści Są to materiały, których treść jest niezbędna do rozumienia głównego tekstu dzieła albo które zawierają informacje rozszerzające. Zaliczamy do nich przypisy, tabele, ilustracje, zdjęcia, grafiki, aneksy oraz bibliografie załącznikowe. Materiały pomocnicze i informacyjne Należą do nich indeksy (skorowidze), wykazy skrótów, ilustracji (map, wkładek), streszczenia obcojęzyczne oraz spis treści. Wymienione elementy zamieszcza się na końcu książki, po materiałach odautorskich. Wyjątek stanowi spis treści, który w wielu książkach, zwykle naukowych, znajduje się na początku książki, po czwórce tytułowej. Digitalizacja książki Osobny artykuł: E-book. Książka elektroniczna z możliwością odczytania jej za pomocą telefonu komórkowego i innych urządzeń mobilnych Księgozbiory stanowią światowe dziedzictwo kultury, ale ze względu na ograniczone możliwości szybkiego dostępu do książek znajdujących się w różnych bibliotekach, a czasem z braku możliwości powszechnego dostępu do dzieł o wartości historycznej, podjęto proces digitalizacji książek. Za pomocą specjalnie do tego celu skonstruowanych skanerów digitalizacji poddawane są całe księgozbiory. Inicjuje się kolejne projekty, takie jak Światowa Biblioteka Cyfrowa czy Europeana, których celem jest udostępnienie dzieł literatury, sztuki czy filmu szerokiej rzeszy odbiorców. Zobacz też Informacje w projektach siostrzanych Commons-logo.svg Multimedia w Wikimedia Commons Wikisource-logo.svg Teksty źródłowe w Wikiźródłach Wikiquote-logo.svg Cytaty w Wikicytatach WiktionaryPl nodesc.svg Definicje słownikowe w Wikisłowniku bibliofilstwo, bibliomania, mól książkowy biblioteka ebook historia książki inkunabuł książka kucharska, książka telefoniczna księgarstwo, na prawach rękopisu druk, poligrafia, DTP, introligatorstwo sztuka książki Wydawca#Lista największych polskich wydawnictw Czytelnictwo Specjalna:Książki"


    bodyDiv.appendChild(rowDiv)

    rowDiv.appendChild(leftDiv)
    leftDiv.appendChild(h2Left)
    leftDiv.appendChild(containerLeft)
    containerLeft.appendChild(pAboutMe)
    containerLeft.appendChild(imgMe)
    containerLeft.appendChild(pPersonalInfo)

    rowDiv.appendChild(middleDiv)
    middleDiv.appendChild(middleBody)

    return rowDiv
}