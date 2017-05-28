// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'https://192.168.1.6:9112',
  //API_URL: 'https://localhost:9112',
  AUTH_URL: {
    login: '/api/v1/rest/auth',
    register: '/api/v1/rest/auth/register',
    accountActivation: '/api/v1/rest/auth/confirmRegistration'
  },
  EBAY_URL: {
    authAccepted: '/secured/api/v1/rest/ebay/auth/accepted',
    authRedirect: '/secured/api/v1/rest/ebay/auth/',
    getTokenExpirationDate: '/secured/api/v1/rest/ebay/auth/token/',
    getCategoryRootId: '/secured/api/v1/ebay/categories/root/',
    getCategoryTreeRoot: '/secured/api/v1/ebay/categories/tree/',
    getCategory: '/secured/api/v1/ebay/categories/tree/',
    getCategoryParameters: null,
    getPaymentPolicy: '/secured/api/v1/ebay/policy/payment',
    getReturnPolicy: '/secured/api/v1/ebay/policy/return',
    getFulfillmentPolicy: '/secured/api/v1/ebay/policy/fulfillment',
    TEST: '/secured/api/v1/ebay/categories/tree/'
  },
  ALLEGRO_URL: {
    authAccepted: '/secured/api/v1/allegro/auth',
    authRedirect: '/secured/api/v1/allegro/auth',
    getTokenExpirationDate: '/secured/api/v1/allegro/auth/status',
    getCategoryList: '/secured/api/v1/allegro/category',
    getCategoryParameters: '/secured/api/v1/allegro/category/parameters/'
  }
};

export const mocks = {
  ebayCategoryAttributes: {
    "fields": [
      {
        "id": 1,
        "name": "Tytul",
        "formType": "STRING",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 2,
        "name": "Opis",
        "formType": "TEXTAREA",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 3,
        "name": "Kategoria",
        "formType": "STRING",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 4,
        "name": "Stan",
        "formType": "COMBOBOX",
        "fieldType": "INTEGER",
        "required": true,
        "possibleValues": [
          {
            "id": 0,
            "value": "Na czesci, nie dzialajace"
          },
          {
            "id": 1,
            "value": "Jak nowe"
          },
          {
            "id": 2,
            "value": "Odnowiony przez producenta"
          },
          {
            "id": 3,
            "value": "Nowy"
          },
          {
            "id": 4,
            "value": "Nowy (inne)"
          },
          {
            "id": 5,
            "value": "Nowy z defektami"
          },
          {
            "id": 6,
            "value": "Odnowiony przez sprzedawce"
          },
          {
            "id": 7,
            "value": "Uzywany w akceptowalnym stanie"
          },
          {
            "id": 8,
            "value": "Uzywany w doskonalym stanie"
          },
          {
            "id": 9,
            "value": "Uzywany w dobrym stanie"
          },
          {
            "id": 10,
            "value": "Uzywany w bardzo dobrym stanie"
          }
        ]
      },
      {
        "id": 5,
        "name": "Ilosc",
        "formType": "INTEGER",
        "fieldType": "INTEGER",
        "required": true
      },
      {
        "id": 7,
        "name": "Cena",
        "formType": "DECIMAL",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 8,
        "name": "Waluta",
        "formType": "COMBOBOX",
        "fieldType": "INTEGER",
        "required": true,
        "possibleValues": [
          {
            "id": 109,
            "value": "PLN"
          },
          {
            "id": 42,
            "value": "EUR"
          },
          {
            "id": 140,
            "value": "USD"
          },
          {
            "id": 27,
            "value": "CHF"
          }
        ]
      },
      {
        "id": 9,
        "name": "Region",
        "formType": "COMBOBOX",
        "fieldType": "INTEGER",
        "required": true,
        "possibleValues": [
          {
            "id": 31,
            "value": "PL"
          }
        ]
      },
      {
        "id": 10,
        "name": "Format oferty",
        "formType": "COMBOBOX",
        "fieldType": "INTEGER",
        "required": true,
        "possibleValues": [
          {
            "id": 0,
            "value": "Kup Teraz"
          }
        ]
      },
      {
        "id": 11,
        "name": "Polityka wysylki",
        "formType": "COMBOBOX",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 12,
        "name": "Polityka zwrotow",
        "formType": "COMBOBOX",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 13,
        "name": "Polityka platnosci",
        "formType": "COMBOBOX",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 14,
        "name": "Lokalizacja sprzedawcy ",
        "formType": "COMBOBOX",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 16,
        "name": "Zdjecie 1",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": true
      },
      {
        "id": 17,
        "name": "Zdjecie 2",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 18,
        "name": "Zdjecie 3",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 19,
        "name": "Zdjecie 4",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 20,
        "name": "Zdjecie 5",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 21,
        "name": "Zdjecie 6",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 22,
        "name": "Zdjecie 7",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 23,
        "name": "Zdjecie 8",
        "formType": "IMAGE",
        "fieldType": "IMAGE",
        "required": false
      },
      {
        "id": 24,
        "name": "Nazwa przedmiotu",
        "formType": "STRING",
        "fieldType": "STRING",
        "required": true
      },
      {
        "id": 25,
        "name": "Cechy",
        "formType": "LIST_STRING",
        "fieldType": "MAP_STRING_STRING",
        "required": false
      }
    ]
  },
  allegroCategoryParameters: {
    'parameters': [
      {
        'id': 1,
        'name': 'Nazwa przedmiotu',
        'formType': 'STRING',
        'fieldType': 'STRING',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 2,
        'name': 'Kategoria',
        'formType': 'INTEGER',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 4,
        'name': 'Czas trwania',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '3 dni'
          },
          {
            'id': 1,
            'name': '5 dni'
          },
          {
            'id': 2,
            'name': '7 dni'
          },
          {
            'id': 3,
            'name': '10 dni'
          },
          {
            'id': 4,
            'name': '14 dni'
          },
          {
            'id': 5,
            'name': '30 dni'
          },
          {
            'id': 99,
            'name': 'DO wyczerpania'
          }
        ]
      },
      {
        'id': 5,
        'name': 'Liczba sztuk',
        'formType': 'INTEGER',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 8,
        'name': 'Cena "Kup Teraz"',
        'formType': 'FLOAT',
        'fieldType': 'FLOAT',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 9,
        'name': 'Kraj',
        'formType': 'INTEGER',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Polska'
          },
          {
            'id': 2,
            'name': 'Wielka Brytania'
          },
          {
            'id': 3,
            'name': 'Szwajcaria'
          }
        ]
      },
      {
        'id': 10,
        'name': 'Województwo',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz województwo -- '
          },
          {
            'id': 1,
            'name': 'dolnośląskie'
          },
          {
            'id': 2,
            'name': 'kujawsko-pomorskie'
          },
          {
            'id': 3,
            'name': 'lubelskie'
          },
          {
            'id': 4,
            'name': 'lubuskie'
          },
          {
            'id': 5,
            'name': 'łódzkie'
          },
          {
            'id': 6,
            'name': 'małopolskie'
          },
          {
            'id': 7,
            'name': 'mazowieckie'
          },
          {
            'id': 8,
            'name': 'opolskie'
          },
          {
            'id': 9,
            'name': 'podkarpackie'
          },
          {
            'id': 10,
            'name': 'podlaskie'
          },
          {
            'id': 11,
            'name': 'pomorskie'
          },
          {
            'id': 12,
            'name': 'śląskie'
          },
          {
            'id': 13,
            'name': 'świętokrzyskie'
          },
          {
            'id': 14,
            'name': 'warmińsko-mazurskie'
          },
          {
            'id': 15,
            'name': 'wielkopolskie'
          },
          {
            'id': 16,
            'name': 'zachodniopomorskie'
          }
        ]
      },
      {
        'id': 11,
        'name': 'Miejscowość',
        'formType': 'STRING',
        'fieldType': 'STRING',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 12,
        'name': 'Koszt przesyłki pokrywa',
        'formType': 'RADIOBUTTON',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': 'Sprzedający'
          },
          {
            'id': 1,
            'name': 'Kupujący'
          }
        ]
      },
      {
        'id': 14,
        'name': 'Formy płatności',
        'formType': 'CHECKBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Zwykły przelew'
          },
          {
            'id': 16,
            'name': 'Inne rodzaje płatności'
          },
          {
            'id': 32,
            'name': 'Wystawiam faktury VAT'
          }
        ]
      },
      {
        'id': 15,
        'name': 'Opcje dodatkowe',
        'formType': 'CHECKBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Pogrubienie'
          },
          {
            'id': 2,
            'name': 'Miniaturka'
          },
          {
            'id': 4,
            'name': 'Podświetlenie'
          },
          {
            'id': 8,
            'name': 'Wyróżnienie'
          },
          {
            'id': 32,
            'name': 'Strona działu'
          },
          {
            'id': 64,
            'name': 'Znak wodny'
          }
        ]
      },
      {
        'id': 16,
        'name': 'Zdjęcie 1',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 17,
        'name': 'Zdjęcie 2',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 18,
        'name': 'Zdjęcie 3',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 19,
        'name': 'Zdjęcie 4',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 20,
        'name': 'Zdjęcie 5',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 21,
        'name': 'Zdjęcie 6',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 22,
        'name': 'Zdjęcie 7',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 23,
        'name': 'Zdjęcie 8',
        'formType': 'IMAGE',
        'fieldType': 'IMAGE',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 24,
        'name': 'Informacje o przedmiocie',
        'formType': 'TEXTAREA',
        'fieldType': 'STRING',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 29,
        'name': 'Forma sprzedaży',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': 'Kup Teraz'
          },
          {
            'id': 1,
            'name': 'Licytacja'
          }
        ]
      },
      {
        'id': 32,
        'name': 'Kod pocztowy',
        'formType': 'STRING',
        'fieldType': 'STRING',
        'required': true,
        'possibleValues': []
      },
      {
        'id': 35,
        'name': 'Darmowe opcje przesyłki',
        'formType': 'STRING',
        'fieldType': 'STRING',
        'required': false,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Odbiór osobisty'
          },
          {
            'id': 2,
            'name': 'Przesyłka elektroniczna (e-mail)'
          },
          {
            'id': 4,
            'name': 'Odbiór osobisty po przedpłacie'
          }
        ]
      },
      {
        'id': 36,
        'name': 'Paczka pocztowa ekonomiczna (pierwsza sztuka)',
        'formType': 'FLOAT',
        'fieldType': 'FLOAT',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 37,
        'name': 'List ekonomiczny (pierwsza sztuka)',
        'formType': 'FLOAT',
        'fieldType': 'FLOAT',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 21078,
        'name': 'Stan',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'Nowy'
          },
          {
            'id': 2,
            'name': 'Używany'
          }
        ]
      },
      {
        'id': 26045,
        'name': 'Właściwości',
        'formType': 'CHECKBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Budzik'
          },
          {
            'id': 2,
            'name': 'Chronograf'
          },
          {
            'id': 4,
            'name': 'Czas światowy'
          },
          {
            'id': 8,
            'name': 'Datownik'
          },
          {
            'id': 16,
            'name': 'Stoper'
          },
          {
            'id': 32,
            'name': 'Timer'
          },
          {
            'id': 128,
            'name': 'Wodoszczelny'
          },
          {
            'id': 256,
            'name': 'Fazy księżyca'
          },
          {
            'id': 512,
            'name': 'Głębokościomierz'
          },
          {
            'id': 1024,
            'name': 'GPS'
          },
          {
            'id': 2048,
            'name': 'Kompas'
          },
          {
            'id': 4096,
            'name': 'Krokomierz'
          },
          {
            'id': 8192,
            'name': 'Monitor pracy serca'
          },
          {
            'id': 16384,
            'name': 'Podświetlenie'
          },
          {
            'id': 32768,
            'name': 'Sterowany radiowo'
          },
          {
            'id': 65536,
            'name': 'Termometr'
          },
          {
            'id': 262144,
            'name': 'Wysokościomierz'
          },
          {
            'id': 524288,
            'name': 'Neobrite'
          },
          {
            'id': 2097152,
            'name': 'Brak'
          }
        ]
      },
      {
        'id': 26046,
        'name': 'Marka',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 1,
            'name': '-- Wybierz -- '
          },
          {
            'id': 2,
            'name': 'Adidas'
          },
          {
            'id': 3,
            'name': 'Adriatica'
          },
          {
            'id': 4,
            'name': 'Adriatica'
          },
          {
            'id': 5,
            'name': 'Armani'
          },
          {
            'id': 6,
            'name': 'Atlantic'
          },
          {
            'id': 7,
            'name': 'Baume&Mercier'
          },
          {
            'id': 8,
            'name': 'Bellux'
          },
          {
            'id': 9,
            'name': 'Breitling'
          },
          {
            'id': 10,
            'name': 'Bulova'
          },
          {
            'id': 11,
            'name': 'Buran'
          },
          {
            'id': 12,
            'name': 'Calvin Klein'
          },
          {
            'id': 13,
            'name': 'Candino'
          },
          {
            'id': 14,
            'name': 'Cartier'
          },
          {
            'id': 15,
            'name': 'Casio'
          },
          {
            'id': 16,
            'name': 'Certina'
          },
          {
            'id': 17,
            'name': 'Charles '
          },
          {
            'id': 18,
            'name': 'Delon'
          },
          {
            'id': 19,
            'name': 'Citizen'
          },
          {
            'id': 20,
            'name': 'Claude Valentini'
          },
          {
            'id': 21,
            'name': 'Croton'
          },
          {
            'id': 22,
            'name': 'Cyril Ratel'
          },
          {
            'id': 23,
            'name': 'Delbana'
          },
          {
            'id': 24,
            'name': 'Diesel'
          },
          {
            'id': 25,
            'name': 'DKNY'
          },
          {
            'id': 26,
            'name': 'Dolce&Gabbana'
          },
          {
            'id': 27,
            'name': 'Doxa'
          },
          {
            'id': 28,
            'name': 'Dugena'
          },
          {
            'id': 29,
            'name': 'Ebel'
          },
          {
            'id': 30,
            'name': 'Epos'
          },
          {
            'id': 31,
            'name': 'Eterna'
          },
          {
            'id': 32,
            'name': 'Festina'
          },
          {
            'id': 33,
            'name': 'Fila'
          },
          {
            'id': 34,
            'name': 'Fossil'
          },
          {
            'id': 35,
            'name': 'Frederique Constant'
          },
          {
            'id': 36,
            'name': 'Fuji'
          },
          {
            'id': 37,
            'name': 'Geneva'
          },
          {
            'id': 38,
            'name': 'Girard '
          },
          {
            'id': 39,
            'name': 'Perregaux'
          },
          {
            'id': 40,
            'name': 'Grovana'
          },
          {
            'id': 41,
            'name': 'Gucci'
          }
        ]
      },
      {
        'id': 26047,
        'name': 'Kolor',
        'formType': 'CHECKBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 1,
            'name': 'Biel'
          },
          {
            'id': 2,
            'name': 'Czerń'
          },
          {
            'id': 4,
            'name': 'Odcienie brązu i beżu'
          },
          {
            'id': 16,
            'name': 'Odcienie fioletu'
          },
          {
            'id': 32,
            'name': 'Odcienie niebieskiego'
          },
          {
            'id': 64,
            'name': 'Odcienie pomarańczowego'
          },
          {
            'id': 128,
            'name': 'Odcienie szarości i srebra'
          },
          {
            'id': 256,
            'name': 'Odcienie zieleni'
          },
          {
            'id': 512,
            'name': 'Odcienie żółtego i złota'
          },
          {
            'id': 1024,
            'name': 'Wielokolorowy'
          },
          {
            'id': 2048,
            'name': 'Inny kolor'
          },
          {
            'id': 4096,
            'name': 'Odcienie czerwieni'
          },
          {
            'id': 8192,
            'name': 'Odcienie różu'
          }
        ]
      },
      {
        'id': 26048,
        'name': 'Mechanizm',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz -- '
          },
          {
            'id': 1,
            'name': 'kwarcowy'
          },
          {
            'id': 2,
            'name': 'mechaniczny'
          },
          {
            'id': 3,
            'name': 'inny'
          },
          {
            'id': 4,
            'name': 'automatyczny'
          },
          {
            'id': 5,
            'name': 'bateria słoneczna'
          },
          {
            'id': 6,
            'name': 'hybrydowy'
          }
        ]
      },
      {
        'id': 26049,
        'name': 'Materiał koperty',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'aluminium'
          },
          {
            'id': 2,
            'name': 'ceramika'
          },
          {
            'id': 3,
            'name': 'metal'
          },
          {
            'id': 4,
            'name': 'mosiądz'
          },
          {
            'id': 5,
            'name': 'srebro'
          },
          {
            'id': 6,
            'name': 'stal'
          },
          {
            'id': 7,
            'name': 'tworzywo sztuczne'
          },
          {
            'id': 8,
            'name': 'tytan'
          },
          {
            'id': 9,
            'name': 'złoto'
          },
          {
            'id': 10,
            'name': 'chrom'
          },
          {
            'id': 11,
            'name': 'drewno'
          },
          {
            'id': 12,
            'name': 'karbon'
          },
          {
            'id': 13,
            'name': 'kauczuk'
          },
          {
            'id': 15,
            'name': 'pozłacany'
          },
          {
            'id': 16,
            'name': 'posrebrzany'
          }
        ]
      },
      {
        'id': 26050,
        'name': 'Materiał paska',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'aluminium'
          },
          {
            'id': 2,
            'name': 'ceramika'
          },
          {
            'id': 3,
            'name': 'guma'
          },
          {
            'id': 4,
            'name': 'tkanina'
          },
          {
            'id': 5,
            'name': 'mosiądz'
          },
          {
            'id': 6,
            'name': 'skóra naturalna'
          },
          {
            'id': 7,
            'name': 'srebro'
          },
          {
            'id': 8,
            'name': 'stal'
          },
          {
            'id': 10,
            'name': 'tworzywo sztuczne'
          },
          {
            'id': 11,
            'name': 'tytan'
          },
          {
            'id': 12,
            'name': 'skóra ekologiczna'
          },
          {
            'id': 13,
            'name': 'złoto'
          },
          {
            'id': 14,
            'name': 'taśma parciana'
          },
          {
            'id': 15,
            'name': 'pozłacany'
          },
          {
            'id': 16,
            'name': 'posrebrzany'
          },
          {
            'id': 17,
            'name': 'kauczuk'
          }
        ]
      },
      {
        'id': 26051,
        'name': 'Rodzaj',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'analogowe'
          },
          {
            'id': 2,
            'name': 'cyfrowe'
          },
          {
            'id': 3,
            'name': 'analogowo - cyfrowe'
          }
        ]
      },
      {
        'id': 26052,
        'name': 'Wodoodporność',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': '50m = WR50'
          },
          {
            'id': 2,
            'name': '100m = WR100'
          },
          {
            'id': 3,
            'name': '200m = WR200'
          },
          {
            'id': 4,
            'name': '30m = WR30'
          },
          {
            'id': 5,
            'name': '300m = WR300'
          },
          {
            'id': 6,
            'name': 'brak'
          },
          {
            'id': 7,
            'name': 'powyżej 300m = WR300'
          }
        ]
      },
      {
        'id': 26053,
        'name': 'Kształt koperty',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'kwadratowa'
          },
          {
            'id': 2,
            'name': 'okrągła'
          },
          {
            'id': 3,
            'name': 'owalna'
          },
          {
            'id': 4,
            'name': 'prostokątna'
          },
          {
            'id': 5,
            'name': 'niestandardowy'
          }
        ]
      },
      {
        'id': 26054,
        'name': 'Szkiełko',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': true,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'akrylowe'
          },
          {
            'id': 2,
            'name': 'mineralne'
          },
          {
            'id': 3,
            'name': 'szafirowe'
          }
        ]
      },
      {
        'id': 26060,
        'name': 'Rodzaj paska',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'Bransoleta'
          },
          {
            'id': 2,
            'name': 'Pasek'
          },
          {
            'id': 3,
            'name': 'Inny'
          },
          {
            'id': 4,
            'name': 'Łańcuszek'
          }
        ]
      },
      {
        'id': 22123,
        'name': 'Waga (z opakowaniem) [kg]',
        'formType': 'FLOAT',
        'fieldType': 'FLOAT',
        'required': false,
        'possibleValues': []
      },
      {
        'id': 24396,
        'name': 'Płeć',
        'formType': 'COMBOBOX',
        'fieldType': 'INTEGER',
        'required': false,
        'possibleValues': [
          {
            'id': 0,
            'name': '-- Wybierz --'
          },
          {
            'id': 1,
            'name': 'Produkt damski'
          },
          {
            'id': 2,
            'name': 'Produkt męski'
          },
          {
            'id': 4,
            'name': 'Produkt uniseks'
          }
        ]
      }
    ]
  }
};
