import { IHttpCacheSettings, ISerializedHttpCacheItem } from "./common/angular/services";

export const cacheSettings: IHttpCacheSettings = {
  verbose: true,
}

export const preloadedCache: ISerializedHttpCacheItem[] = [
  {
    "request": {
      "method": "GET",
      "url": "assets/airtable.svg",
      "params": "",
      "body": null,
      "responseType": "text",
      "withCredentials": false,
      "urlWithParams": "assets/airtable.svg",
      "headers": {}
    },
    "response": {
      "body": "<svg width=\"102\" height=\"22.2\" viewBox=\"0 0 680 148\" style=\"shape-rendering: geometricprecision\">\n  <g>\n    <path fill=\"rgb(51, 51, 51)\" d=\"M272.8495 85.1981L261.0145 53.2891C260.5305 51.9841 258.6855 51.9841 258.2015 53.2891L246.3655 85.1981C246.0025 86.1781 246.7275 87.2201 247.7725 87.2201L271.4435 87.2201C272.4885 87.2201 273.2125 86.1781 272.8495 85.1981M278.3175 103.1321L240.8985 103.1321C240.2705 103.1321 239.7095 103.5221 239.4915 104.1101L232.1245 123.9641C231.9065 124.5521 231.3455 124.9421 230.7185 124.9421L214.5015 124.9421C213.4395 124.9421 212.7135 123.8691 213.1095 122.8841L250.4505 29.8621C250.6785 29.2941 251.2295 28.9211 251.8425 28.9211L267.3725 28.9211C267.9845 28.9211 268.5365 29.2941 268.7645 29.8621L306.1055 122.8831C306.5015 123.8691 305.7755 124.9421 304.7135 124.9421L288.4965 124.9421C287.8695 124.9421 287.3085 124.5521 287.0905 123.9641L279.7235 104.1101C279.5055 103.5221 278.9445 103.1321 278.3175 103.1321M313.7043 61.5684L327.5763 61.5684C328.4053 61.5684 329.0763 62.2404 329.0763 63.0684L329.0763 123.4424C329.0763 124.2704 328.4053 124.9424 327.5763 124.9424L313.7043 124.9424C312.8763 124.9424 312.2043 124.2704 312.2043 123.4424L312.2043 63.0684C312.2043 62.2404 312.8763 61.5684 313.7043 61.5684M379.6682 76.2549C379.6682 77.0829 378.9962 77.7549 378.1682 77.7549L377.7482 77.7549C370.8892 77.7549 365.8582 79.4009 362.6582 82.6929 359.4562 85.9849 357.8572 91.4269 357.8572 99.0169L357.8572 123.4429C357.8572 124.2709 357.1862 124.9429 356.3572 124.9429L342.6222 124.9429C341.7942 124.9429 341.1222 124.2709 341.1222 123.4429L341.1222 63.0679C341.1222 62.2399 341.7942 61.5679 342.6222 61.5679L356.2202 61.5679C357.0492 61.5679 357.7202 62.2399 357.7202 63.0679L357.7202 75.0109 357.9952 75.0109C359.6412 70.0729 362.2472 66.2799 365.8142 63.6259 369.3802 60.9749 373.7702 59.6479 378.9822 59.6479L379.6682 59.6479 379.6682 76.2549zM417.5974 75.6973C416.7694 75.6973 416.0974 76.3693 416.0974 77.1973L416.0974 102.3093C416.0974 104.8703 416.5984 106.6983 417.6064 107.7963 418.6114 108.8933 420.3494 109.4423 422.8184 109.4423L424.1994 109.4423C425.0274 109.4423 425.6994 110.1133 425.6994 110.9423L425.6994 123.5793C425.6994 124.4083 425.0274 125.0793 424.1994 125.0793L418.2914 125.0793C412.1644 125.0793 407.4554 123.5023 404.1634 120.3473 400.8704 117.1923 399.2244 112.5073 399.2244 106.2873L399.2244 77.1973C399.2244 76.3693 398.5534 75.6973 397.7244 75.6973L389.0654 75.6973C388.2364 75.6973 387.5654 75.0253 387.5654 74.1973L387.5654 63.0683C387.5654 62.2403 388.2364 61.5683 389.0654 61.5683L397.7244 61.5683C398.5534 61.5683 399.2244 60.8973 399.2244 60.0683L399.2244 37.6913C399.2244 36.8633 399.8964 36.1913 400.7244 36.1913L414.5974 36.1913C415.4254 36.1913 416.0974 36.8633 416.0974 37.6913L416.0974 60.0683C416.0974 60.8973 416.7694 61.5683 417.5974 61.5683L427.6284 61.5683C428.4574 61.5683 429.1284 62.2403 429.1284 63.0683L429.1284 74.1973C429.1284 75.0253 428.4574 75.6973 427.6284 75.6973L417.5974 75.6973zM481.1191 106.1499C484.2741 102.8579 485.8511 98.5599 485.8511 93.2549 485.8511 87.9529 484.2741 83.6529 481.1191 80.3609 477.9641 77.0689 473.8251 75.4229 468.7041 75.4229 463.5821 75.4229 459.4461 77.0689 456.2901 80.3609 453.1361 83.6529 451.5581 87.9529 451.5581 93.2549 451.5581 98.5599 453.1361 102.8579 456.2901 106.1499 459.4461 109.4419 463.5821 111.0879 468.7041 111.0879 473.8251 111.0879 477.9641 109.4419 481.1191 106.1499M449.0891 123.0219C444.4251 120.3709 440.7431 116.5059 438.0471 111.4309 435.3481 106.3559 434.0001 100.2979 434.0001 93.2549 434.0001 86.2149 435.3481 80.1549 438.0471 75.0799 440.7431 70.0049 444.4251 66.1429 449.0891 63.4889 453.7531 60.8369 458.8731 59.5109 464.4521 59.5109 469.3901 59.5109 473.6191 60.4709 477.1411 62.3919 480.6601 64.3119 483.4721 67.0099 485.5771 70.4849L485.8511 70.4849 485.8511 63.0679C485.8511 62.2399 486.5231 61.5679 487.3511 61.5679L501.0861 61.5679C501.9151 61.5679 502.5861 62.2399 502.5861 63.0679L502.5861 123.4419C502.5861 124.2709 501.9151 124.9419 501.0861 124.9419L487.3511 124.9419C486.5231 124.9419 485.8511 124.2709 485.8511 123.4419L485.8511 116.0259 485.5771 116.0259C483.4721 119.5029 480.6601 122.1989 477.1411 124.1189 473.6191 126.0399 469.3901 126.9999 464.4521 126.9999 458.8731 126.9999 453.7531 125.6729 449.0891 123.0219M559.709 106.1499C562.864 102.8579 564.441 98.5599 564.441 93.2549 564.441 87.9529 562.864 83.6529 559.709 80.3609 556.555 77.0689 552.416 75.4229 547.295 75.4229 542.173 75.4229 538.036 77.0689 534.881 80.3609 531.727 83.6529 530.148 87.9529 530.148 93.2549 530.148 98.5599 531.727 102.8579 534.881 106.1499 538.036 109.4419 542.173 111.0879 547.295 111.0879 552.416 111.0879 556.555 109.4419 559.709 106.1499M538.859 124.1189C535.338 122.1989 532.525 119.5029 530.423 116.0259L530.148 116.0259 530.148 123.4419C530.148 124.2709 529.477 124.9419 528.648 124.9419L514.776 124.9419C513.948 124.9419 513.276 124.2709 513.276 123.4419L513.276 30.4209C513.276 29.5929 513.948 28.9209 514.776 28.9209L528.648 28.9209C529.477 28.9209 530.148 29.5929 530.148 30.4209L530.148 70.4849 530.423 70.4849C532.525 67.0099 535.338 64.3119 538.859 62.3919 542.379 60.4709 546.609 59.5109 551.548 59.5109 557.125 59.5109 562.247 60.8369 566.911 63.4889 571.575 66.1429 575.255 70.0049 577.953 75.0799 580.649 80.1549 582 86.2149 582 93.2549 582 100.2979 580.649 106.3559 577.953 111.4309 575.255 116.5059 571.575 120.3709 566.911 123.0219 562.247 125.6729 557.125 126.9999 551.548 126.9999 546.609 126.9999 542.379 126.0399 538.859 124.1189M605.3721 124.9424L591.5001 124.9424C590.6711 124.9424 590.0001 124.2704 590.0001 123.4424L590.0001 30.4214C590.0001 29.5934 590.6711 28.9214 591.5001 28.9214L605.3721 28.9214C606.2001 28.9214 606.8721 29.5934 606.8721 30.4214L606.8721 123.4424C606.8721 124.2704 606.2001 124.9424 605.3721 124.9424M638.0937 76.2461C635.7937 78.0401 634.2407 80.6301 633.4367 84.0181 633.2157 84.9521 633.9447 85.8481 634.9047 85.8481L661.3047 85.8481C662.2207 85.8481 662.9407 85.0281 662.7927 84.1241 662.2647 80.9191 660.8907 78.3631 658.6697 76.4521 656.0637 74.2121 652.6557 73.0911 648.4497 73.0911 644.2427 73.0911 640.7897 74.1431 638.0937 76.2461M671.9067 68.3581C677.3017 74.2571 679.9997 82.6031 679.9997 93.3921L679.9997 95.1841C679.9997 96.0131 679.3287 96.6841 678.4997 96.6841L634.3957 96.6841C633.4637 96.6841 632.7497 97.5321 632.9107 98.4501 633.6157 102.4581 635.3887 105.6421 638.2307 108.0011 641.4757 110.7001 645.5697 112.0481 650.5077 112.0481 656.8827 112.0481 662.7837 109.5601 668.2097 104.5831 668.8727 103.9751 669.9237 104.1041 670.4377 104.8421L677.1817 114.5221C677.6157 115.1451 677.5237 116.0051 676.9517 116.5051 673.6437 119.4011 669.9947 121.8261 666.0077 123.7761 661.6187 125.9241 656.4507 127.0001 650.5077 127.0001 643.6497 127.0001 637.6577 125.6041 632.5377 122.8161 627.4147 120.0281 623.4377 116.0951 620.6047 111.0191 617.7687 105.9441 616.3517 100.0691 616.3517 93.3921 616.3517 86.7181 617.7237 80.8201 620.4667 75.6971 623.2097 70.5771 627.0507 66.5991 631.9897 63.7631 636.9277 60.9301 642.6887 59.5111 649.2737 59.5111 658.9647 59.5111 666.5097 62.4601 671.9067 68.3581M330.8866 39.2473C330.8866 44.9063 326.2996 49.4933 320.6406 49.4933 314.9816 49.4933 310.3936 44.9063 310.3936 39.2473 310.3936 33.5883 314.9816 29.0013 320.6406 29.0013 326.2996 29.0013 330.8866 33.5883 330.8866 39.2473\"></path>\n    <path fill=\"rgb(255, 186, 5)\" d=\"M78.9992,1.8675 L13.0402,29.1605 C9.3722,30.6785 9.4102,35.8885 13.1012,37.3515 L79.3362,63.6175 C85.1562,65.9255 91.6372,65.9255 97.4562,63.6175 L163.6922,37.3515 C167.3822,35.8885 167.4212,30.6785 163.7522,29.1605 L97.7942,1.8675 C91.7762,-0.6225 85.0162,-0.6225 78.9992,1.8675\"></path>\n    <path fill=\"rgb(57, 202, 255)\" d=\"M94.2726,77.9608 L94.2726,143.5768 C94.2726,146.6978 97.4196,148.8348 100.3206,147.6848 L174.1266,119.0368 C175.8116,118.3688 176.9166,116.7408 176.9166,114.9288 L176.9166,49.3128 C176.9166,46.1918 173.7696,44.0548 170.8686,45.2048 L97.0626,73.8528 C95.3786,74.5208 94.2726,76.1488 94.2726,77.9608\"></path>\n    <path fill=\"rgb(220, 4, 59)\" d=\"M77.0384,81.3464 L55.1344,91.9224 L52.9104,92.9974 L6.6724,115.1524 C3.7414,116.5664 0.0004,114.4304 0.0004,111.1744 L0.0004,49.5884 C0.0004,48.4104 0.6044,47.3934 1.4144,46.6274 C1.7524,46.2884 2.1354,46.0094 2.5334,45.7884 C3.6384,45.1254 5.2144,44.9484 6.5544,45.4784 L76.6704,73.2594 C80.2344,74.6734 80.5144,79.6674 77.0384,81.3464\"></path>\n    <path fill=\"rgba(0, 0, 0, 0.25)\" d=\"M77.0384,81.3464 L55.1344,91.9224 L1.4144,46.6274 C1.7524,46.2884 2.1354,46.0094 2.5334,45.7884 C3.6384,45.1254 5.2144,44.9484 6.5544,45.4784 L76.6704,73.2594 C80.2344,74.6734 80.5144,79.6674 77.0384,81.3464\"></path>\n  </g>\n</svg>\n",
      "headers": {
        "access-control-allow-origin": "*",
        "cache-control": "no-cache",
        "content-length": "8667",
        "content-type": "image/svg+xml",
        "date": "Wed, 20 Nov 2024 18:48:03 GMT",
        "etag": "W/\"8667-1730913536065\"",
        "last-modified": "Wed, 06 Nov 2024 17:18:56 GMT"
      },
      "status": 200,
      "statusText": "OK",
      "url": "http://localhost:4200/assets/airtable.svg",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/meta/bases",
      "params": "",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/meta/bases",
      "headers": {}
    },
    "response": {
      "body": {
        "bases": [
          {
            "id": "appGkawgVuUsMXjLz",
            "name": "Budget",
            "permissionLevel": "create"
          }
        ]
      },
      "headers": {
        "content-length": "98",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/meta/bases",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/meta/bases/appGkawgVuUsMXjLz/tables",
      "params": "",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/meta/bases/appGkawgVuUsMXjLz/tables",
      "headers": {}
    },
    "response": {
      "body": {
        "tables": [
          {
            "id": "tbl4erQA4Xw1FOTI7",
            "name": "Planned Transactions",
            "primaryFieldId": "fldjik9DwbMeKh8xY",
            "fields": [
              {
                "type": "singleLineText",
                "id": "fldjik9DwbMeKh8xY",
                "name": "Description"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldRRbBrRPGtOiHCW",
                "name": "Amount"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "sel765UbYmHfnwabN",
                      "name": "Need",
                      "color": "greenLight2"
                    },
                    {
                      "id": "selxEULKxNLV9Uo4w",
                      "name": "Want",
                      "color": "orangeLight2"
                    }
                  ]
                },
                "id": "fldJiWfFPiLb68rOI",
                "name": "Priority"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "selNN1uJHlPWgr3BR",
                      "name": "Living",
                      "color": "cyanLight2"
                    },
                    {
                      "id": "sel3De3W6iXx6kdgM",
                      "name": "Savings",
                      "color": "yellowLight2"
                    },
                    {
                      "id": "selgWCtsaL4tXdB6e",
                      "name": "Loans",
                      "color": "redLight2"
                    },
                    {
                      "id": "sel0i15cl7WdDdTNZ",
                      "name": "Insurance",
                      "color": "tealLight2"
                    },
                    {
                      "id": "sel9ajgrhrAPCMObB",
                      "name": "Entertainment",
                      "color": "pinkLight2"
                    },
                    {
                      "id": "selkL9Hs22UrxZReu",
                      "name": "Income",
                      "color": "greenLight2"
                    }
                  ]
                },
                "id": "fldgc7LWYsKoY4YXD",
                "name": "Category"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "seltil3QedNDUwLHV",
                      "name": "Income",
                      "color": "greenLight2"
                    },
                    {
                      "id": "sel0p83ZoIvroNovL",
                      "name": "Expense",
                      "color": "redLight2"
                    }
                  ]
                },
                "id": "fld8BTrTdFUudwszE",
                "name": "Is Income"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblW3w8apnZhOc4XL",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldenEiEoFApHMZBo"
                },
                "id": "fldqRlsl0RdVsoPPa",
                "name": "Account"
              },
              {
                "type": "checkbox",
                "options": {
                  "icon": "check",
                  "color": "greenBright"
                },
                "id": "fldw8E30nM56veqRh",
                "name": "Shared?"
              },
              {
                "type": "checkbox",
                "options": {
                  "icon": "check",
                  "color": "greenBright"
                },
                "id": "fld79kEJGCVR0cUPf",
                "name": "Active"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldRRbBrRPGtOiHCW}*12",
                  "referencedFieldIds": [
                    "fldRRbBrRPGtOiHCW"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fld58kaFKqaJX9t0O",
                "name": "Yearly"
              },
              {
                "type": "checkbox",
                "options": {
                  "icon": "check",
                  "color": "greenBright"
                },
                "id": "fldERWIiwW7Tnpt4u",
                "name": "Autopay?"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblBVi8uY9UWnrGkI",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldsWUqHHqdtPOgGL"
                },
                "id": "fldXX5wtUtyZIaQXw",
                "name": "Loans"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldRRbBrRPGtOiHCW}/4",
                  "referencedFieldIds": [
                    "fldRRbBrRPGtOiHCW"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldacfuSFiGcgiDzs",
                "name": "Weekly"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblUxcQhAoFg4zwmC",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldFgNavXoPIELxXP"
                },
                "id": "fldPObN3apg88bNui",
                "name": "Payments"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl1LMghnymbNbTnN",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldqoTeXAGb4L6hCP"
                },
                "id": "fldbUDn9k5zT8WPWl",
                "name": "Bills Rollup"
              },
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldRMsmsTGpVJ0krU",
                "name": "Date Of Transaction"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "selBeVgO4Yq95Ootr",
                      "name": "Monthly",
                      "color": "blueLight2"
                    },
                    {
                      "id": "selZYMSTt5ND3Fgqn",
                      "name": "Weekly",
                      "color": "cyanLight2"
                    },
                    {
                      "id": "seldvRtUDDcYiuTgk",
                      "name": "Yearly",
                      "color": "tealLight2"
                    },
                    {
                      "id": "selD16YW5inwigGSY",
                      "name": "Bi-Yearly",
                      "color": "greenLight2"
                    },
                    {
                      "id": "sel2t4tjN2mtYRG46",
                      "name": "Ad-Hoc",
                      "color": "yellowLight2"
                    }
                  ]
                },
                "id": "fldwV9VDWsRo5ZNhY",
                "name": "Occurrence"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblAv6jJ7jMGlHjtO",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldbbMO9yqgK4rXso"
                },
                "id": "fldG5gDLwdCfsVSAM",
                "name": "Transactions"
              },
              {
                "type": "singleLineText",
                "id": "fldc1NQiywqLx9zAj",
                "name": "Transactions copy"
              }
            ],
            "views": [
              {
                "id": "viwk02PdCic1L6PWz",
                "name": "All - Simple",
                "type": "grid"
              },
              {
                "id": "viwJTDQxPoIWMmtU1",
                "name": "All",
                "type": "grid"
              },
              {
                "id": "viw0DsLV1XsSsDIGa",
                "name": "All Expenses (Including Inactive)",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tblAv6jJ7jMGlHjtO",
            "name": "Transactions",
            "primaryFieldId": "fldozQ78VVFrlfb53",
            "fields": [
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldozQ78VVFrlfb53",
                "name": "Date"
              },
              {
                "type": "singleLineText",
                "id": "flds9l7YjEFrzbkzt",
                "name": "Merchant Name"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblW3w8apnZhOc4XL",
                  "isReversed": false,
                  "prefersSingleRecordLink": true,
                  "inverseLinkFieldId": "fldJ9RWxZxSm76pdp"
                },
                "id": "fldfi8djULhojzfru",
                "name": "Account"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl4erQA4Xw1FOTI7",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldG5gDLwdCfsVSAM"
                },
                "id": "fldbbMO9yqgK4rXso",
                "name": "Planned Transaction"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldtgxH0035zKnbbe",
                "name": "Amount"
              }
            ],
            "views": [
              {
                "id": "viwo4KaUAjFXQC96i",
                "name": "Grid view",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tbl6rDwg9CAcqV0tl",
            "name": "Transactions BofA Categorized",
            "primaryFieldId": "fldUvnkFXetXqtS5A",
            "fields": [
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldUvnkFXetXqtS5A",
                "name": "Date"
              },
              {
                "type": "singleLineText",
                "id": "fldY5SkvlXtXEp1z0",
                "name": "Merchant Name"
              },
              {
                "type": "singleLineText",
                "id": "fldLeFqQW45UoNWr1",
                "name": "Account"
              },
              {
                "type": "singleLineText",
                "id": "fldtMKUzzTEBCEAFE",
                "name": "Category"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldZc4Ux2mT5PBSbL",
                "name": "Amount"
              }
            ],
            "views": [
              {
                "id": "viwU0hnrCCttVQQ6P",
                "name": "Grid view",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tbl1LMghnymbNbTnN",
            "name": "Bills Rollup",
            "primaryFieldId": "fldsEvcNuSBp4c6nu",
            "fields": [
              {
                "type": "singleLineText",
                "id": "fldsEvcNuSBp4c6nu",
                "name": "Name"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl4erQA4Xw1FOTI7",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldbUDn9k5zT8WPWl"
                },
                "id": "fldqoTeXAGb4L6hCP",
                "name": "link"
              }
            ],
            "views": [
              {
                "id": "viwjksXjErhno304Z",
                "name": "Grid view",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tblBVi8uY9UWnrGkI",
            "name": "Loans",
            "primaryFieldId": "fldlD0njo3i9dSIbd",
            "fields": [
              {
                "type": "singleLineText",
                "id": "fldlD0njo3i9dSIbd",
                "name": "Name"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "seltQJD8X2Y4GrjiS",
                      "name": "Auto",
                      "color": "tealLight2"
                    },
                    {
                      "id": "selTIgnWDag77LBix",
                      "name": "Student Debt",
                      "color": "greenLight2"
                    }
                  ]
                },
                "id": "fldmKvymQsWTZxCJN",
                "name": "Category"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldGCQD2gPJ5XsEQw}+{fldn6tc0NfzoJABoG}-{fldZEHJtd9WjDbU3v}-{fldsTOhEDvjQFLvbK}",
                  "referencedFieldIds": [
                    "fldGCQD2gPJ5XsEQw",
                    "fldn6tc0NfzoJABoG",
                    "fldZEHJtd9WjDbU3v",
                    "fldsTOhEDvjQFLvbK"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldIUCw8SUubKh8aW",
                "name": "Remaining Balance"
              },
              {
                "type": "rollup",
                "options": {
                  "isValid": true,
                  "recordLinkFieldId": "fld41FPojMurPlLiG",
                  "fieldIdInLinkedTable": "fldV6vOpymTplmVJJ",
                  "referencedFieldIds": [],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fld2CDdtNbFvKzaHZ",
                "name": "Total Payment Rollup"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldGCQD2gPJ5XsEQw}+{fldn6tc0NfzoJABoG}",
                  "referencedFieldIds": [
                    "fldGCQD2gPJ5XsEQw",
                    "fldn6tc0NfzoJABoG"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldCk2jrvbJAWgQ1X",
                "name": "Total Before Payments"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldGCQD2gPJ5XsEQw",
                "name": "Original Principal"
              },
              {
                "type": "percent",
                "options": {
                  "precision": 3
                },
                "id": "fldyIwyzsxwbsJl5e",
                "name": "Annual Interest"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldn6tc0NfzoJABoG",
                "name": "Accrued Interest"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldGCQD2gPJ5XsEQw}-{fldZEHJtd9WjDbU3v}",
                  "referencedFieldIds": [
                    "fldGCQD2gPJ5XsEQw",
                    "fldZEHJtd9WjDbU3v"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldDG8C3rSVuM3SOk",
                "name": "Principal"
              },
              {
                "type": "rollup",
                "options": {
                  "isValid": true,
                  "recordLinkFieldId": "fld41FPojMurPlLiG",
                  "fieldIdInLinkedTable": "fldovCqCFhMHeOO1L",
                  "referencedFieldIds": [],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldZEHJtd9WjDbU3v",
                "name": "Principal Payed"
              },
              {
                "type": "rollup",
                "options": {
                  "isValid": true,
                  "recordLinkFieldId": "fld41FPojMurPlLiG",
                  "fieldIdInLinkedTable": "fldh1FOUk8TOlFdtm",
                  "referencedFieldIds": [],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldsTOhEDvjQFLvbK",
                "name": "Interest Payed"
              },
              {
                "type": "singleLineText",
                "id": "fldApEiYFC8hq1Kh4",
                "name": "Loan Projections"
              },
              {
                "type": "singleLineText",
                "id": "fldcdnlcKMaQhtV6T",
                "name": "Monthly Bill"
              },
              {
                "type": "multipleLookupValues",
                "options": {
                  "isValid": false,
                  "recordLinkFieldId": "fldcdnlcKMaQhtV6T",
                  "fieldIdInLinkedTable": null,
                  "result": null
                },
                "id": "fldFXq9d6ihGEyQ3X",
                "name": "Bill Amount"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldbNXsqRqNHLInvj",
                "name": "Bill Payment"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblUxcQhAoFg4zwmC",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldD5KRRPI7lpC07T"
                },
                "id": "fld41FPojMurPlLiG",
                "name": "Loan Payments"
              },
              {
                "type": "url",
                "id": "fldD7Gdw7mzQdwEo8",
                "name": "URL"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl4erQA4Xw1FOTI7",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldXX5wtUtyZIaQXw"
                },
                "id": "fldsWUqHHqdtPOgGL",
                "name": "Bills copy"
              }
            ],
            "views": [
              {
                "id": "viwkUGa9AYLyZzMAk",
                "name": "Grid view",
                "type": "grid"
              },
              {
                "id": "viwPDw3vNftCHUQf2",
                "name": "Student Debt",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tblUxcQhAoFg4zwmC",
            "name": "Payments",
            "primaryFieldId": "fldMaEz3y9XOetdJ7",
            "fields": [
              {
                "type": "autoNumber",
                "id": "fldMaEz3y9XOetdJ7",
                "name": "Name"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl4erQA4Xw1FOTI7",
                  "isReversed": false,
                  "prefersSingleRecordLink": true,
                  "inverseLinkFieldId": "fldPObN3apg88bNui"
                },
                "id": "fldFgNavXoPIELxXP",
                "name": "Bill"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblBVi8uY9UWnrGkI",
                  "isReversed": false,
                  "prefersSingleRecordLink": true,
                  "inverseLinkFieldId": "fld41FPojMurPlLiG"
                },
                "id": "fldD5KRRPI7lpC07T",
                "name": "Loan"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldovCqCFhMHeOO1L",
                "name": "Principal Payed"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldh1FOUk8TOlFdtm",
                "name": "Interest Payed"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "{fldovCqCFhMHeOO1L}+{fldh1FOUk8TOlFdtm}",
                  "referencedFieldIds": [
                    "fldovCqCFhMHeOO1L",
                    "fldh1FOUk8TOlFdtm"
                  ],
                  "result": {
                    "type": "currency",
                    "options": {
                      "precision": 2,
                      "symbol": "$"
                    }
                  }
                },
                "id": "fldV6vOpymTplmVJJ",
                "name": "Total Payment"
              },
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldtEd6pAoPdgDP0C",
                "name": "Payment Date"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "IF({fldD5KRRPI7lpC07T} = \"\", \"Bill\", \"Loan\")",
                  "referencedFieldIds": [
                    "fldD5KRRPI7lpC07T"
                  ],
                  "result": {
                    "type": "singleLineText"
                  }
                },
                "id": "fld517ZbnCVld0Uhm",
                "name": "Type"
              },
              {
                "type": "singleLineText",
                "id": "fldgBD9arkiRdN7NV",
                "name": "Other Name"
              },
              {
                "type": "formula",
                "options": {
                  "isValid": true,
                  "formula": "CONCATENATE({fldFgNavXoPIELxXP}, {fldD5KRRPI7lpC07T}, {fldgBD9arkiRdN7NV})",
                  "referencedFieldIds": [
                    "fldFgNavXoPIELxXP",
                    "fldD5KRRPI7lpC07T",
                    "fldgBD9arkiRdN7NV"
                  ],
                  "result": {
                    "type": "singleLineText"
                  }
                },
                "id": "fldmBEGvRE5LidSLs",
                "name": "Full Name"
              }
            ],
            "views": [
              {
                "id": "viw8rgFjOS19vmdCI",
                "name": "All",
                "type": "grid"
              },
              {
                "id": "viwxJeeFKmdflugX6",
                "name": "Bills",
                "type": "grid"
              },
              {
                "id": "viw5Su160MkkfrOhD",
                "name": "Bills - Grouped",
                "type": "grid"
              },
              {
                "id": "viwlgatGZDXk4bq9b",
                "name": "Bills - Monthly",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tbl3qwqIbmut5JhmL",
            "name": "Loan Projection",
            "primaryFieldId": "fld45JSFYUTsgpa0P",
            "fields": [
              {
                "type": "number",
                "options": {
                  "precision": 0
                },
                "id": "fld45JSFYUTsgpa0P",
                "name": "ID"
              },
              {
                "type": "number",
                "options": {
                  "precision": 0
                },
                "id": "fldAIvYFLsXQchEuR",
                "name": "Year"
              },
              {
                "type": "number",
                "options": {
                  "precision": 0
                },
                "id": "fldInBB65QZI3DfxD",
                "name": "Month"
              },
              {
                "type": "singleLineText",
                "id": "fldvDuN0doVmuoy91",
                "name": "Loan"
              },
              {
                "type": "percent",
                "options": {
                  "precision": 3
                },
                "id": "fldISh44gwyw6VkdN",
                "name": "Monthly Interest"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldHAlJASAbXBrv4K",
                "name": "Cumulative Interest"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fld4idHvcr9zZgcAu",
                "name": "Interest Gained"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldQ7yJCmBeWdzMDc",
                "name": "Bill Payment"
              },
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldO1znvpCuJH4rOP",
                "name": "Created"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldMV6KH5g9nV7d3y",
                "name": "Growth Rate"
              },
              {
                "type": "date",
                "options": {
                  "dateFormat": {
                    "name": "local",
                    "format": "l"
                  }
                },
                "id": "fldOpjAcVfFWsSNxh",
                "name": "Projected Date"
              }
            ],
            "views": [
              {
                "id": "viwGIS2EVCBVbKGCr",
                "name": "Grid view",
                "type": "grid"
              },
              {
                "id": "viwZ8iM8N1bM6mY0z",
                "name": "Payoff By Loan",
                "type": "grid"
              },
              {
                "id": "viwUvj3CT4eb6N8F8",
                "name": "Payoff By Year",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tblFIVkHECVlT8lKe",
            "name": "Balance",
            "primaryFieldId": "fldGEy9sthdZYsBjk",
            "fields": [
              {
                "type": "singleLineText",
                "id": "fldGEy9sthdZYsBjk",
                "name": "Name"
              },
              {
                "type": "currency",
                "options": {
                  "precision": 2,
                  "symbol": "$"
                },
                "id": "fldnVlLnUCayMa8VJ",
                "name": "Assignee"
              }
            ],
            "views": [
              {
                "id": "viw2zuAprXzflhcLa",
                "name": "Grid view",
                "type": "grid"
              }
            ]
          },
          {
            "id": "tblW3w8apnZhOc4XL",
            "name": "Accounts",
            "primaryFieldId": "fld2q32hwXIj5XRRc",
            "fields": [
              {
                "type": "singleLineText",
                "id": "fld2q32hwXIj5XRRc",
                "name": "Name"
              },
              {
                "type": "singleSelect",
                "options": {
                  "choices": [
                    {
                      "id": "selTXuBHSBwUJhTo6",
                      "name": "Kenny",
                      "color": "blueLight2"
                    },
                    {
                      "id": "selwzCwkEw5MEBeoc",
                      "name": "Alexis",
                      "color": "pinkLight2"
                    }
                  ]
                },
                "id": "fldUxfFMsLumETge9",
                "name": "Owner"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tbl4erQA4Xw1FOTI7",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldqRlsl0RdVsoPPa"
                },
                "id": "fldenEiEoFApHMZBo",
                "name": "Bills"
              },
              {
                "type": "multipleRecordLinks",
                "options": {
                  "linkedTableId": "tblAv6jJ7jMGlHjtO",
                  "isReversed": false,
                  "prefersSingleRecordLink": false,
                  "inverseLinkFieldId": "fldfi8djULhojzfru"
                },
                "id": "fldJ9RWxZxSm76pdp",
                "name": "Transactions"
              },
              {
                "type": "singleLineText",
                "id": "fldf5o941QGSck6dW",
                "name": "Transactions copy"
              }
            ],
            "views": [
              {
                "id": "viwcczy6glasND2d5",
                "name": "Grid view",
                "type": "grid"
              }
            ]
          }
        ]
      },
      "headers": {
        "content-length": "3220",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/meta/bases/appGkawgVuUsMXjLz/tables",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Planned Transactions",
      "params": "",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Planned Transactions",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "rec0wiQXUvRNzeKk5",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Vacation savings",
              "Active": true,
              "Autopay?": true,
              "Amount": 200,
              "Priority": "Want",
              "Category": "Savings",
              "Is Income": "Income",
              "Account": [
                "recow9Q1jyGFMUZje"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": 2400,
              "Weekly": 50
            }
          },
          {
            "id": "rec24UlfpGafM87e4",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Storage Unit",
              "Autopay?": true,
              "Amount": -200,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Yearly": -2400,
              "Weekly": -50
            }
          },
          {
            "id": "rec2tHkiHrXripfpX",
            "createdTime": "2023-07-12T15:59:37.000Z",
            "fields": {
              "Description": "City Utility (Water)",
              "Active": true,
              "Amount": -100,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "rechscP2vLTD1lRBq"
              ],
              "Payments": [
                "reckQ82bzFlSYwEP5",
                "recc6uwcY4ZV1wUtg",
                "recnbp4p3jCoPVW66",
                "rec3c7Jwgx7RY7W82",
                "recuaOjrbAaKwQpcb",
                "recXQVMM93Rp77owM"
              ],
              "Shared?": true,
              "Date Of Transaction": "2024-08-01",
              "Occurrence": "Monthly",
              "Yearly": -1200,
              "Weekly": -25
            }
          },
          {
            "id": "rec3NnB8HihK9VE2u",
            "createdTime": "2023-07-14T15:06:28.000Z",
            "fields": {
              "Description": "HOA",
              "Active": true,
              "Amount": -200,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Payments": [
                "reck1g4y7GZCqMAu7",
                "recGyEczDfUarV0KB",
                "recsqTskXOu8J9pYl",
                "recOtmtkVjGunN8Kg",
                "recGspGEhjbrBeSQR"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Monthly",
              "Transactions": [
                "recIqu93UB2M5hBE4",
                "recjpFcgEXFTSNHKY",
                "recIitUMV1jaYsjCY",
                "rechlRu81xtbl9ihE",
                "recb4LPLyvSvzzDX4",
                "recaZVhJkVy0NQcv4",
                "recN6VbGkgLrDELJc",
                "recoe2dTfQ3UxeKAU"
              ],
              "Yearly": -2400,
              "Weekly": -50
            }
          },
          {
            "id": "rec72CuwwvydQ2UXn",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "ICloud 50Gb",
              "Active": true,
              "Autopay?": true,
              "Amount": -0.99,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-19",
              "Occurrence": "Monthly",
              "Yearly": -11.879999999999999,
              "Weekly": -0.2475
            }
          },
          {
            "id": "recFCJqTV7JsI30eU",
            "createdTime": "2023-06-23T16:07:13.000Z",
            "fields": {
              "Description": "House Mortgage",
              "Active": true,
              "Amount": -1964,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Payments": [
                "recS1RnppCl9L2Lgj",
                "recO6Hzuky4vwQGcs",
                "recdoXcNDj7zDHL7x",
                "recMSTun5giwtYV6t",
                "recq36RpxdmsM0zjL"
              ],
              "Shared?": true,
              "Date Of Transaction": "2024-08-05",
              "Occurrence": "Monthly",
              "Transactions": [
                "rec7s7inFuL9bQBiu",
                "rec82IWarerOmQRka",
                "recUNiHQb3Y4Nsx39",
                "recDden68Dq4t01XN",
                "recEyaXl7MnyxqcWq",
                "recoLEcRX1gB5SSBC",
                "rec656qJFbgeaRyWn",
                "rectzem60K1A8rZPY"
              ],
              "Yearly": -23568,
              "Weekly": -491
            }
          },
          {
            "id": "recFPfoIDZl4Zf3GQ",
            "createdTime": "2023-08-07T23:16:08.000Z",
            "fields": {
              "Description": "Auto Insurance",
              "Active": true,
              "Amount": -201.5,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-07-20",
              "Occurrence": "Bi-Yearly",
              "Yearly": -2418,
              "Weekly": -50.375
            }
          },
          {
            "id": "recMckqsCFOtHOGIo",
            "createdTime": "2024-08-26T01:11:02.000Z",
            "fields": {
              "Description": "Pets Insurance",
              "Active": true,
              "Amount": -26.47,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-06-26",
              "Occurrence": "Monthly",
              "Yearly": -317.64,
              "Weekly": -6.6175
            }
          },
          {
            "id": "recMlp7LQvVz3zHXq",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Video games",
              "Amount": -60,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recxRnEdT2q8Wd1YW"
              ],
              "Yearly": -720,
              "Weekly": -15
            }
          },
          {
            "id": "recNULy3cokKrg1kc",
            "createdTime": "2023-08-02T03:55:16.000Z",
            "fields": {
              "Description": "Medical Insurance",
              "Active": true,
              "Amount": -216,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": -2592,
              "Weekly": -54
            }
          },
          {
            "id": "recRpZwYaEjU6MXDt",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Phone (Sarah)",
              "Active": true,
              "Autopay?": true,
              "Amount": -47,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-30",
              "Occurrence": "Monthly",
              "Yearly": -564,
              "Weekly": -11.75
            }
          },
          {
            "id": "recSrDgCjhs9OTGRx",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Retirement",
              "Autopay?": true,
              "Amount": -550,
              "Priority": "Need",
              "Category": "Savings",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Yearly": -6600,
              "Weekly": -137.5
            }
          },
          {
            "id": "recT8c7npHnaewFkm",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Car Loan",
              "Active": true,
              "Autopay?": true,
              "Amount": -540,
              "Priority": "Need",
              "Category": "Loans",
              "Loans": [
                "rec8S9LkWA4oWL0j3"
              ],
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-07-29",
              "Occurrence": "Monthly",
              "Yearly": -6480,
              "Weekly": -135
            }
          },
          {
            "id": "recTwUVJco7C8rCEs",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Food",
              "Active": true,
              "Amount": -500,
              "Priority": "Want",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recxRnEdT2q8Wd1YW"
              ],
              "Date Of Transaction": "2024-08-28",
              "Occurrence": "Ad-Hoc",
              "Yearly": -6000,
              "Weekly": -125
            }
          },
          {
            "id": "recU4e1flhN2qqtGI",
            "createdTime": "2023-06-23T14:36:41.000Z",
            "fields": {
              "Description": "Student loans",
              "Active": true,
              "Amount": -250,
              "Priority": "Need",
              "Category": "Loans",
              "Loans": [
                "rec1eUmx0K8cnrfHv",
                "recJVn0eLMexNvOCn",
                "recnEjvfWTT5JIJkI",
                "recHpmdvxxxgWzbc6",
                "recUJeSw4rmiLoXWs",
                "recpdVm5MEon8Pcqg",
                "reczcT6S28SNY4cs8",
                "recfrPFaPWk48JNAq"
              ],
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-07-26",
              "Occurrence": "Monthly",
              "Yearly": -3000,
              "Weekly": -62.5
            }
          },
          {
            "id": "recVldDT865YCRCuE",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Checkings",
              "Active": true,
              "Autopay?": true,
              "Amount": 4633,
              "Priority": "Need",
              "Category": "Income",
              "Is Income": "Income",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Transactions": [
                "rec8qkVpNVZrzUibB",
                "recLr232t2ckOuxtp",
                "rec2u8gBGFkq9rxwr",
                "reccFGBAbEDAk4S3W",
                "reczam62TMfFciLeK",
                "recmq3HugqbzWExU1",
                "recoPyHcuNvADGfUc",
                "recYgrIGzhEmZlnfM",
                "recL7yj8dZcNnKs4V",
                "recBQcNkppWJusgrE",
                "recI7SdyopC3sZgfv",
                "recxFTqGIpFdPyJaH",
                "recu2kQFIXYeZVxnf",
                "recHY3KqWbFkPAIOt",
                "recTqz0ujfpO7HquR",
                "recnqDAGmxNmZqijV",
                "recmKaBNjLuLqH3Za",
                "recSmVui0VDvzIhLd",
                "rec1KEd7Ffq4Kr6QS",
                "recoSw2KNHkc4Jzbf",
                "rec0XofI0m7DMFQGK",
                "recEguhGSYRAeTlX2",
                "recQEovul5NIhbAzO",
                "recGinMy4qI8JaFiT",
                "reckRHUiOQ2DvaU2a",
                "recKMrMV5Ofv8IBYF"
              ],
              "Yearly": 55596,
              "Weekly": 1158.25
            }
          },
          {
            "id": "recW6BuPYTUpmTsqD",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Nintendo",
              "Autopay?": true,
              "Amount": -1.66,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Yearly": -19.919999999999998,
              "Weekly": -0.415
            }
          },
          {
            "id": "recWBZr1EIoAC304L",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "General Spending",
              "Active": true,
              "Amount": 500,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recxRnEdT2q8Wd1YW"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": 6000,
              "Weekly": 125
            }
          },
          {
            "id": "recXHPYEGNQYjwwY4",
            "createdTime": "2023-07-12T15:59:45.000Z",
            "fields": {
              "Description": "Electric",
              "Active": true,
              "Amount": -150,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Payments": [
                "recGfwt6omOYdBffu",
                "recSxtBDWcQuW67dw",
                "receCx48Paw4nC4eD",
                "reckdjfSKg5ZB0jjQ",
                "recNasAoWRxuvC93D",
                "rec8VPl4qPBXRTEoo"
              ],
              "Shared?": true,
              "Date Of Transaction": "2024-07-19",
              "Occurrence": "Monthly",
              "Yearly": -1800,
              "Weekly": -37.5
            }
          },
          {
            "id": "recYAI0LMbAZV2HpM",
            "createdTime": "2024-04-09T22:48:27.000Z",
            "fields": {
              "Description": "Internet",
              "Active": true,
              "Amount": 60,
              "Priority": "Need",
              "Category": "Living",
              "Account": [
                "rechscP2vLTD1lRBq"
              ],
              "Date Of Transaction": "2024-02-06",
              "Occurrence": "Monthly",
              "Yearly": 720,
              "Weekly": 15
            }
          },
          {
            "id": "recc2cYaRj9p4gsrO",
            "createdTime": "2023-07-12T15:59:52.000Z",
            "fields": {
              "Description": "Natural Gas",
              "Active": true,
              "Amount": -150,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Payments": [
                "recMBvyatCHMRzvfI",
                "recZHcoHNjkJcoPwV",
                "recbGOs6SGAD4tl9H",
                "recWpTgSk0nt7Xq8Y",
                "recIJqtVWQ8CDjCeG",
                "recqyqMj3IixSP70K"
              ],
              "Shared?": true,
              "Date Of Transaction": "2024-07-25",
              "Occurrence": "Monthly",
              "Yearly": -1800,
              "Weekly": -37.5
            }
          },
          {
            "id": "rece9FMRoepyGF2qj",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "VRV/Crunchyroll",
              "Active": true,
              "Autopay?": true,
              "Amount": -10.99,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-21",
              "Occurrence": "Monthly",
              "Yearly": -131.88,
              "Weekly": -2.7475
            }
          },
          {
            "id": "recfFWDcfboFHInlX",
            "createdTime": "2024-07-10T21:46:49.000Z",
            "fields": {
              "Description": "AAA Membership",
              "Active": true,
              "Amount": -5.25,
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Bi-Yearly",
              "Yearly": -63,
              "Weekly": -1.3125
            }
          },
          {
            "id": "recjQf5yPTXt2pMjN",
            "createdTime": "2024-01-04T16:11:18.000Z",
            "fields": {
              "Description": "Ring Protect",
              "Active": true,
              "Amount": -4,
              "Priority": "Want",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-02-20",
              "Occurrence": "Yearly",
              "Yearly": -48,
              "Weekly": -1
            }
          },
          {
            "id": "reclKYBhcUuG9rccL",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Gasoline",
              "Active": true,
              "Amount": -80,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recxRnEdT2q8Wd1YW"
              ],
              "Date Of Transaction": "2024-08-28",
              "Occurrence": "Ad-Hoc",
              "Yearly": -960,
              "Weekly": -20
            }
          },
          {
            "id": "recmnj4Jv8OkGIwma",
            "createdTime": "2024-02-11T17:05:23.000Z",
            "fields": {
              "Description": "Mortgage Insurance",
              "Active": true,
              "Amount": -31.38,
              "Priority": "Need",
              "Category": "Living",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Payments": [
                "recMVNxiYCPcyswOk",
                "reck5cCTqW4x0MFsa",
                "rec0cFOtilwsxjhSO",
                "recTm3FAFgevUwFxZ"
              ],
              "Shared?": true,
              "Date Of Transaction": "2024-08-05",
              "Occurrence": "Monthly",
              "Yearly": -376.56,
              "Weekly": -7.845
            }
          },
          {
            "id": "recoSjzkpOq9TwSlX",
            "createdTime": "2023-08-02T04:04:47.000Z",
            "fields": {
              "Description": "Permanent Life Insurance",
              "Active": true,
              "Amount": -75,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": -900,
              "Weekly": -18.75
            }
          },
          {
            "id": "recpRnphYtPmTLi71",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "House Savings",
              "Autopay?": true,
              "Amount": -500,
              "Priority": "Need",
              "Category": "Savings",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Yearly": -6000,
              "Weekly": -125
            }
          },
          {
            "id": "recpYxvaJqLGLo21M",
            "createdTime": "2023-08-02T04:06:26.000Z",
            "fields": {
              "Description": "Accident Insurance",
              "Active": true,
              "Amount": -9,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": -108,
              "Weekly": -2.25
            }
          },
          {
            "id": "recv4GqPeASPi7OKY",
            "createdTime": "2023-06-23T16:12:09.000Z",
            "fields": {
              "Description": "General Savings",
              "Active": true,
              "Amount": 500,
              "Priority": "Need",
              "Category": "Savings",
              "Is Income": "Income",
              "Account": [
                "recjFSzXrWqcjPCgC"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": 6000,
              "Weekly": 125
            }
          },
          {
            "id": "recwOUm8Imd8TIKnT",
            "createdTime": "2023-06-23T14:36:43.000Z",
            "fields": {
              "Description": "Discord Nitro",
              "Active": true,
              "Autopay?": true,
              "Amount": -9.99,
              "Priority": "Want",
              "Category": "Entertainment",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-12",
              "Occurrence": "Monthly",
              "Yearly": -119.88,
              "Weekly": -2.4975
            }
          },
          {
            "id": "recyQQjvuKsOSwyWZ",
            "createdTime": "2023-08-02T04:03:51.000Z",
            "fields": {
              "Description": "Dental Insurance",
              "Active": true,
              "Amount": -28,
              "Priority": "Need",
              "Category": "Insurance",
              "Is Income": "Expense",
              "Account": [
                "recnr51XelhfXiCWs"
              ],
              "Date Of Transaction": "2024-08-02",
              "Occurrence": "Weekly",
              "Yearly": -336,
              "Weekly": -7
            }
          }
        ]
      },
      "headers": {
        "content-length": "2949",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Planned%20Transactions",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "rec005nX05zw3EnbS",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-25",
              "Merchant Name": "AVANTI MARKETSon Jun 25, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec00bEkqSPjbfOUG",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "TIKTOK SHOPon Dec 19, 2023collapsed",
              "Amount": -25.43,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec00c3j9Js08ypc2",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on May 20, 2024collapsed",
              "Amount": -360,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec00d8XIfyWMTuja",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-16",
              "Merchant Name": "GITHUBon May 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec00u0CGGc8LHe10",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-01",
              "Merchant Name": "FI *RESTAURANTon Apr 01, 2024collapsed",
              "Amount": -13.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec05VdIU9Tg7huwQ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec05uBLCyeOAIjel",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 19, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec06k3MdvKcQkV8i",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 05, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec0A5x3I5Eafg1od",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec0AwgFN6YZkCLzV",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-13",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Dec 13, 2023collapsed",
              "Amount": -63.56,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec0E96cRE6IR0PB6",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 24, 2024collapsed",
              "Amount": -0.09,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0GDb2knNk1x30V",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "PIRATESHIP.COMon Sep 11, 2024collapsed",
              "Amount": -4.47,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0Hbmp3YHlu359u",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 08, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec0Iog5qFw4eXxYn",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "COMCASTon Dec 06, 2023collapsed",
              "Amount": -60,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0MhlxwcuCbLqFR",
            "createdTime": "2024-11-18T01:36:09.000Z",
            "fields": {
              "Date": "2024-06-29",
              "Merchant Name": "MEIJERon Jun 29, 2024collapsed",
              "Amount": -50.4,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec0OTKwV8NHrKnVq",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 15, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec0OfD8lPFRQ5foa",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 28, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec0QBWK095vEPoW6",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "UNIVERSALMGT0793on Apr 26, 2024collapsed",
              "Amount": 1367.29,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0SyegVdZM6nbDJ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 12, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0VzlfXvN4Mvbgs",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 01, 2024collapsed",
              "Amount": -3.14,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0W64Jp49leYa7t",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Feb 20, 2024collapsed",
              "Amount": -661.86,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec0ameMWdFwkHVpG",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "JETS PIZZAon Feb 12, 2024collapsed",
              "Amount": -31.73,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec0brqqas4UlLsof",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jul 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0gjgFpjIIX9PNw",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-06",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 06, 2024collapsed",
              "Amount": -0.79,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0k8g4qhORqULFQ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 03, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0kDw5xcE7a87O1",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0mzyFLxqmzWv17",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "COSTCOon May 20, 2024collapsed",
              "Amount": -128.85,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec0n63fI1eA9xNl9",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "PETS BEST INSURANCEon Jul 02, 2024collapsed",
              "Amount": -24.92,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0nlHaKhHNNYjDC",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "THE HOME DEPOTon Mar 18, 2024collapsed",
              "Amount": -62.88,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec0qJkufEX2VHvtP",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "AVANTI MARKETSon Mar 06, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec0uYZPFJwVEC96q",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "DTE ENERGYon May 20, 2024collapsed",
              "Amount": -55.84,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0vEnNs0VrJAoNI",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 18, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec0yGYcQRkuX0SXr",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 04, 2024collapsed",
              "Amount": 1.83,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec10i30FYyOT90Uk",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec11tGk5BOEnCi9o",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "MEIJERon Jan 18, 2024collapsed",
              "Amount": -20.82,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec16I8l7ZMErahN0",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "MULVEY GARDENS Con Jan 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec16mzIqlTCrC9Il",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Apr 09, 2024collapsed",
              "Amount": -1050,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec18CLZxu4jhByCV",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-15",
              "Merchant Name": "VENMOon Feb 15, 2024collapsed",
              "Amount": -27,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1AyreBppTY38YL",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 26, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1EC7RpxxrUltnj",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 05, 2024collapsed",
              "Amount": 1.4,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec1Ekbq4VIp97GfV",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 24, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1G04YaoauUuUwy",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-09",
              "Merchant Name": "BIGGBY COFFEEon Jan 09, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec1HBpxFERAPsjaS",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "PETS BEST INSURANCEon Aug 27, 2024collapsed",
              "Amount": -25.18,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1IWFBstNIsWL1a",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Apr 11, 2024collapsed",
              "Amount": -569.16,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1LamHyhEKpmkjN",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "AMAZON MARKETPLACEon May 28, 2024collapsed",
              "Amount": -16.95,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1MIcHFguXfVwCA",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 01, 2023collapsed",
              "Amount": -14.42,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1NgYN3vUXC1PVD",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 12, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1Ovbr0ZRCq8mPr",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "PETS BEST INSURANCEon Jul 29, 2024collapsed",
              "Amount": -25.18,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1PLQmihDS4xvak",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-11",
              "Merchant Name": "SQ *BEHAVIORAL MEDICAL CEon Nov 11, 2023collapsed",
              "Amount": -94.4,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec1UylduGxWI4tIl",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Mar 01, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1Z2XEssJ1BzaYr",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "ETERNAL GAMESon Jun 10, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1fGm7ZoXvR7vRj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "PIRATESHIP.COMon Jan 29, 2024collapsed",
              "Amount": -3.86,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1fPNxqzbWyc3w7",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 10, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1iIVM7IglFDBv3",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 19, 2024collapsed",
              "Amount": -0.95,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1iOK5FeP2xjH8T",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "ANTHONY CUETOon May 06, 2024collapsed",
              "Amount": -100,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1ilU1mtTpcbtOE",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "TIKTOK SHOPon May 28, 2024collapsed",
              "Amount": -38.37,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1k2HaHzZ2yFG8l",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Apr 09, 2024collapsed",
              "Amount": 3290,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1nGUkJLCEEpIuh",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 7344on Apr 09, 2024collapsed",
              "Amount": 1050,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec1rMXhLM0tWX0Ik",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-01",
              "Merchant Name": "ANIMAL EMERGENCY CENTER-Ron Jul 01, 2024collapsed",
              "Amount": -1700,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec1vLOUUMTv4ozA5",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-09",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 09, 2024collapsed",
              "Amount": 0.45,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec1vpIutWHhqRqLk",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 08, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec1zWdNjqcZezqEs",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "WELLCARE HEALTH PLANSon Oct 07, 2024collapsed",
              "Amount": -1.23,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec21LKaYyHDz8LA9",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 09, 2024collapsed",
              "Amount": -1.19,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec24RV5q7MyxAO4J",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-05",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 05, 2023collapsed",
              "Amount": -0.33,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec29d0xWWuwcXPIb",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "UNIVERSALMGT0793on May 10, 2024collapsed",
              "Amount": 1367.28,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2BvJr0LV3Cujpb",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "PEPSI-COLAon Oct 14, 2024collapsed",
              "Amount": -5.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec2Drw6u4gBONuFP",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "VENMOon Nov 27, 2023collapsed",
              "Amount": -115,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2EsnuPML0o8k3t",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "UNIVERSALMGT0793on Feb 02, 2024collapsed",
              "Amount": 1620.26,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2IoOQMUY1AZw9d",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Aug 30, 2024collapsed",
              "Amount": -43,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2IwBdWraHgl0sI",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-30",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 30, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec2J9abZDO7XOXH8",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "PETS BEST INSURANCEon Mar 27, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2JIDT3TteOnAjX",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 19, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2NMjnzEDcCLXon",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "MEIJERon Dec 18, 2023collapsed",
              "Amount": -70,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec2PIBU2gQvlTM7U",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 10, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2Ppt21K6DRl29A",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-19",
              "Merchant Name": "APPLE ITUNESon Mar 19, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2SAQ21fmsPd8fl",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Oct 25, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2XOG3JDeHedDjG",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-16",
              "Merchant Name": "JETS PIZZAon Jul 16, 2024collapsed",
              "Amount": -11.62,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec2XeWp6bTO9zpZD",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-05",
              "Merchant Name": "PP*FREE PLAY PINBon Nov 05, 2024collapsed",
              "Amount": -10,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2a4Y90u6L5Ou36",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "IDOA WASHINGTON PARKING-on May 06, 2024collapsed",
              "Amount": -35,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec2aqxBeUZ1TLf3a",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-04",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 04, 2024collapsed",
              "Amount": 2.94,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2bI61hgnoy1tzb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "AVANTI MARKETSon Aug 26, 2024collapsed",
              "Amount": -1.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2cm2xYa8Ga7smR",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Aug 01, 2024collapsed",
              "Amount": -40,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec2dWCyy8iNE6qdp",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 26, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2f66e1D7FKv7Mv",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Dec 22, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2lJoKPwHMCdHKR",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2lpT6rvGchOlQL",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 29, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2nZvwhpVL39Ndj",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *KAYFABE CARDSon Sep 14, 2024collapsed",
              "Amount": -53.61,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec2pQeh1HETX9hkt",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 17, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2q8h27DhQJtmGY",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "RESTAURANTon Sep 27, 2024collapsed",
              "Amount": -14.67,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec2vAmMHmaIM8BkD",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 19, 2024collapsed",
              "Amount": 0.81,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2vWBUCd6hZ0p3P",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 28, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2yW5nwcOeFtZxZ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 11, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec2yi44HXm1flZ8D",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "GITHUBon Sep 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec30o0qh8KQRSmJ3",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 13, 2024collapsed",
              "Amount": 0.98,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec31hXqpwZrd14h1",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-19",
              "Merchant Name": "GRAND TAVERNon Sep 19, 2024collapsed",
              "Amount": -26.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec31mCnFiInM4edH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-02",
              "Merchant Name": "MULVEY GARDENS Con Nov 02, 2023collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec34VJPv3y96lLWb",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Apr 26, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec35luTlmdc889FH",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 04, 2023collapsed",
              "Amount": 1.44,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec37I1vjgfLOY5Xe",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 06, 2024collapsed",
              "Amount": 0.85,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec3A0sQtt9OwO2wN",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-04",
              "Merchant Name": "SQ *GAMES4LIFEon Nov 04, 2023collapsed",
              "Amount": -10.6,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/rec3A0sQtt9OwO2wN"
      },
      "headers": {
        "content-length": "3906",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/rec3A0sQtt9OwO2wN",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/rec3A0sQtt9OwO2wN",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "rec3AKcDab51sIleo",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *GEEKY ENDEAVOon Jun 03, 2024collapsed",
              "Amount": -27.76,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3ATCfbvs4imGZZ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "MEIJER EXPRESS 14on Jun 14, 2024collapsed",
              "Amount": -1.05,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3Ay0f3Ie03NKqA",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 25, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3Fq6VFkbZfnKU5",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 20, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3HX8yslZFEwf7l",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "WL *STEAM PURCHASon Aug 05, 2024collapsed",
              "Amount": -3.23,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3IfygnJH1A0joi",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "ETERNAL GAMESon May 28, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3Lb6wN3JcLwwii",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "AVANTI MARKETSon Nov 01, 2023collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec3OK6TEhQ7h69ph",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-15",
              "Merchant Name": "COLD STONE CREAMERYon Aug 15, 2024collapsed",
              "Amount": -11.74,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec3Vg74nJ2E4b1Yl",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "AMAZON MARKETPLACEon Sep 11, 2024collapsed",
              "Amount": -8.05,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3YC1q1uxDdHikF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 25, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3b83Nvh6gNtoX5",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-12",
              "Merchant Name": "AVANTI MARKETSon Jun 12, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3bet6T2SLxVYkZ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 12, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec3boLLJk3ebBbLp",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "CULTS3D.COMon May 09, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3hsUzoPB969JzG",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 28, 2024collapsed",
              "Amount": -2.98,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3jxTCrQ1w5zzyU",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "PLAYSTATION NETWOon Sep 09, 2024collapsed",
              "Amount": -34.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3kaar9XOtoQcbY",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 21, 2024collapsed",
              "Amount": 0.26,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec3kqH0mE4laNqBv",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Aug 19, 2024collapsed",
              "Amount": 2870.1,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3lPRIooCjH2ZNc",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 23, 2024collapsed",
              "Amount": 0.1,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec3o2QL24SLiD43s",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Sep 27, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3oy2xQ9W1uvTDw",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "TOP CUT COMICS LPon Sep 14, 2024collapsed",
              "Amount": -10.6,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec3rrYMVT299QZrI",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3v72XvTcwVGeDF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 25, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec3x7qqbgaF3hvKW",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3x9fxP0K6Jzrj0",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 20, 2024collapsed",
              "Amount": -1.27,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec3zE9JX2UjoYtKt",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "AVANTI MARKETSon Jan 08, 2024collapsed",
              "Amount": -2.99,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec40BIicy1cYxQ0t",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-04",
              "Merchant Name": "MR COOPERon Nov 04, 2024collapsed",
              "Amount": -1965.7,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec437IuhjQuzuiaS",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "APPLEon Dec 18, 2023collapsed",
              "Amount": -0.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4569HBoTv1j8Uu",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 24, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec46SF9z5sDwC7Iu",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 24, 2024collapsed",
              "Amount": -0.16,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec46kKRNnzIiMsJg",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "TIKTOK SHOPon Nov 01, 2023collapsed",
              "Amount": -10.58,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec48pi2CxW6ECPA5",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "BIGGBY COFFEEon Oct 07, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4CjbD2gaIDtFAT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Dec 22, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4E8fqjXMO7p8jm",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 01, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec4GNQFKEAGuTw1f",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-04",
              "Merchant Name": "GRAND TAVERNon Jul 04, 2024collapsed",
              "Amount": -24.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec4KYgx8Sq7Ma8Xz",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Aug 22, 2024collapsed",
              "Amount": -1121.42,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4LcGVODNpBDugY",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Feb 02, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4Tr40mehDcx9Wq",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 27, 2024collapsed",
              "Amount": 0.65,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec4UJkhbhyYXEanF",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "BIGGBY COFFEEon Jun 28, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec4UgcgAw8y5loTc",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-16",
              "Merchant Name": "GITHUBon Jan 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4VHyypw2Dvonzb",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-24",
              "Merchant Name": "THE HOME DEPOTon Sep 24, 2024collapsed",
              "Amount": -314.28,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec4WeUEjumm3LvXv",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "STEAMGAMES.COM 42on Mar 13, 2024collapsed",
              "Amount": -2.31,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4WjLM1ehLVlGz7",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4XMrYfaRh8YKys",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-15",
              "Merchant Name": "Monthly Maintenance Feeon Aug 15, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec4Zmivbwqae1KxV",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "CONTINENTAL SERVICESon Nov 24, 2023collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec4aAl3dZxWrag7e",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Jun 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4awJyvbeYWinWz",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 06, 2024collapsed",
              "Amount": -27.55,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4eH4pZ2wKCRptV",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-16",
              "Merchant Name": "GITHUBon Apr 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4flkSC9ndXgNwz",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 29, 2024collapsed",
              "Amount": 2.98,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec4foCKVXM0GE2iH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 10, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec4gNmhLea2q6kI0",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "AVANTI MARKETSon Sep 25, 2024collapsed",
              "Amount": -1.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec4pUSSooFdJ2WKF",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 27, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4rEdufWBsJOhIc",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 06, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4teJ2NxfwhnwQU",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 02, 2024collapsed",
              "Amount": 0.78,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec4uYLBF9E4N2myU",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "PETS BEST INSURANCEon Aug 05, 2024collapsed",
              "Amount": -24.92,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec4wtlcwOvMOJSN3",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Aug 01, 2024collapsed",
              "Amount": 40,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec52BPD2O971Ud52",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "AMARIN THAI CUISINEon Jan 29, 2024collapsed",
              "Amount": -13.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec57Airh5j2XGYyw",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-26",
              "Merchant Name": "VENMOon Feb 26, 2024collapsed",
              "Amount": -45,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec598h5TYTodaFKs",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 23, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5Ao1PVQ5Gkmppg",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 28, 2023collapsed",
              "Amount": 0.74,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec5AqWWFN3td4t9Q",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "AMAZON MARKETPLACEon Sep 26, 2024collapsed",
              "Amount": -12.18,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5DjPfG4Ct5k06K",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 17, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5IqdiSdymC5Bf7",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-25",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 25, 2024collapsed",
              "Amount": -1.25,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5JnsDKSO5Iazl7",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Apr 09, 2024collapsed",
              "Amount": -3290,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec5Lz7Em6S6YVw1h",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-12",
              "Merchant Name": "BIGGBY COFFEEon Nov 12, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5MrhIulWegk3Vr",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "Checkon Nov 28, 2023collapsed",
              "Amount": -263.31,
              "Category": "Cash, Checks & Misc: Checks",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5S60wQ3JqUCVBR",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-14",
              "Merchant Name": "WL *STEAM PURCHASon Feb 14, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5SaGRWe6uG36GT",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 26, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec5Uqj2riVZUGPrP",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "CHIPOTLEon Mar 13, 2024collapsed",
              "Amount": -13.94,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5UrfYzJ3gVj9Rl",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 24, 2023collapsed",
              "Amount": -1.9,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5W8OA3lhQJD72h",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "SP RING USAon Feb 20, 2024collapsed",
              "Amount": -84.79,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5YMmkUnaG7spvM",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "VENMOon Feb 20, 2024collapsed",
              "Amount": -30,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5eO39B4NY0SkcH",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-20",
              "Merchant Name": "SPEEDWAYon Jan 20, 2024collapsed",
              "Amount": -39.77,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5evqA8VWZP5oit",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 12, 2024collapsed",
              "Amount": -0.46,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5fViM2BmiGk2Fh",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "MARATHONon Dec 06, 2023collapsed",
              "Amount": -39.58,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5grQH5OZpFV9tF",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-19",
              "Merchant Name": "BIGGBY COFFEEon Sep 19, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5mw1zCjbHGG4rZ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 27, 2023collapsed",
              "Amount": -35,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5oCnAyfg2hGrO7",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "BANK OF AMERICAon May 10, 2024collapsed",
              "Amount": -466.26,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec5qaviiY67jpDYy",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 24, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5sUbEfjKc5xjrj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "UNIVERSALMGT0793on Jan 26, 2024collapsed",
              "Amount": 1620.24,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec5suTqznlDZngry",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "CONTINENTAL SERVICESon Nov 21, 2023collapsed",
              "Amount": -2.4,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec5xu8wGGfRKAg4w",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 03, 2024collapsed",
              "Amount": 0.04,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec5yvmCA0Nz8lkzs",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "HIMEKISSon Jun 03, 2024collapsed",
              "Amount": -44.99,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec62PrMgC3UixGq8",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "TIKTOK SHOPon Dec 19, 2023collapsed",
              "Amount": -105.99,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec636jSXyJJJknV7",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER TO SAV 9875on Apr 09, 2024collapsed",
              "Amount": -300,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec64BsD70pz1UfSJ",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 01, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec6F3pdnPDgtYTut",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "MR COOPERon Oct 03, 2024collapsed",
              "Amount": -1965.7,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6GQCveWTrmD7KS",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "MEIJERon Feb 12, 2024collapsed",
              "Amount": -17.04,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec6GtMKzoUvAnaBw",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "UNIVERSALMGT0793on Jan 12, 2024collapsed",
              "Amount": 1621.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6I2XTo2C1uKWzI",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-15",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 15, 2024collapsed",
              "Amount": -0.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6I2pV6qyGbyo3d",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 19, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec6K4prGjbM7gjxI",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec6K5kyuUYyzzclp",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "ANTHONY CUETOon May 06, 2024collapsed",
              "Amount": -100,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec6M5ID24beVOisd",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "UNIVERSAL MANAGEon Aug 23, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6N0455B3TPDilI",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "UNIVERSAL MANAGEon Aug 16, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6RuADr1tGZA6jc",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "VENMOon Aug 16, 2024collapsed",
              "Amount": -706.5,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6TVvZNK93YXRBA",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 15, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6Upvh2TF4uMnmv",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Aug 09, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6WcayhlXVIW9AT",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-20",
              "Merchant Name": "BIGGBY COFFEEon Jan 20, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec6WgvSdZ94eTdmQ",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "SQ *NOBLE FISH SUon Sep 03, 2024collapsed",
              "Amount": -18.02,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6XvRPJl5C71Nzi",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "TACO BELLon Sep 09, 2024collapsed",
              "Amount": -10,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/rec6XvRPJl5C71Nzi"
      },
      "headers": {
        "content-length": "3854",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/rec3A0sQtt9OwO2wN",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/rec6XvRPJl5C71Nzi",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/rec6XvRPJl5C71Nzi",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "rec6dfssvgR3dLY5h",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-04",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 04, 2024collapsed",
              "Amount": -0.81,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6eSghYPzhA9FUe",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 28, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec6feiUa3TDYXPBY",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-25",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 25, 2024collapsed",
              "Amount": 0.16,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec6g6Lf4mAeeCfmv",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-12",
              "Merchant Name": "SP BAMBULAB.USon Jun 12, 2024collapsed",
              "Amount": -78.36,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6jN2Gg15xMxveJ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 21, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6k5qnlvkBDR1DA",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 21, 2023collapsed",
              "Amount": 0.79,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec6ndjKS0FUZCKeZ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 09, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec6nrTlOyp8gvAv2",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-06",
              "Merchant Name": "BIGGBY COFFEEon Jan 06, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec6nuW9r1XJPgIvc",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "SQ *NEMETH'S CONCon Sep 03, 2024collapsed",
              "Amount": -7,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6oAz0cuNql8izL",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Nov 01, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6rnHJpfkoz2cEF",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "UNIVERSALMGT0793on Mar 22, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6s71RvjwCMHb4w",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Aug 01, 2024collapsed",
              "Amount": -40,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec6u5FO8GYL9QYOE",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "MCDONALDSon Sep 25, 2024collapsed",
              "Amount": -13.07,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec6xrUzPuQnKpNcc",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 03, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec70D9xidW6RspPA",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 22, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec76YUuXTJlcxKwn",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on May 24, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7Bdb6KPva3HZMN",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "AMAZONon Dec 18, 2023collapsed",
              "Amount": -27.42,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7DTJyDN3PL82ex",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-30",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 30, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7EghjE2yI3KYIa",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 10, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7GeBf2PX20RurW",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on May 24, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7ILFpSmDccd1kk",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 22, 2024collapsed",
              "Amount": 1.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec7JEh5bDqdLDS4p",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "GM FINANCIALon Jul 29, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7JNWGC0oY58TGz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "UNIVERSALMGT0793on Jun 14, 2024collapsed",
              "Amount": 1367.28,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7KCX9ndlF9wuNV",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-06",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 06, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7KyTQHwedrCfri",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 11, 2024collapsed",
              "Amount": -0.52,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7MGeITJf6GsgwM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Mar 22, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7NXu4G1K8rJQUD",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-05",
              "Merchant Name": "BPon Feb 05, 2024collapsed",
              "Amount": -40.18,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7UAfrJchyfc5rS",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 17, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec7WWJt18nDcERTt",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 23, 2024collapsed",
              "Amount": 0.48,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec7ZVvS69zpSa3sr",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "KURA SUSHIon May 20, 2024collapsed",
              "Amount": -89.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7a24xxkI90CfQi",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Aug 19, 2024collapsed",
              "Amount": -2.01,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7aKWR5fa9N1pjE",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-17",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Sep 17, 2024collapsed",
              "Amount": -634.64,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec7at1NwcRTEfN5U",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "VENMOon Feb 21, 2024collapsed",
              "Amount": -130,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7cOyf9sQoZ1ixw",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "NNT BORDINE ROon May 20, 2024collapsed",
              "Amount": -101.7,
              "Category": "Home & Utilities: Home Improvement",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec7dsWubV0H3bhKu",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 03, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec7fEOp0nmIpwtYu",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "RINGon Jan 05, 2024collapsed",
              "Amount": -39.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7hb3ydCRW0LxD3",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Aug 05, 2024collapsed",
              "Amount": -25.12,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7iVD9Mwmn9KQss",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 15, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7k30uaWIbdLHWC",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "MARATHONon Nov 06, 2023collapsed",
              "Amount": -45.76,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7l2VDXWyXVe2Fm",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 10, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7mRBIsAGpPm1Eb",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "2BALTIMORE CONVENTIONon Sep 16, 2024collapsed",
              "Amount": -17.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7nyMrr3WpdHRMP",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 12, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec7oedIaJXqMSD0f",
            "createdTime": "2024-11-18T01:37:32.000Z",
            "fields": {
              "Date": "2024-01-31",
              "Merchant Name": "GRAND TAVERNon Jan 31, 2024collapsed",
              "Amount": -18.99,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec7pEBDmlMsF3avd",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 31, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7pHPVDeqwtdPIL",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "UNIVERSAL MANAGEon Jul 19, 2024collapsed",
              "Amount": 1362.55,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7qR0KKVUctPczS",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7tvfHPk76Ipn47",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec7vztdFi07VysMR",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "CRUNCHYROLLon Dec 22, 2023collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7yzhzKDiz4JHYF",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "PETS BEST INSURANCEon Nov 27, 2023collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec7zlHDv22EUeXoD",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "MICRO CENTERon Nov 27, 2023collapsed",
              "Amount": -1207.32,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec802lSfln8cwDkz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-11",
              "Merchant Name": "ETSYon Jun 11, 2024collapsed",
              "Amount": 8.19,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec81AFDSH1CXMa30",
            "createdTime": "2024-11-18T01:37:49.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "THE PET BEASTRO (WARREN)on Dec 29, 2023collapsed",
              "Amount": -16.21,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec81fP0QnYPwYADG",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "BIGGBY COFFEEon Jan 17, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec82q9VJi5JvZz9c",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 26, 2024collapsed",
              "Amount": -0.61,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec83wZxltqtmyLtB",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "SQ *TRUE KIMCHIon Sep 09, 2024collapsed",
              "Amount": -19.95,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec86x9DD5fxObrm3",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec87KAbEOWoDHfl7",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on May 20, 2024collapsed",
              "Amount": 360,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec87otlteUn2NWVS",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 02, 2024collapsed",
              "Amount": 0.5,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec88xXciXMzYulJv",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "BIGGBY COFFEEon Jun 10, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8985T4l7wEJNen",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8AaGIrTMHQXz4W",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "MULVEY GARDENS Con Feb 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8BrU9Gy5VRmYdI",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "VENMOon Jan 17, 2024collapsed",
              "Amount": -60,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8DiJCSpS6gazuH",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "THE PET BEASTRO (WARREN)on May 07, 2024collapsed",
              "Amount": -49.81,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8Ia9Jw6COcVybT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "CULTS3D.COMon Dec 11, 2023collapsed",
              "Amount": -2.07,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8IjAJNi46wFYom",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-17",
              "Merchant Name": "PAYMENT - THANK YOUon Feb 17, 2024collapsed",
              "Amount": 661.86,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8L6cnjACiJW0NB",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "TACO BELLon Jun 24, 2024collapsed",
              "Amount": -10.59,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8Lkr9YcslgiuLP",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-14",
              "Merchant Name": "MEIJERon Feb 14, 2024collapsed",
              "Amount": -5.84,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8OY65TURRqrjvq",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 13, 2023collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec8SfB3ruoEkRvTD",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "AVANTI MARKETSon Nov 20, 2023collapsed",
              "Amount": -2.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8XSYxFVL1JvcGV",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-12",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 12, 2024collapsed",
              "Amount": 1.48,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec8an6eW5kA6d1wV",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Dec 08, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8bdygXpjLRCkqS",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Oct 04, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8gZojygNpOzZnu",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-08",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Nov 08, 2023collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8iepAA3SfjLJIx",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "CONSUMERS ENERGYon Apr 26, 2024collapsed",
              "Amount": -75.68,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8im9g65apet4UO",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec8nahYfe7bAwNbY",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 24, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8oJuBcEFL47qwW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "THE PET BEASTRO (on Apr 17, 2024collapsed",
              "Amount": -49.81,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8orccGh7GM0y9b",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 16, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8qkKcYAF3H3DoD",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "AMC THEATRESon Aug 05, 2024collapsed",
              "Amount": -13.93,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8smCDd1Yt0oxsj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 05, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec8uPOkgl9ppgsw5",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-17",
              "Merchant Name": "GITHUBon Jun 17, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8w2DjVeZMrx7fe",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "BIGGBY COFFEEon Nov 15, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec8yPWUjNW7mx8t7",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 10, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec8ztjRhhPRjjraP",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 15, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec90oL9BqLblio3u",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 13, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec92yRno1Pp3Hkwq",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-02",
              "Merchant Name": "MULVEY GARDENS Con May 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec93GuqPWlVIHfmT",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-09",
              "Merchant Name": "TST*CRISPELLIS BAKERY Aon Nov 09, 2024collapsed",
              "Amount": -26.22,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec95UC3gvvpA5cty",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-08",
              "Merchant Name": "GRAND TAVERNon May 08, 2024collapsed",
              "Amount": -13.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec95jGWIDMu7xlcx",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 11, 2023collapsed",
              "Amount": 28.6,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec988jaDZj7Y34co",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-21",
              "Merchant Name": "YOUMACON.C* YOUMAon Dec 21, 2023collapsed",
              "Amount": 40,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9996eA2Hs15hXV",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-04",
              "Merchant Name": "MULVEY GARDENS Con Jun 04, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec99NWKfBT9xOLqL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 25, 2024collapsed",
              "Amount": -104.8,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec99tdgLoKlAZxsK",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 14, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9CDsQP7uapx7YI",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "SOHOon Apr 29, 2024collapsed",
              "Amount": -12.18,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9CVA4GHBr2mRCJ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-09",
              "Merchant Name": "AVANTI MARKETSon Nov 09, 2023collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9DDVWEdZGsWECu",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "THE HOME DEPOTon Jun 10, 2024collapsed",
              "Amount": -67.74,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9FnvaNXMXdLCps",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "S0008023 UNCLE EDS OIL SHon Dec 11, 2023collapsed",
              "Amount": -107.3,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9FpEZHLmkHD507",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "INDIANAPOLIS CONVENTIOon May 06, 2024collapsed",
              "Amount": -6.54,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9GNjltju9CiLvC",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "UPSon Nov 13, 2023collapsed",
              "Amount": -14.99,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9GzbPqjANk35Co",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 11, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/rec9GzbPqjANk35Co"
      },
      "headers": {
        "content-length": "3947",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/rec6XvRPJl5C71Nzi",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/rec9GzbPqjANk35Co",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/rec9GzbPqjANk35Co",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "rec9IFa7X9HISiItc",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 10, 2024collapsed",
              "Amount": -0.54,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9IXaTuiT5X35Y5",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *GOLD STAR ANIon Jun 03, 2024collapsed",
              "Amount": -13.06,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9JPxI40ssMCf5n",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-07",
              "Merchant Name": "LOUIES HAM & CORNED BEEFon Aug 07, 2024collapsed",
              "Amount": -19.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9OQxrMi4td1u8C",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 22, 2023collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9QnZ3KZYGpoIPg",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 29, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "rec9RNWSgQibhGXYz",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 03, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9RYPWBEjzoskNO",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 27, 2023collapsed",
              "Amount": -70.15,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9Smw3r55Akjf9u",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9U8ZcAaE70zcVa",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Mar 01, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9XIbT5nQrS7d0S",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "Interest Earnedon Oct 29, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rec9YA07uoYTLg9vQ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "WL *STEAM PURCHASon Apr 24, 2024collapsed",
              "Amount": -23.84,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9YFNnwtOhN9aLs",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "CRUNCHYROLLon Sep 23, 2024collapsed",
              "Amount": -11.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9aQIx7vESMXyaY",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 02, 2024collapsed",
              "Amount": -0.08,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9bLEVzga6drnfj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-08",
              "Merchant Name": "HOYOVERSEon Jul 08, 2024collapsed",
              "Amount": -4.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9cAERiz64QzzmB",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jul 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9ctwJwF80Tf1uq",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "ETERNAL GAMESon Mar 11, 2024collapsed",
              "Amount": -65.26,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9ePA2Pr7ss1biA",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "PP*DUSTINon Oct 12, 2024collapsed",
              "Amount": -7,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9ef3aqlgF40euq",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "ETSYon Oct 29, 2024collapsed",
              "Amount": 0.35,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9g4bjrAeRKRxS7",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9gCi0xrkTfNEoA",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-04",
              "Merchant Name": "SQ *COLOSSEUMon May 04, 2024collapsed",
              "Amount": -30,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9hxeGOHM6Vevk2",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 15, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9llRPalH0CTPXv",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-05",
              "Merchant Name": "AMAZONon Sep 05, 2024collapsed",
              "Amount": -33.88,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9mTW7ulHqKF8gj",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "BIGGBY COFFEEon Sep 10, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9moP48byyyUWGV",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 24, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9oKt419LbPJGJT",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 15, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9p7m5AfcZEOU4A",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "MICRO ELECTRONICSon Dec 11, 2023collapsed",
              "Amount": -19.07,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9pJrWedeKiztNs",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9pwLLl2mMXGxrn",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-20",
              "Merchant Name": "CULVERSon Aug 20, 2024collapsed",
              "Amount": -25.37,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9qNxc2tQaObH0G",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "CCBILL.COMon Mar 25, 2024collapsed",
              "Amount": -4,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9rdIwTyDkSCVE0",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 27, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9uq4mZMRvmKOF1",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "TST* DRAGONMEAD Bon Nov 24, 2023collapsed",
              "Amount": -24,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9vur38WNRPz71X",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 14, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9wAKq0qpH2r8Ap",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jan 19, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rec9wODDcO76MaZ24",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-04",
              "Merchant Name": "GRAND TAVERNon Sep 04, 2024collapsed",
              "Amount": -19.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rec9ygk6XNDJEUb8v",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "CHIPOTLEon Jun 07, 2024collapsed",
              "Amount": -11.98,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rec9zw3svjMG1SLu2",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 04, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recA0S8g4rSNEGjOQ",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 05, 2024collapsed",
              "Amount": 0.05,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recA1m4OIHiikb8ON",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 12, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recA2lSroFpPWhBFd",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "ETSYon Jan 17, 2024collapsed",
              "Amount": 12.73,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA3eUaN7PELHdYD",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "TIKTOK SHOPon Oct 24, 2024collapsed",
              "Amount": -10.66,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA3oFdSavpaoO6D",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 19, 2024collapsed",
              "Amount": -0.4,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA3yVE0VP1S5UOp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "CONTINENTAL SERVICESon Dec 20, 2023collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recA5XikyFu4mDLYJ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 25, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA5riYGCenhAlz9",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "FI *RESTAURANTon May 10, 2024collapsed",
              "Amount": -14.45,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recA6XzrARivWxviS",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "UNIVERSALMGT0793on Dec 15, 2023collapsed",
              "Amount": 1621.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA6o7dhcGCatxtQ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recA85LM5iKX8IiGt",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "UNIVERSAL MANAGEon Jul 12, 2024collapsed",
              "Amount": 1367.3,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recA9U6zC4zGmDozM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-07",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 07, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAAFv4BymprXdPM",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "1ST BEST THAIon Sep 30, 2024collapsed",
              "Amount": -29.68,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAG54V70VFoBkyh",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-25",
              "Merchant Name": "GRAND TAVERNon Jul 25, 2024collapsed",
              "Amount": -17.37,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAGTe9D5lddTiiS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "MR CS CAR WASH NUon May 28, 2024collapsed",
              "Amount": -9,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAHLt0ov5QrMTam",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-14",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 14, 2023collapsed",
              "Amount": 0.83,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recAHgB58q3TFIhiV",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "MEIJERon Aug 02, 2024collapsed",
              "Amount": -48.35,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAJV8z0KjAkZpKX",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 29, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAKTMeevwM2TJQV",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "CONTINENTAL SERVICESon May 07, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAKf9oRRujsVyJ9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-30",
              "Merchant Name": "GRAND TAVERNon Oct 30, 2024collapsed",
              "Amount": -37.33,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recALMHmR9ebYBk7M",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recALprq0gLhh3Vuq",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 09, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recANLLu1vUhsozct",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "HARU FRESH JUIon Jul 29, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAWQOdYbh77wPnx",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 28, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAXMZPW3Aec3ee3",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "HIBACHI BUFFET STERLING Hon Nov 10, 2023collapsed",
              "Amount": -20.03,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAXboHcbqgzVZR8",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 12, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAY2t4dbcAplLlC",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-16",
              "Merchant Name": "ETSYon Apr 16, 2024collapsed",
              "Amount": 21.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAdrIUTN2iEGZN2",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "THE HOME DEPOTon Nov 27, 2023collapsed",
              "Amount": -12.16,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAfqZCOcudmyiYi",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "AMAZON MARKETPLACEon Oct 18, 2024collapsed",
              "Amount": -16.5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAiFAfQok7YXDyI",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-13",
              "Merchant Name": "AVANTI MARKETSon Jun 13, 2024collapsed",
              "Amount": -3.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAjfIDRCtwIZxcH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 01, 2023collapsed",
              "Amount": -18.01,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAlFTyXKRB3bTry",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-15",
              "Merchant Name": "IKEAon Jun 15, 2024collapsed",
              "Amount": -428.93,
              "Category": "Home & Utilities: Home Improvement",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAlJKzRLFPJxcjU",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "CULVERSon Oct 17, 2024collapsed",
              "Amount": -25.63,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAlqKxg2Dii20mN",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAmECNeItjIXx8E",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "AMAZONon Jun 27, 2024collapsed",
              "Amount": -52.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAoT4VXRy4KxNT2",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "00000000023595 09/01 #000449862 WITHDRWL MI Ren Fes Front Holly MI FEEon Sep 03, 2024collapsed",
              "Amount": -2.5,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAqdFFOijjWlujk",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "JUAN BLANCOS - EASTon Jan 22, 2024collapsed",
              "Amount": -65.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recAs3eqUP6vlQG2Q",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "KIT CHEN THAI BYon Apr 24, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAthpdde8sfkVdz",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-04",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 04, 2024collapsed",
              "Amount": -0.43,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recAtj674Fyu6YoGk",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 15, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAuLy3MNfD8kUj9",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAvBOb46MxyJOba",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 22, 2023collapsed",
              "Amount": 0.18,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recAvMmW2qh0VidDz",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 13, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recAwkCdFr2z0HteC",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 29, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAxLlMpMeAkv88S",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-01",
              "Merchant Name": "ETERNAL GAMESon Jul 01, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recAymBgOt9eGQTXh",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Apr 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recB0NL9HxJbXGdCv",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-02",
              "Merchant Name": "BIGGBY COFFEEon May 02, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recB1rLG6Rnk9yc7Z",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 21, 2023collapsed",
              "Amount": -53.82,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recB5RdgnLExSxBfG",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Jul 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recB6Me8jxfC0hgLC",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 19, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recB75JRWHnoiwcsZ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-20",
              "Merchant Name": "DTE ENERGYon Jun 20, 2024collapsed",
              "Amount": -80.65,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recB9nYPl0fdJn2Si",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-04",
              "Merchant Name": "SQ *DAY 2 EVENTSon May 04, 2024collapsed",
              "Amount": -30,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBAT5dYy8bqDdKG",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-22",
              "Merchant Name": "CRUNCHYROLLon Oct 22, 2024collapsed",
              "Amount": -11.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBEVbGpOnhB33Uh",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "CONTINENTAL SERVICESon Apr 29, 2024collapsed",
              "Amount": -2.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBFkQD5JNDVvlaY",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "PETS BEST INSURANCEon Feb 27, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBJBIg2fkw0qFkv",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-08",
              "Merchant Name": "JETS PIZZAon Jul 08, 2024collapsed",
              "Amount": -23.27,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBJOX8VggthwILX",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-14",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Nov 14, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBJlRJSRJIL6Se9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-15",
              "Merchant Name": "BIGGBY COFFEEon Oct 15, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBK7ETwrIPa2Cut",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "AVANTI MARKETSon Sep 27, 2024collapsed",
              "Amount": -2.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBLj71rXopYGlwW",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "HARU FRESH JUIon May 13, 2024collapsed",
              "Amount": -22.31,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBLoarj8QjW19jg",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "NNT HARU FRESHon Oct 07, 2024collapsed",
              "Amount": -8.37,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBLs8upYV7vHCgT",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "AMAZONon Aug 01, 2024collapsed",
              "Amount": -31.5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBMMUx6lc6Xrvrg",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 16, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recBNNwF74LR9yRfz",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "THE PANTRYon Dec 18, 2023collapsed",
              "Amount": -34.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recBNNwF74LR9yRfz"
      },
      "headers": {
        "content-length": "3953",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/rec9GzbPqjANk35Co",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recBNNwF74LR9yRfz",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recBNNwF74LR9yRfz",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recBNWKPakV7sQVv6",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 08, 2024collapsed",
              "Amount": 0.45,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recBO4GcUJAR6u6cT",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-05",
              "Merchant Name": "PP*FREE PLAY PINBon Nov 05, 2024collapsed",
              "Amount": -20,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBPBY8WGzgF2RG2",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "ETSYon Aug 06, 2024collapsed",
              "Amount": 8.19,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBPhz1oxze1qiUh",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Oct 18, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBQuhzHALC3w26p",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-01",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Apr 01, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBR3OpAB2X6OfYA",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 26, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBRLBAsP8dxrgVR",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "CRUNCHYROLLon Nov 22, 2023collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBS49DwTF1wPOMc",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 03, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBUn3fQAdOvbgT4",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "APPLEon Feb 02, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBVi7ysV9QVPEVj",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-14",
              "Merchant Name": "TACO BELLon Feb 14, 2024collapsed",
              "Amount": -14.12,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBaI9Nd4VJhZ7YA",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "VENMOon Jul 05, 2024collapsed",
              "Amount": 337.45,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBeJGPJXAw5QsFB",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "BANK OF AMERICAon May 21, 2024collapsed",
              "Amount": 119.44,
              "Category": "Income: Deposits",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recBeehgbhzuL5x6s",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 24, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recBgAATQ3AniRTW5",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 13, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBhPgE9Ww4vDuVj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jul 19, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBikTZJI9PKd0gj",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-07",
              "Merchant Name": "BIGGBY COFFEEon Mar 07, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBju81LrnO6L2Bn",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 7139on Jun 24, 2024collapsed",
              "Amount": -300,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recBlQg75DBFBSNV9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "NINJA OF JAPANon Oct 14, 2024collapsed",
              "Amount": -11.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recBlR95AX1chq24y",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-10",
              "Merchant Name": "VENMOon Jul 10, 2024collapsed",
              "Amount": -45,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBnUB4UurnDzWBM",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jul 12, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBofa8Hxqxpkga6",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 03, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBpu2Hv6Xzvxfsb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 30, 2024collapsed",
              "Amount": -2.61,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBrSuC0s0AAfOth",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 17, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recBrZHtPtnkD38Wb",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Sep 20, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBswt2jj42RABhE",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Oct 25, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recBuTS66ypwtVOzm",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jun 14, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recC1cKqVSKUyCScA",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "BIGGBY COFFEEon Jul 02, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recC2R5g5L6OgNa86",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recC4kngZdYaZFowY",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Sep 27, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recC5Ez8ZniVzljh7",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "GRAND TAVERNon Sep 11, 2024collapsed",
              "Amount": -18.54,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recC5qKEllKZZ8cAr",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "AMAZON MARKETPLACEon Jul 03, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recC6zp5C2fF7yPV2",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-24",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 24, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recC8JmxMt7LBNquI",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "GRAND TAVERNon Sep 25, 2024collapsed",
              "Amount": -34.62,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCA5JFBgZ5BSI8s",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 06, 2024collapsed",
              "Amount": -0.85,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCB4DKhQlII9cQM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recCC6RSYVd94Tk9G",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "DTE ENERGYon Nov 17, 2023collapsed",
              "Amount": -57.96,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCE45H2QZLOm8eW",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-24",
              "Merchant Name": "BIGGBY COFFEEon Feb 24, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recCFOpxsPvfItIQz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "DISCORDon Jun 10, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCGBRHfNdIoHgaj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Jan 10, 2024collapsed",
              "Amount": -20.83,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recCJh7KbzIdIuhhI",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 06, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recCKNnKiQeyrbKyP",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 27, 2024collapsed",
              "Amount": 3.34,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recCSrawAWEjDFvr1",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-12",
              "Merchant Name": "VENMOon Aug 12, 2024collapsed",
              "Amount": -20,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCTIFI9RTjrsN6Z",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Apr 22, 2024collapsed",
              "Amount": 242.5,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCTY0d04neCDcEX",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Dec 29, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCWIGzlr08VWnL0",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "TIKTOK SHOPon Oct 18, 2024collapsed",
              "Amount": -41.87,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCWJSl9GxoKptUM",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "CHICK-FIL-Aon Apr 29, 2024collapsed",
              "Amount": -29.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recCXhCYqWob6uhnJ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 08, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recCZ4Wl8IQrM4V6w",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "Subway 52751on Nov 21, 2023collapsed",
              "Amount": -7.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recCZQCt6xJeO6DP2",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "CCBILL.COMon Dec 20, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCd3IHUEsqLMKAw",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Mar 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCgW1Qx5lc03FEw",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "SP BAMBULAB.USon Oct 17, 2024collapsed",
              "Amount": -109.13,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCmm6lfHJ8F2Pi0",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-12",
              "Merchant Name": "DISCORDon Aug 12, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCmyiEm951IR4iH",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "NNT HARU FRESHon Oct 21, 2024collapsed",
              "Amount": -28.52,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCpXWSzsP7PiH2Q",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-29",
              "Merchant Name": "VENTIMIGLIA ITALIon Aug 29, 2024collapsed",
              "Amount": -25.5,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCqHknvWsRkgnwX",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "APPLEon Nov 20, 2023collapsed",
              "Amount": -0.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCrox7RSkcNhHoJ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 16, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recCtiFuXKbX0aiT3",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-22",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 22, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recCtvDemByc37RkE",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ETERNAL GAMESon May 20, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recCvKwJv6NXhPZ9w",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "SPEEDWAYon Nov 13, 2023collapsed",
              "Amount": -46.3,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recCvOnyrp81Q4Fle",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "GRAND TAVERNon Jun 27, 2024collapsed",
              "Amount": -26.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recCy1AvEz8eet5Wc",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 22, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recD0EcNephwNpz5M",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 27, 2024collapsed",
              "Amount": 0.61,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recD13PN0HItmckVM",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-19",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Sep 19, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recD1MbjWk1gG921U",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "INTERNAL REVENUE SERVICEon Apr 11, 2024collapsed",
              "Amount": -5627,
              "Category": "Finance: Taxes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recD4tXMDVQw9TNxe",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "04412 THE EDGE FIon Oct 16, 2024collapsed",
              "Amount": -29.99,
              "Category": "Health: Fitness or Health club membership",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recD54Yb5uPos3wGd",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-20",
              "Merchant Name": "SOHOon Jan 20, 2024collapsed",
              "Amount": -44.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recD684OA564Z835l",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "LITTLE JOE'S CONEon Nov 22, 2023collapsed",
              "Amount": -13.7,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recD79iuPZYBbQE8e",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Jun 24, 2024collapsed",
              "Amount": 300,
              "Category": "Savings & Transfers: Savings",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recDBOarzDFTRdSZe",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "THE HOME DEPOTon May 10, 2024collapsed",
              "Amount": -81.49,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDCYQBTTkbEdDzJ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-11",
              "Merchant Name": "AAA AUTO CLUBon Jul 11, 2024collapsed",
              "Amount": -63,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDCmDuFG2ckMDnI",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "FI *RESTAURANTon May 14, 2024collapsed",
              "Amount": -13.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recDDbpCuzmkG7CcC",
            "createdTime": "2024-11-18T01:36:37.000Z",
            "fields": {
              "Date": "2024-04-30",
              "Merchant Name": "SQUARESPACEon Apr 30, 2024collapsed",
              "Amount": -70,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDEEnYZ3hwPSwBR",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "TACO BELLon Jan 22, 2024collapsed",
              "Amount": -14.12,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDEZeCV9mgQPdHA",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 22, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDEuy8l8f9EIGcw",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "ETSYon Jul 02, 2024collapsed",
              "Amount": 11.23,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDFFCSESWxUVgaB",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-26",
              "Merchant Name": "KELLY CAR WASHon Feb 26, 2024collapsed",
              "Amount": -9.54,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDFZQstrxco6Ijo",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "UNIVERSAL MANAGEon Oct 25, 2024collapsed",
              "Amount": 1408.88,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDHPHMGufgDDaHO",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-15",
              "Merchant Name": "FI *RESTAURANTon Apr 15, 2024collapsed",
              "Amount": -12.46,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDIiwlEFGLX2F1b",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-14",
              "Merchant Name": "MEIJERon Mar 14, 2024collapsed",
              "Amount": -50.39,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDJUvkrkQxQHzpx",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "BIGGBY COFFEEon Apr 02, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDK0FoHTKiKkmsL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 22, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recDMXF93q0zxYosr",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 26, 2024collapsed",
              "Amount": -1.54,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDOiSXb7GBvcsvV",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 23, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDSvkjIt9qLuE4Z",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 17, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDTAEu5VRV6QHL4",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "PETS BEST INSURANCEon Nov 03, 2023collapsed",
              "Amount": -25.18,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDTmgN11ljVu5fJ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-24",
              "Merchant Name": "WL *STEAM PURCHASon Jul 24, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDV36U878Yegms4",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "AMAZONon May 28, 2024collapsed",
              "Amount": -10.15,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDVX8hpinko7zct",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Oct 28, 2024collapsed",
              "Amount": 800,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDWYjGoGL4N0tAo",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Feb 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDZcyPP1YEy2h0W",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 10, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDdQAsZbWSEAynx",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 26, 2023collapsed",
              "Amount": -1.05,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDmazS5a8TE3w03",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Nov 01, 2023collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDry6jLbV91SmcP",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-28",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 28, 2024collapsed",
              "Amount": -1.17,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDsNn8aD8grNFR3",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-17",
              "Merchant Name": "Online payment from CHK 7on Sep 17, 2024collapsed",
              "Amount": 634.64,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recDvCqbKVJQL64D1",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Jul 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recDyRBTJ2IfyYtpO",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "GDP*AMY KOWALSKIon Jun 14, 2024collapsed",
              "Amount": -29.68,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recE1S7PPa1424C2M",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "FATHER & SON PIZZERIAon May 10, 2024collapsed",
              "Amount": -7.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recE1hctrWbhe9pN5",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "COSTCOon Mar 04, 2024collapsed",
              "Amount": -245.9,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recE3b8MkW7rMqP4j",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recE4FuV2YaVnjIrv",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-20",
              "Merchant Name": "PROGRESSIVE INSURANCEon Aug 20, 2024collapsed",
              "Amount": -1370,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recE4FuV2YaVnjIrv"
      },
      "headers": {
        "content-length": "4012",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recBNNwF74LR9yRfz",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recE4FuV2YaVnjIrv",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recE4FuV2YaVnjIrv",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recE5fcFKscDhgHjt",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "LITTLE JOE'S CONEY ISLon Nov 17, 2023collapsed",
              "Amount": -24.43,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recE63mSDdqOYxabT",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "MULVEY GARDENS Con Apr 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recE7UlXCw3mFajAn",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recE7aPIpoECAydIh",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *DARK MOON CARon Jun 03, 2024collapsed",
              "Amount": -17.05,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recEA5ouzxUOHXlJr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "AMAZON MARKETPLACEon Sep 26, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEACjOpSHItCFEa",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "HAMLIN PUB TIENKEon Apr 22, 2024collapsed",
              "Amount": -24.62,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recEBGzsYWxPNvsFj",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "Restauranton Sep 11, 2024collapsed",
              "Amount": -13.55,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEBRVYdYp533rAq",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 24, 2024collapsed",
              "Amount": -1.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEBTRX5J0kKYKcL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Mar 11, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEDnZQ7TXVNv4fv",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "BIGGBY COFFEEon Feb 27, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEIwA13CfQt0Q7R",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-08",
              "Merchant Name": "MICRO CENTERon Apr 08, 2024collapsed",
              "Amount": -47.55,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEJFzFRaSqQHi3v",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 26, 2023collapsed",
              "Amount": -24.36,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEJtj6cMTXRLEww",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Dec 01, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recELpfyNCEsTJAHj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 19, 2024collapsed",
              "Amount": 0.62,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recEMFQGeyIBzo8De",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 05, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recENxqgaoWaX5xpr",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recEOFaHvWuwpVzzQ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "Monthly Maintenance Feeon Oct 11, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recEOGz2pUoRiwNav",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-25",
              "Merchant Name": "Online payment from CHK 3on Nov 25, 2023collapsed",
              "Amount": 137.67,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEPECpcdWfin4Db",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-04",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Jan 04, 2024collapsed",
              "Amount": -29.35,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEThAjTMHNP5xpY",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "BIGGBY COFFEEon Jan 10, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEV95GBUOYYkVJE",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "AVANTI MARKETSon Sep 20, 2024collapsed",
              "Amount": -4.78,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEWgaSbLe0Po8rE",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-30",
              "Merchant Name": "WL *STEAM PURCHASon Oct 30, 2024collapsed",
              "Amount": -1.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEX3U8L2nSQo2WU",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "BIGGBY COFFEEon Jul 19, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEYQffoNtYLYT8x",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 06, 2024collapsed",
              "Amount": -0.45,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEZ4GafARWqQO6P",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-08",
              "Merchant Name": "TST*THE MASONIC TEMPLE Don Aug 08, 2024collapsed",
              "Amount": -15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEaIl2RCryq3HNR",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEbXbmnguJ4547O",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "SQ *PRODIGY GAMESon May 06, 2024collapsed",
              "Amount": -50.29,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recEfH6vwabmiblaL",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "MARATHONon Apr 12, 2024collapsed",
              "Amount": -54.34,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEfP9HbOXCCwOdp",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "TST* KYOTO JAPANESE STEAKon Jan 08, 2024collapsed",
              "Amount": -47.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEfVy0yNE400MTt",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 29, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEi7xrFVRRqTWu5",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "FREETAXUSAon Apr 11, 2024collapsed",
              "Amount": -14.99,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEiT88weeAIX908",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "MICROSOFTon Aug 27, 2024collapsed",
              "Amount": -210.94,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEj6yGdtWpDkPLk",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 01, 2024collapsed",
              "Amount": 2.32,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recEojp3hQF3QY6Ky",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 23, 2024collapsed",
              "Amount": 0.86,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recEouF1ZQDT1sQQI",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "UNIVERSALMGT0793on Dec 01, 2023collapsed",
              "Amount": 1621.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEsILeZ8S8NPPAo",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "CONSUMERS ENERGYon Dec 27, 2023collapsed",
              "Amount": -71.09,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recEufYGZPKg7TwBJ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-19",
              "Merchant Name": "AVANTI MARKETSon Jun 19, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recEyFMojBDwH6BrB",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "TACO BELLon May 20, 2024collapsed",
              "Amount": -4.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recF4HAkMrms5ToCB",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "AMAZON MARKETPLACEon Oct 03, 2024collapsed",
              "Amount": -27.08,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recF7lvZY7dvzZLJE",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "ETSYon Aug 27, 2024collapsed",
              "Amount": 19.68,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recF8fs8FDsCsg0FH",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 29, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recF9hwPvXQcNzQbM",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "TIKTOK SHOPon Nov 01, 2023collapsed",
              "Amount": -58.29,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFAcJljiV3CHMTx",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "SPEEDWAYon Nov 24, 2023collapsed",
              "Amount": -36.91,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recFBIill4bHwR0Ps",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 07, 2024collapsed",
              "Amount": 0.85,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recFEJeAQswQ9Cpem",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "GITHUBon Oct 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFFqX7H7GeF29L4",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "LG&E GARAGE 21on Oct 14, 2024collapsed",
              "Amount": -13,
              "Category": "Transportation: Public Transportation",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFGalVQU5A6HlYe",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 31, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recFJaLNkjtOJQzUG",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-07",
              "Merchant Name": "WWW.DAY2EVENTS.COon Mar 07, 2024collapsed",
              "Amount": -69.55,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFMQchS9FAKFjou",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 18, 2023collapsed",
              "Amount": -0.75,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFMhPBRogfBMLmX",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-29",
              "Merchant Name": "THE HOME DEPOTon Feb 29, 2024collapsed",
              "Amount": -113.8,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFUKIBZq0ZBD3yH",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "UNIVERSALMGT0793on Mar 01, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFV0DDENmq1EtJM",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "UNIVERSALMGT0793on Feb 16, 2024collapsed",
              "Amount": 1620.24,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFWDvZjQsI4GrEm",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 05, 2024collapsed",
              "Amount": -500,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recFXCZnnQtqZb2Kf",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Dec 08, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFZ2B9TEp3mAeQx",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 11, 2023collapsed",
              "Amount": -2.78,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFZ5QLK3rugCHg6",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFaAluyns6U2gPT",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "HUNTINGTON PLACE CONCon Nov 06, 2023collapsed",
              "Amount": -18,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFd6Pum4c8gNkAl",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI RESORTSon Jun 03, 2024collapsed",
              "Amount": -20,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recFgP1fZSZkf91Eu",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "PETS BEST INSURANCEon Jan 29, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFjgSSIvzUZ5g5h",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "AVANTI MARKETSon Jun 10, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recFkXW1C5lz15J5y",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-16",
              "Merchant Name": "GITHUBon Nov 16, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFkkAN61SHsaoAz",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "CCBILL.COMon Apr 22, 2024collapsed",
              "Amount": -20,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFnnUbJhR3JTwej",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-20",
              "Merchant Name": "CONTINENTAL SERVICESon Jul 20, 2024collapsed",
              "Amount": -2.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFnoqj0rhe251jI",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "FATHER & SON PIZZERIAon Mar 11, 2024collapsed",
              "Amount": -2.5,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFuq4WaHDsFfvqB",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Mar 15, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFv83ed71tIt6XS",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recFyst2gDtUuXgJz",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "COSTCOon Mar 25, 2024collapsed",
              "Amount": -292.43,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recFzdXpxn7pIAGog",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "WL *STEAM PURCHASon Dec 18, 2023collapsed",
              "Amount": -23.84,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recG0K3TB8faZQxDD",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "TIKTOK SHOPon Oct 17, 2024collapsed",
              "Amount": -10.01,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recG4CQwIIj7ZE8Nr",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-29",
              "Merchant Name": "AVANTI MARKETSon Aug 29, 2024collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recG4QQtg7RipUBCs",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recG5O6lI6hQjNPEj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "AMAZON MARKETPLACEon Jul 29, 2024collapsed",
              "Amount": -14.83,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recG77Y3BxNk1CqlL",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 01, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recGA8koSoLRTRVo0",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-24",
              "Merchant Name": "Online payment from CHK 3on Jul 24, 2024collapsed",
              "Amount": 4704.08,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGFnbFgVuzMOe8G",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGHj7BTj55YH7dT",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "Monthly Maintenance Feeon Apr 11, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recGIsDNJXiVDTR18",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 01, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recGJADYSHXGslVbA",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "WOODCRAFT SUPPLYon Jul 02, 2024collapsed",
              "Amount": -52.99,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGKE8g1bcLFdbXM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-07",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 07, 2024collapsed",
              "Amount": -0.45,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGLoi8OC5NxRHLy",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "PP*FREE PLAY PINBon Oct 01, 2024collapsed",
              "Amount": -10,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGOTfoglTYiRTVY",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 15, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGQSWNEx09Kgy22",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "FOURTH-GUYS SMOKEHOUSEon Oct 14, 2024collapsed",
              "Amount": -36.56,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGQXPjYz9ac2RUN",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "GRAND TAVERNon Nov 29, 2023collapsed",
              "Amount": -21.02,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGR8bHEksH4xZl3",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-02",
              "Merchant Name": "ETERNAL GAMESon Dec 02, 2023collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGVxJ8p108toCuv",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "Online payment from CHK 3on Nov 20, 2023collapsed",
              "Amount": 1017.96,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGWT8oZ56Fj433T",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 27, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGXf1chSsZYyciu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "WL *STEAM PURCHASon Sep 03, 2024collapsed",
              "Amount": -15.89,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGYBJvTd6pdrjQS",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "Debrand Fine Chocolateson Jan 02, 2024collapsed",
              "Amount": -71.8,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGYg3hSie4rXtdS",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGcrlcOT4xBz3K9",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 30, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGdf4v30Kdhw0eT",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "Monthly Maintenance Feeon Jun 10, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recGexmfnw7SPDqvH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 24, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGfoe9ods1PUK8v",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "OFFICE DEPOTon Nov 13, 2023collapsed",
              "Amount": -17.96,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGioA7wvlALSoHu",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "THE GREEN LIGHT Von Jul 26, 2024collapsed",
              "Amount": -14.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGkE7QgKmu4U13l",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "UEP*ICHIDDO RAMENon Sep 09, 2024collapsed",
              "Amount": -62.47,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGn4zhIfGGjBoUN",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "Online payment from CHK 7on Nov 21, 2023collapsed",
              "Amount": 46.82,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGo3AU0GzqL5OUZ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 19, 2023collapsed",
              "Amount": -2.35,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recGq0Z2aDuJXLGyP",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recGr9p0P1qxFFClY",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-09",
              "Merchant Name": "AVANTI MARKETSon Aug 09, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recGuCH9VP3mP92qa",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 15, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recGuCH9VP3mP92qa"
      },
      "headers": {
        "content-length": "3980",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recE4FuV2YaVnjIrv",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recGuCH9VP3mP92qa",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recGuCH9VP3mP92qa",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recGyzVtK3DCur66c",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 18, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recH55XDX1wFerzz4",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "GM FINANCIALon Sep 27, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recH8Vu3ei9giXuZ0",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-20",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 20, 2024collapsed",
              "Amount": 0.95,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recH9aZmmJGLMFWS2",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 06, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHCL75wYJSjDwOI",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "UNIVERSAL MANAGEon Oct 18, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHDXGtkgib0QGYp",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "Monthly Maintenance Feeon Sep 13, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recHDhaNBjcqkddil",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "SQ *MUHAMMAD IRFANon Sep 16, 2024collapsed",
              "Amount": -13.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHEB0FitayqvXS7",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-09",
              "Merchant Name": "BIRGIT AMANN MD PLLCon Jul 09, 2024collapsed",
              "Amount": 94.4,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHEFrvkSM1K3MML",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Dec 01, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHEYd6wIluQerJq",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 28, 2024collapsed",
              "Amount": 0.54,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recHFfCWhx5Q0oMAT",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-15",
              "Merchant Name": "AVANTI MARKETSon Jul 15, 2024collapsed",
              "Amount": -4.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHIOENIy1QCSWLa",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "Interest Earnedon Nov 28, 2023collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recHMAuVCkMxeSUoS",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "APPLEon Oct 18, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHMMqbTtQgUE30b",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 18, 2024collapsed",
              "Amount": 3.04,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recHN9AnPfIyH2EDM",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHRnbiJ9Xid9IHP",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 27, 2023collapsed",
              "Amount": -90.98,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHRxU69Q9NlNftK",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "AMERICAN FRAMEon Jun 24, 2024collapsed",
              "Amount": -115.91,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHYsdWjltAiWf3e",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "VENMOon Dec 19, 2023collapsed",
              "Amount": -73.54,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHai4n5epdrve2y",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 29, 2023collapsed",
              "Amount": -0.78,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHgEpoMUs5WKybK",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-26",
              "Merchant Name": "THE HOME DEPOTon Feb 26, 2024collapsed",
              "Amount": -89.52,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHgc3RPma34En4i",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "VENMOon May 31, 2024collapsed",
              "Amount": -296,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHghARVCXzHelOB",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Mar 29, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHgqnSz5bNQNEFh",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 17, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHjinSqghtLzgav",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 17, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recHjyWhAjvDsvmfd",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 11, 2024collapsed",
              "Amount": -26.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHlObdgYNGsxSdS",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 21, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recHmZjTqEY6gporh",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 27, 2023collapsed",
              "Amount": -0.74,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHq2igU68E9BinU",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 04, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recHrjhyplNNoLMEs",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-07",
              "Merchant Name": "AVANTI MARKETSon Aug 07, 2024collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHwk23uHnGvs8cf",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "POKEMON INTERNATIon Aug 01, 2024collapsed",
              "Amount": -70,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHxFkggggZ06QZD",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "THE HOME DEPOTon Nov 22, 2023collapsed",
              "Amount": -37.22,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHz3F0zxXEFeETG",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Oct 11, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHz7Al42alkNX9J",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "CONTINENTAL SERVICESon Oct 03, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recHzkhf6CGoRISVO",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-01",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 01, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recHzpzMvhMNrlQma",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 21, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recI0yVaPSqqhDITm",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 03, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recI2Y3yg0K2SFFOJ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 02, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recI7nCPQep7Gc2JM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-21",
              "Merchant Name": "BIGGBY COFFEEon Mar 21, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recI9QKimTw5bLueG",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 20, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIBzX3VE2B4CwO6",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 17, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIG6Wn3OID0jt38",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *KAYFABE CARDSon Sep 14, 2024collapsed",
              "Amount": -13.94,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIG8EctOLjvXlTI",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIGi9ftsgfebKbL",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "KIT CHEN THAI BYon May 24, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIHcPQAGy9Dwt8H",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-09",
              "Merchant Name": "ETERNAL GAMESon Mar 09, 2024collapsed",
              "Amount": -26.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIK3X7Bwp8GT2Hg",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 13, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIKLGjgCFhK5JKQ",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 30, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recILa1NV25W7wII0",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-01",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Feb 01, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIMy78eMPAAf3cf",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "MR COOPERon Jul 03, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recINXCOGlrwFeDsL",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 09, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recITEUsP7KJ2hImB",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-31",
              "Merchant Name": "BANK OF AMERICAon Jul 31, 2024collapsed",
              "Amount": 120.36,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recITIyNngHBOFfw3",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "MEIJERon Apr 29, 2024collapsed",
              "Amount": -43.64,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIU07US6btx18cE",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "BANK OF AMERICAon Feb 20, 2024collapsed",
              "Amount": -661.86,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIU0TRM3rVzXv4p",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 22, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIXmIETwVbT9xSM",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jan 12, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIaKm3ogFU62pCS",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 04, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIbLgPFGZLC7Hoa",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "BIG BOY RESTAURANon Jan 29, 2024collapsed",
              "Amount": -27.3,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIdFBjGPIGtQ7pf",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-12",
              "Merchant Name": "Monthly Maintenance Feeon Jun 12, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recIdZs0nYFfGQuDF",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-20",
              "Merchant Name": "LOUIES HAM & CORNED BEEFon Jan 20, 2024collapsed",
              "Amount": -13.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIduWDDxLChbXru",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "DELTA AIRLINESon Aug 22, 2024collapsed",
              "Amount": -288.95,
              "Category": "Travel: Travel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIf6hAibsiuHNoE",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "ETSYon Sep 10, 2024collapsed",
              "Amount": 24.56,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIhjO3oH7iUWZgA",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 13, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIicLqHUSzSEq13",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 25, 2024collapsed",
              "Amount": -21.93,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIjYfdiAvs3eYPV",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "BIGGBY COFFEEon Apr 11, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIkueVS5JmEXxMu",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 25, 2024collapsed",
              "Amount": 1.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIsHwCNWxlbKv18",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 26, 2024collapsed",
              "Amount": -420,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recIvLk9tumOekd7F",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-08",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 08, 2024collapsed",
              "Amount": -0.45,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIwpGUgVcp72DZG",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Mar 04, 2024collapsed",
              "Amount": -12.72,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIxGlgq9J4naJv6",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "GM FINANCIALon Mar 27, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIxZrKP9Kf2SukE",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "MR COOPERon Aug 05, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recIyL8KMAFrAYO5p",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *KPOPPIN USAon Jun 03, 2024collapsed",
              "Amount": -47.92,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIyOxwGZf9YKvO6",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 2200,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recIyTqHujkufhJlN",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "SQ *CANTERBURY CASTLEon Aug 05, 2024collapsed",
              "Amount": -7.42,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recIyoT1bF7rAVYhb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 16, 2024collapsed",
              "Amount": -0.81,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJ0MCtbgdpwxtUF",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 22, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJ3xh0h4pUC6ke5",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 26, 2024collapsed",
              "Amount": -250,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recJ7aoGF6m0eF0UF",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 02, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJ9lGzImS2cdF56",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "AMAZON MARKETPLACEon May 13, 2024collapsed",
              "Amount": -8.47,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJBObl5u5ydSiQy",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "GM FINANCIALon Aug 27, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJBz612Fag97G7P",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 15, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJDhxc8VduSZdJt",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-05",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 05, 2024collapsed",
              "Amount": -0.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJHZKTj1cj9p8rC",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-19",
              "Merchant Name": "CVS PHARMACYon Oct 19, 2024collapsed",
              "Amount": -17.8,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJIsRfsfND1ic1T",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 22, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recJMsGYfDsprN9gB",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-05",
              "Merchant Name": "BKOFAMERICA ATM WITHDRWL SCHOENHERR R MIon Mar 05, 2024collapsed",
              "Amount": -60,
              "Category": "Cash, Checks & Misc: ATM/Cash Withdrawals",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recJNGgUTLRMzHUKu",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "HARBOR FREIGHT TOOLSon Mar 11, 2024collapsed",
              "Amount": -2.08,
              "Category": "Home & Utilities: Home Improvement",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJNOGwkPRMbJksD",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "PETS BEST INSURANCEon Sep 03, 2024collapsed",
              "Amount": -24.92,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJOHPafaDXnZinC",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-12",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Aug 12, 2024collapsed",
              "Amount": -20.46,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJOSP5PjP7YzN7J",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "TACO BELLon Jun 03, 2024collapsed",
              "Amount": -6.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recJS7kGI8ZGdz1Af",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 27, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recJWEvAgiCEXDafP",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-02",
              "Merchant Name": "GRAND TAVERNon Nov 02, 2023collapsed",
              "Amount": -12.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJY1JOdy0W4GTfI",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Jul 26, 2024collapsed",
              "Amount": 250,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJYr9NZH24i8xa1",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "MCDONALDSon Sep 09, 2024collapsed",
              "Amount": -14.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJb3s4RCbOgYEB9",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 09, 2024collapsed",
              "Amount": -0.51,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJcZxKk3rpUUkmq",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "APPLEon Jan 18, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJhZP6HcA6YN4zl",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Oct 02, 2024collapsed",
              "Amount": 400,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJjUbvtFTYuMxDS",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "WL *STEAM PURCHASon Nov 28, 2023collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJjoHg0a1W2J94S",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "SEC OF STATE ESERon Sep 25, 2024collapsed",
              "Amount": -317.3,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJmBPmOmoRE2AeS",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "VENMOon Aug 01, 2024collapsed",
              "Amount": 207.8,
              "Category": "Income: Other Income",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJoElj9fmxKtkyZ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-18",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 18, 2024collapsed",
              "Amount": 0.52,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recJrCMAHuVMUYWNG",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "PETS BEST INSURANCEon May 28, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recJuCOCY7dGesvqN",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "LS FRASER BICYCLEon May 13, 2024collapsed",
              "Amount": -55.63,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recJuCOCY7dGesvqN"
      },
      "headers": {
        "content-length": "3949",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recGuCH9VP3mP92qa",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recJuCOCY7dGesvqN",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recJuCOCY7dGesvqN",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recJuUGB9EmZVYSEO",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-17",
              "Merchant Name": "JUAN BLANCOS - EASTon Jun 17, 2024collapsed",
              "Amount": -51.41,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recJwE881J2AU5Du4",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 22, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recJxfsQGN6wZh56x",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "CVS PHARMACYon Oct 11, 2024collapsed",
              "Amount": -81.97,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recK3ZOniBxSgA38L",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 06, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recK3l7WTVrEJy9Tu",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "KEKIONGA CIDER COMPANYon Jan 02, 2024collapsed",
              "Amount": -51.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recK4ZtIdl5oOGXYK",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 18, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recK7tGfm6WwGYefM",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-08",
              "Merchant Name": "CULTS3D.COMon Jul 08, 2024collapsed",
              "Amount": -0.75,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recK9KCEyG69yghXO",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "MARATHONon May 07, 2024collapsed",
              "Amount": -35.6,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recK9MEnY4nUCrS94",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "BIGGBY COFFEEon Dec 01, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKAnL90uqx05D4t",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-21",
              "Merchant Name": "CONTINENTAL SERVICESon Dec 21, 2023collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKDiMVaPrjjKHFP",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 29, 2024collapsed",
              "Amount": 1.54,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recKIBQovVGjOZ9UW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "AMAZON MARKETPLACEon Apr 17, 2024collapsed",
              "Amount": -26.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKJePT1soin4AYx",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 30, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recKM68sv03E6xuhX",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "BIGGBY COFFEEon Dec 27, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKMzudChLyyDxt7",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 10, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recKNsczHaJ4c70LL",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "CULVERSon May 07, 2024collapsed",
              "Amount": -32.74,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKT11hmrNueJhMP",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 11, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recKWc2iqzUyhYHxh",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 10, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKXYsVMxvQzlPgG",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 23, 2024collapsed",
              "Amount": -1.05,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKYilDoEg1AyNZz",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "BIGGBY COFFEEon Dec 15, 2023collapsed",
              "Amount": -1.63,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKZkDCGiE5kmFG9",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "MULVEY GARDENS Con Dec 04, 2023collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKfqElIwlfSXdc6",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Nov 02, 2023collapsed",
              "Amount": -47,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKhC00k8acDAIwQ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "BIGGBY COFFEEon Feb 23, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKjGB1ZnUg6juNM",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-01",
              "Merchant Name": "KURA SUSHIon Apr 01, 2024collapsed",
              "Amount": -75.97,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKjzPxcelyfLS2v",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "LA QUINTA INN AND SUITESon May 06, 2024collapsed",
              "Amount": -100,
              "Category": "Travel: Travel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKkdm0R6cR6uEi9",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "CHIPOTLEon May 24, 2024collapsed",
              "Amount": -12.51,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recKlck6FlpHAHqBG",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "CULVERSon May 28, 2024collapsed",
              "Amount": -17.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recKmDquFHLfcJk1T",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "UNIVERSALMGT0793on Dec 29, 2023collapsed",
              "Amount": 1621.14,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKpXkWC5PvNUZtk",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "KIT CHEN THAI BYon Jul 29, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKpuyNfS7NnbxsH",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "CHIPOTLEon Sep 14, 2024collapsed",
              "Amount": -4.98,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKscu5sIeEjLt6W",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "GM FINANCIALon Dec 27, 2023collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKuBAX1gj2cEU6p",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 18, 2024collapsed",
              "Amount": -26.47,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKvApZv18CnGgts",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "BIGGBY COFFEEon Sep 06, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recKvOheNthAhhDqr",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 22, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKwdlifsqLT5IB3",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 10, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recKxnH61yPypks7J",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 08, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recL744yFfeHFgjP0",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "BUFFALO WILD WINGSon Mar 18, 2024collapsed",
              "Amount": -26.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLAqeyS2aKELcb2",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLAwAAJRNcRu9Fy",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 03, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLDKpPOBdmXuhAD",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "YOLK AND TOAST FAon Nov 27, 2023collapsed",
              "Amount": -33.04,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLDanqCKO7DTeLo",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-04",
              "Merchant Name": "MULVEY GARDENS Con Sep 04, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLFV5FiehI2x2o1",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 05, 2024collapsed",
              "Amount": 0.81,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recLIrIszHJYTROGu",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "DTE ENERGYon Feb 20, 2024collapsed",
              "Amount": -104.24,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLJjLJGg2hzqkGq",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-07",
              "Merchant Name": "AVANTI MARKETSon Dec 07, 2023collapsed",
              "Amount": -4.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLOPboROYyvcvm3",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "BIGGBY COFFEEon Aug 30, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLVj7KU0O0xte1v",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-18",
              "Merchant Name": "AVANTI MARKETSon Nov 18, 2023collapsed",
              "Amount": -1.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLVteVShDivIAsk",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 26, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLYadHxHjZRmzly",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "STEAMGAMES.COM 42on Feb 12, 2024collapsed",
              "Amount": -50,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLdeb1afhBRtwNI",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 20, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLfHE7I0klKqnsg",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 09, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLfRq3DKz291By6",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLgyoGvMXf32FCG",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-16",
              "Merchant Name": "BIGGBY COFFEEon Jul 16, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLjCPUrqLsFtYPy",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "MEIJERon Dec 08, 2023collapsed",
              "Amount": -40.21,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLjiSdbnIRBuW3g",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "TIKTOK SHOPon Oct 29, 2024collapsed",
              "Amount": 10.78,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLktnshrzxpQVTV",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-17",
              "Merchant Name": "MCDONALDSon Sep 17, 2024collapsed",
              "Amount": -12.06,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recLlidSDWxMOz1ZV",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 22, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLo9COpACDcJvkK",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 01, 2023collapsed",
              "Amount": 0.94,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recLonj29WzRSzmRT",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-23",
              "Merchant Name": "VENTIMIGLIA ITALIon Oct 23, 2024collapsed",
              "Amount": -20.12,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLrdoCz5jUL37pF",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "PP*BOWENDRAGON1on Jun 03, 2024collapsed",
              "Amount": -55,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLrdvzFsChbQFap",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "BIGGBY COFFEEon May 29, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLrpZ2mjucxTJ76",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jun 14, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLuMbOeDkqxlpDL",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 01, 2024collapsed",
              "Amount": -0.5,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLuiHfcEK8SdwNt",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "PETS BEST INSURANCEon Jul 03, 2024collapsed",
              "Amount": 1.03,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLv2dKwurdhTBhB",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 21, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recLxWY2PINy4OEqz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI-BIGGAMERon Jun 03, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLyvYQe3P8kCkrO",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Oct 02, 2024collapsed",
              "Amount": -400,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recLz6QDzh9d2vGAD",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 11, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recM0EDXRZH2Adewh",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "COSTCOon May 20, 2024collapsed",
              "Amount": -4.96,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recM1WFFi551mD6sW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Nov 24, 2023collapsed",
              "Amount": -137.67,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recM1lVMNnzlzc9qB",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 03, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recM2zhJ12WoYZXoq",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "BIGGBY COFFEEon Mar 12, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recM7W0Cm6v7sXPrf",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 27, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMA0wpWtsGnSVh4",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-12",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Dec 12, 2023collapsed",
              "Amount": -13.57,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMAx5q8IWSGPlPd",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Jul 26, 2024collapsed",
              "Amount": 420,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMAxfR9JnRdrvAi",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "CRUNCHYROLLon Jul 22, 2024collapsed",
              "Amount": -11.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMCEcP407FYk2hY",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 21, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMDcUOypMYM4FJD",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ETERNAL GAMESon May 20, 2024collapsed",
              "Amount": -30,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recME5HdLIZNtqVkn",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "BIGGBY COFFEEon May 14, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMLByScSc0L9c9C",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *ARIELLE SEKULon Jun 03, 2024collapsed",
              "Amount": -69.71,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMLVLG5CB5OJi2l",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-05",
              "Merchant Name": "AVANTI MARKETSon Feb 05, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMMXKX401nnGvG9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 02, 2024collapsed",
              "Amount": -0.04,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMOUsgSJZDkPBAR",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 30, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMT0vVE5fEX7Wp0",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "VENMOon Nov 15, 2023collapsed",
              "Amount": -47.43,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMUibOTNtLKBMRy",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "UNIVERSAL MANAGEon Nov 15, 2024collapsed",
              "Amount": 1408.88,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMXiTSQSmpN9iYf",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 30, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMYeNDWFUQQig9x",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMaIusBGqBqcOQI",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 27, 2024collapsed",
              "Amount": -0.54,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMaJWkd35jsTOOH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 20, 2023collapsed",
              "Amount": -0.79,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMbQTim0KrYRjD3",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "TST*OPH - AMHERSTon Sep 30, 2024collapsed",
              "Amount": -30.63,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMbokAsDtwKUcqt",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-18",
              "Merchant Name": "SPEEDWAYon Jul 18, 2024collapsed",
              "Amount": -1.9,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMcodsiXvQxAvKa",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 06, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMgEiyOlT6oxSZM",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "MEIJERon Jul 22, 2024collapsed",
              "Amount": -81.16,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMiEJU61KNmRbmI",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "STEAMGAMES.COM 42on May 31, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMkf3nmJhNaijzg",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-23",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 23, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMlEMyXhtKTlWNB",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 14, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recMpYTrq3xCB9ZxV",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 13, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMqNHO4CjAKFD1k",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-15",
              "Merchant Name": "AVANTI MARKETSon Aug 15, 2024collapsed",
              "Amount": -1.79,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recMuSNKyzOxMDo54",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 01, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMub2SZ21jW4y1c",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 17, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recMwo4KpNrDZ794i",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recMwo4KpNrDZ794i"
      },
      "headers": {
        "content-length": "3861",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recJuCOCY7dGesvqN",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recMwo4KpNrDZ794i",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recMwo4KpNrDZ794i",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recMyGIeKvVB5PUPH",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 11, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recMyQjdYRS7wpc2b",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "DTE ENERGYon Jan 19, 2024collapsed",
              "Amount": -65.86,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recMyvJkTlTaDd1rj",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-07",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 07, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recN1Xl4hkL9rmEsK",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-07",
              "Merchant Name": "BIGGBY COFFEEon Nov 07, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recN2HqStALEB9IQy",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "US DEPT OF EDUCATIONon Feb 27, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recN46Wq4ELtUGkwP",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-31",
              "Merchant Name": "LITTLE JOE'S CONEY ISLon Jan 31, 2024collapsed",
              "Amount": -15.68,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recN6kgtGN3EaAZPm",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-05",
              "Merchant Name": "THE HOME DEPOTon Feb 05, 2024collapsed",
              "Amount": -186.49,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recN719X4UYeky6Cu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-19",
              "Merchant Name": "EXXON MOBILon Sep 19, 2024collapsed",
              "Amount": -46.15,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNDGGa4byRS8xV1",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 07, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recNEFIJa2zOEacyS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "AMAZON MARKETPLACEon May 09, 2024collapsed",
              "Amount": -26.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNHEkjYq3yMbM8a",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 31, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recNIBf6lzP2I2yhK",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 06, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recNIiLZWxsIjJEWu",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "GRAND TAVERNon Mar 18, 2024collapsed",
              "Amount": -34.67,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNLBwzLxMFnoHYq",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-16",
              "Merchant Name": "APPLEon Jan 16, 2024collapsed",
              "Amount": -0.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNLjFDDVFFrHyqT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-23",
              "Merchant Name": "LITTLE CAESARS PIZZAon Dec 23, 2023collapsed",
              "Amount": -8.46,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNO99X5k2qT1atU",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-15",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Jul 15, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNOWRJkusbAUXD4",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "DC137 - LOMBARD GARAGEon Sep 16, 2024collapsed",
              "Amount": -35,
              "Category": "Transportation: Public Transportation",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNOoghPToiloaWu",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "ETERNAL GAMESon Mar 11, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNQpPm6PCbwEzEb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "DELTA AIRLINESon Aug 22, 2024collapsed",
              "Amount": -288.95,
              "Category": "Travel: Travel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNR3dkqYfTbrJiW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "CCBILL.COMon Nov 20, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNRAXBzmq12dkpH",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "CGTRADERon Dec 04, 2023collapsed",
              "Amount": -5,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNRrcx6saP09aDK",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "BIGGBY COFFEEon May 09, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNSmqB5Hv3TkHDi",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "S Ron Oct 01, 2024collapsed",
              "Amount": -50.05,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNTN5yWl1PN0YEz",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-28",
              "Merchant Name": "BANK OF AMERICAon Mar 28, 2024collapsed",
              "Amount": -637.98,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNU1MVVdP73FG0V",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 25, 2024collapsed",
              "Amount": 0.81,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recNZ9R2L58eUVdB3",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 24, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNZC8dp1PDbdQGT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "GRAND TAVERNon Dec 06, 2023collapsed",
              "Amount": -32.86,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNZXIijx2h3Bms1",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "BIGGBY COFFEEon Oct 04, 2024collapsed",
              "Amount": -5.7,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNdjuIxZVMlAfUM",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "TST* LUCKY BRUNCHon Nov 20, 2023collapsed",
              "Amount": -28.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNdvPMmsxyIGaE0",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "Monthly Maintenance Feeon Mar 12, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recNi9zAxfHnDgxok",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "PARTRIDGE ENTERPRon Aug 02, 2024collapsed",
              "Amount": -60.95,
              "Category": "Cash, Checks & Misc: Other Bills",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNidnAGe2mm8IIr",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "GITHUBon Feb 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNiiOVCM4AP0bJd",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 08, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recNkhojq2fyjopfQ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "COMCASTon Jan 08, 2024collapsed",
              "Amount": -60,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNo2abaI7hWew21",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "THE GREEN LIGHT Von Jul 26, 2024collapsed",
              "Amount": -4.24,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNo9U2WFtb6kSd6",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "DTE ENERGYon Oct 18, 2024collapsed",
              "Amount": -105.43,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNqNwErubJ7NIzf",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "GITHUBon Aug 16, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNqTYZnsFILnoJo",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "GRAND TAVERNon Jan 10, 2024collapsed",
              "Amount": -15.51,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNsdGF4MZl14rRW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "POTOWNSTORE.COMon Apr 02, 2024collapsed",
              "Amount": -23.5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recNtqwZbhtyBH1g6",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-22",
              "Merchant Name": "MICRO CENTERon Jun 22, 2024collapsed",
              "Amount": -2103.54,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNuaxPf1zuALkUk",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 02, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recNuoScrSUTx3QEE",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-09",
              "Merchant Name": "LITTLE JOE'S CONEY ISLon Dec 09, 2023collapsed",
              "Amount": -11.53,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recNyN2CgGaocnCBL",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-21",
              "Merchant Name": "Restauranton Sep 21, 2024collapsed",
              "Amount": -15.55,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recO10HA4lICNn1q8",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "PROGRESSIVE INSURANCEon Feb 20, 2024collapsed",
              "Amount": -1179,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recO96ZJJX7El2g4O",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "CHIPOTLEon Oct 18, 2024collapsed",
              "Amount": -5.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recO9HxIzCylsjRQ8",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "AVANTI MARKETSon Mar 18, 2024collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recO9TebfcWq63Tbl",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-17",
              "Merchant Name": "BIGGBY COFFEEon Aug 17, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recOBfu0IAzOeF4qZ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 03, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recOC2hKuE7nUr2sq",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "CITY OF FRASER UTon Nov 27, 2023collapsed",
              "Amount": -77.96,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOF2BRho3sBTlP3",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "CONSUMERS ENERGYon Jan 29, 2024collapsed",
              "Amount": -80.12,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOFvTMTRPZjHwDY",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "CHIPOTLEon May 17, 2024collapsed",
              "Amount": -30,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOGZRxSLMyR17Kl",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-08",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 08, 2023collapsed",
              "Amount": -0.05,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOIooXG2ai3qjCz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 14, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recONLUA2bJHiTa5Z",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jan 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOR1nx9yYkD917s",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 17, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOSjSxzLarpDpQ5",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "AMAZON MARKETPLACEon Feb 12, 2024collapsed",
              "Amount": -24.03,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOUGhTCRoBTK8tx",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-24",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 24, 2024collapsed",
              "Amount": -13.78,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOVHg66JinGJUkb",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 02, 2024collapsed",
              "Amount": 3.14,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recOVwAlZ1s8aju22",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 01, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOXNELHJ7gikT9l",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "AMAZON MARKETPLACEon May 28, 2024collapsed",
              "Amount": -9.43,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOXkoqiqV87vPwN",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "BIGGBY COFFEEon Sep 20, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recOY33XcCk7xUfqr",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "UNIVERSAL MANAGEon Jul 26, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOcHIvIkVp5chjy",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "Interest Earnedon Jul 29, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recOdGy63zCv7gr2C",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-18",
              "Merchant Name": "HANEYS FAMILY RESon Apr 18, 2024collapsed",
              "Amount": -18.3,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recOeOevrSdMf3TOO",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "LOVES TRAVEL STOPS AND COUNTRY STORESon Oct 12, 2024collapsed",
              "Amount": -38.92,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recOhaDVGBQIFB2Og",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-05",
              "Merchant Name": "SP BAMBULAB.USon Dec 05, 2023collapsed",
              "Amount": -36.67,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOnSZqu3CZDuPJb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 23, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recOo7kpBEqqYnqh9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "STEAMGAMES.COM 42on Oct 21, 2024collapsed",
              "Amount": -23.84,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOrBDYEiJBai46d",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 12, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOskTqb0CaRKCcR",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-03",
              "Merchant Name": "AVANTI MARKETSon Feb 03, 2024collapsed",
              "Amount": -2.59,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recOvj3yViPRBPSbS",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Nov 20, 2023collapsed",
              "Amount": -1017.96,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOwDz8SVy1DjW3B",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "BKOFAMERICA ATM WITHDRWL ROCHESTER-OR MIon Jan 08, 2024collapsed",
              "Amount": -300,
              "Category": "Cash, Checks & Misc: ATM/Cash Withdrawals",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOwiiRYwJzCJEY1",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-20",
              "Merchant Name": "ETSYon Aug 20, 2024collapsed",
              "Amount": 21.86,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recOymFOg3MXOpipc",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "Monthly Maintenance Feeon Oct 16, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recP0Zmfl6BuLkvgL",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 07, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recP22VzTMTE4OL2a",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 02, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recP2iaLiASO6nZBL",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "CONTINENTAL SERVICESon Apr 17, 2024collapsed",
              "Amount": -2.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recP351LvUfngqWx1",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Feb 09, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recP3dlkmsOW65r6A",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "CULVERSon May 03, 2024collapsed",
              "Amount": -12.61,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recP40YzyOo3USpPt",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 03, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recP53Wlz7cPFhquu",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "PETSMARTon Feb 12, 2024collapsed",
              "Amount": -47.67,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recP5nWptvwmq3xfh",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "UNITEDWHOLESALEMTon Oct 18, 2024collapsed",
              "Amount": -495,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recP6xvDfNPLzD3qs",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-25",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 25, 2024collapsed",
              "Amount": 0.09,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recP8KOfIea937lyd",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "LIL THAI EXPRESSon Jan 26, 2024collapsed",
              "Amount": -47.5,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPFDKjlElbwXSiJ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-25",
              "Merchant Name": "SOHOon Jun 25, 2024collapsed",
              "Amount": -30.42,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPKnjia1F495pXX",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 01, 2023collapsed",
              "Amount": -39.2,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPOJzbhYKs1nemo",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "UNIVERSALMGT0793on Nov 17, 2023collapsed",
              "Amount": 1621.14,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPPeyLqi4V3hjgQ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *KICKIN' RAD!on Jun 03, 2024collapsed",
              "Amount": -7,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPQjCeT41uXZc8L",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "BIGGBY COFFEEon May 31, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPRjxGYvYMZwUTL",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon May 31, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPclefrQkyzR6TU",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPdlCg6qyyTchfx",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 22, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPeFBnOzMLCjU9t",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "SUSHI ARTon Aug 23, 2024collapsed",
              "Amount": -47.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPfvz5NS6YptaxE",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Feb 21, 2024collapsed",
              "Amount": -22.78,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recPgppiR70o62olg",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "DC137 - LOMBARD GARAGEon Sep 16, 2024collapsed",
              "Amount": -36,
              "Category": "Transportation: Public Transportation",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recPj69JowZZtBG7V",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "HOTELS.COMon May 06, 2024collapsed",
              "Amount": -261.15,
              "Category": "Travel: Travel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPmPkCNVzLzx6yF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 17, 2024collapsed",
              "Amount": -3.04,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPqTnbWjef4Lavm",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 03, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recPs1eYfUdAzJYEI",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPtimNWoAnDoRAo",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 29, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recPtimNWoAnDoRAo"
      },
      "headers": {
        "content-length": "4106",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recMwo4KpNrDZ794i",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recPtimNWoAnDoRAo",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recPtimNWoAnDoRAo",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recPvOWlQ91YV20OH",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 28, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recPyT3vV5G6TiuKp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Dec 15, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQ1qgyz53F7X5CR",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Jan 17, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQ2Xu0noji6KvdL",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "US DEPT OF EDUCATIONon May 28, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQ4O7arWhgWVRzv",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ETERNAL GAMESon May 20, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recQ5IIWbchbIllsX",
            "createdTime": "2024-11-18T01:35:15.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 30, 2024collapsed",
              "Amount": 0.95,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recQ86Z33lULGMyK2",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-16",
              "Merchant Name": "BIGGBY COFFEEon Mar 16, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQ9diT4WATC5D94",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-24",
              "Merchant Name": "GRAND TAVERNon Jan 24, 2024collapsed",
              "Amount": -25.97,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recQCJ4NEawFz9PK9",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQDW7oESrytsACk",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "VENTIMIGLIA ITALIon Nov 27, 2023collapsed",
              "Amount": -25.96,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQFfEpNYoyTcMAx",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 20, 2024collapsed",
              "Amount": -0.6,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQFrrRZBNbJKsr0",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-14",
              "Merchant Name": "BIGGBY COFFEEon Mar 14, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQGAEAttM1f3aEP",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "SQ *THE SIDE DECKon Oct 12, 2024collapsed",
              "Amount": -15,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQGzl52guez2cBs",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "AMAZONon Jul 22, 2024collapsed",
              "Amount": -10.15,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQLhZl5UHBI2VPn",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 15, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQOY4UMWeN67jvd",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 28, 2024collapsed",
              "Amount": 1.03,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recQOjkf1atJQDQvR",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "BIGGBY COFFEEon Mar 06, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQTsLXfFIit3D0A",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "SUGAR FACTORY INDIANAPOLon May 06, 2024collapsed",
              "Amount": -4.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQW4oNVeKiZ62pc",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on May 17, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQa7EHIABYgHYSP",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "SPEEDWAYon Oct 21, 2024collapsed",
              "Amount": -42.95,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQaheIiyxrKPVRd",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 7139on May 20, 2024collapsed",
              "Amount": -180,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQapuavqnZB60wU",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-23",
              "Merchant Name": "04412 THE EDGE FITNESS MIon Oct 23, 2024collapsed",
              "Amount": -8.47,
              "Category": "Health: Fitness or Health club membership",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQdJs3W3CElyQNp",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-09",
              "Merchant Name": "BIGGBY COFFEEon Jul 09, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recQdmaxvaXJuf5BZ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQg7X9XPigzS7DQ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 23, 2024collapsed",
              "Amount": -1600,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recQhFAMG0yI7eNzf",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 26, 2024collapsed",
              "Amount": 2.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recQiBhulIJSPXnnp",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "TIKTOK SHOPon Oct 17, 2024collapsed",
              "Amount": -9.21,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQm0iuMViylaNjH",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 26, 2024collapsed",
              "Amount": -3.48,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQoo2cmNyYn5XdZ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 29, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recQpVMNEKxDvCZt7",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 27, 2024collapsed",
              "Amount": -0.95,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recQqE3YOKGe8v09K",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 08, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recQxkbOmEMHXp8hV",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 27, 2024collapsed",
              "Amount": -1.03,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recR1c79y9YYnUeLW",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "MULVEY GARDENS Con Oct 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recR3TjIVOeCuLOYl",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "UNIVERSAL MANAGEon Oct 11, 2024collapsed",
              "Amount": 1357.97,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recR4wXSJVQgWN9Nx",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Jan 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRCMf1pgyw5KWtU",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-28",
              "Merchant Name": "KIT CHEN THAI BYon Aug 28, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRJcmKY9P9wkxDh",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "MEIJERon Apr 19, 2024collapsed",
              "Amount": -13.77,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recRQ0i7dZb1hQr8K",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "AMF BOWLING CENTERSon Oct 21, 2024collapsed",
              "Amount": -14.99,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRTbiD7zJp0jtOE",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "UNIVERSAL MANAGEon Nov 08, 2024collapsed",
              "Amount": 1408.88,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRUxqaKQGadRE49",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "MEIJER EXPRESS 145on Jun 10, 2024collapsed",
              "Amount": -31.05,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRYV6HtvgtfDodF",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-16",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Nov 16, 2023collapsed",
              "Amount": -12.76,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRYkHSUuXpC5Dlw",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-15",
              "Merchant Name": "GITHUBon Jul 15, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRaXZ4JkGLoemcP",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Jul 23, 2024collapsed",
              "Amount": -4704.08,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRbTz1S74BkTAkw",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-20",
              "Merchant Name": "DTE ENERGYon Aug 20, 2024collapsed",
              "Amount": -140.73,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRbqEhMoBs5XtTi",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 30, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recRc8KMMd3312MFn",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 27, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRcdA85HYFuctkf",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-09",
              "Merchant Name": "ODE AUTO REPAIR AND TIREon Mar 09, 2024collapsed",
              "Amount": -33,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRdqd88SOzJhNpX",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-15",
              "Merchant Name": "AMF BOWLING CENTERSon Apr 15, 2024collapsed",
              "Amount": -14.39,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recRfX1S4LbPfewBF",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRfr43f7jXgNDNQ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-16",
              "Merchant Name": "ETERNAL GAMESon Dec 16, 2023collapsed",
              "Amount": -9.52,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRgkKJoLV90KYmf",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "MCDONALDSon Nov 24, 2023collapsed",
              "Amount": -14.6,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRjter709B36Rdb",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 25, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recRkKXRbcvpOiKYm",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "BIGGBY COFFEEon Apr 12, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRlJ7RZZDvDqlvG",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "THE HOME DEPOTon Aug 19, 2024collapsed",
              "Amount": -213.52,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRqHgAjzsVZe8jS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 28, 2024collapsed",
              "Amount": -2.63,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRqKwuqPREJhWwT",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "Online payment from CHK 7on Sep 23, 2024collapsed",
              "Amount": 536.78,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRt8Vxe9gjBoW90",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-06",
              "Merchant Name": "COMCASTon Feb 06, 2024collapsed",
              "Amount": -60,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recRveQFhk0mZzepF",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "SQ *ESTIA GREEK STREET FOon Jan 05, 2024collapsed",
              "Amount": -14.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recRyVX4RPsqFyqlE",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "BIGGBY COFFEEon Aug 06, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recS0dbwhp4OoXgNx",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "EBAYon Aug 19, 2024collapsed",
              "Amount": -529.06,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recS28Plr59TUhwnG",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 12, 2024collapsed",
              "Amount": -0.21,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recS2KutgyG8KHfx3",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 25, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recS3OM62wF5MPYjU",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 29, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recS5ejsDJJK30YyM",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "COSTCOon May 20, 2024collapsed",
              "Amount": -39.68,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recS9eOgl1cnDWD45",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "CRUNCHYROLLon Jun 21, 2024collapsed",
              "Amount": -11.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recS9qQDyvJk6o4hq",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "GITHUBon Mar 18, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSBVmETJf0Lk8sz",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "MEIJERon Nov 20, 2023collapsed",
              "Amount": -31.98,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSBuNBzTiapNlYh",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "WL *STEAM PURCHASon Sep 09, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSCCCNcVycScrqF",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "FIVE GUYS BURGERS AND FRIESon Dec 06, 2023collapsed",
              "Amount": -11.12,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSDBNN7EOgZTqIz",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "CVS PHARMACYon Dec 26, 2023collapsed",
              "Amount": -29.22,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSECiyZ3uJQtwCj",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Aug 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSJ74MNAunMKI6G",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 26, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSKfrMGt3QhmYgR",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "BIGGBY COFFEEon Jan 26, 2024collapsed",
              "Amount": -12.71,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recSP3upbS28ITnnC",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-04",
              "Merchant Name": "MEIJERon Jul 04, 2024collapsed",
              "Amount": -4.39,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSV9W7W2ZcVbhz8",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recSWZpQ6RQopLpW9",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 27, 2023collapsed",
              "Amount": 1.05,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recSY3vSpwtSMEU4k",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSbhCqiKMiMm4Mn",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSdTRLGWjsW8aln",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "MEIJERon Jul 22, 2024collapsed",
              "Amount": -40.68,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSdykBRrPTmxn5d",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "UNIVERSAL MANAGEon Sep 20, 2024collapsed",
              "Amount": 1357.99,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSeJDmZYXHrUhsv",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-10",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Jul 10, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSeQrhJ9S022Na8",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "DISCORDon Feb 12, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recShVaiGWTMaXtsV",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "APPLEon Feb 20, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recShmX4xie4cEpvm",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 08, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSllxvzSnLl6Ce8",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "DISCORDon Jan 10, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSo4pkLetIrY6GO",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-23",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 23, 2024collapsed",
              "Amount": -0.88,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSpbOOoaA7DYGEI",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "STONY CREEK ROADHOUSEon Apr 02, 2024collapsed",
              "Amount": -46.42,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recSq4mtnKwEbtkXQ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 26, 2023collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recSsxzy8qgCLUgIF",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jun 21, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recSvYbcDy22vWEvh",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on May 03, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recT0Ltd8KILdveDo",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "LOUIES HAM & CORNED BEEFon Nov 01, 2023collapsed",
              "Amount": -16.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recT26AAOGPjAWU5l",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "SP BAMBULAB.USon Mar 13, 2024collapsed",
              "Amount": -57.23,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recT3xe1nH0pf8sSi",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-10",
              "Merchant Name": "DISCORDon Oct 10, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recT6tEJpoRzml2V5",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI RESORTSon Jun 03, 2024collapsed",
              "Amount": -58.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recT90ykQ5LqtfsQE",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 10, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recT9PJDJNkpYwZze",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "PETS BEST INSURANCEon Jun 27, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTAMYgrVOPqFq2y",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-30",
              "Merchant Name": "BIGGBY COFFEEon May 30, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTBztkXmTGkpLvF",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 03, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recTCWvCmCdejRdxZ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 14, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTL1L6DAPVCVrb2",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 29, 2024collapsed",
              "Amount": -1.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recTL1L6DAPVCVrb2"
      },
      "headers": {
        "content-length": "3963",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recPtimNWoAnDoRAo",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recTL1L6DAPVCVrb2",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recTL1L6DAPVCVrb2",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recTLOCvRFjxCi5LR",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "MEIJERon Dec 26, 2023collapsed",
              "Amount": -33.74,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recTM9C7tusYQgLi7",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "ONLYFANSon Oct 07, 2024collapsed",
              "Amount": -3,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTMHAu3M7mE7Ah9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 04, 2024collapsed",
              "Amount": -0.3,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTMJY3NlnxLCEeb",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 29, 2024collapsed",
              "Amount": 1.17,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recTRRRzvTZnZrUke",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 23, 2024collapsed",
              "Amount": 2.26,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recTRh06ncghtQ0zp",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Apr 05, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTUQu9XVDT5p73i",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "FI *RESTAURANTon Apr 29, 2024collapsed",
              "Amount": -27.67,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTVZlrTEzJC9zyO",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 02, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTXHCtUbKNGPs8B",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "UNIVERSALMGT0793on Mar 15, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTYDCyXsdTQR2qU",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTZ9DbkYZFu2Ivl",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "Monthly Maintenance Feeon Feb 09, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTa7FPCsCHCqihJ",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 27, 2024collapsed",
              "Amount": 3.48,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recTaAZcAdycMZWXV",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 02, 2024collapsed",
              "Amount": -0.5,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTfFbfUOKUhIYjn",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 03, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTmvgS5fbB7lAXY",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 22, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTplMjCyaC0TI5z",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 08, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recTqx40exEIH8g6C",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jul 05, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTv1InGBQ96CZ5n",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-11",
              "Merchant Name": "SAGANO BISTRO IIIon Nov 11, 2023collapsed",
              "Amount": -8,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recTvj6C9rJsXlxfh",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "BIGGBY COFFEEon Sep 26, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTvnBjL6LxPWaBS",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-28",
              "Merchant Name": "BPon Mar 28, 2024collapsed",
              "Amount": -47.83,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recTvuhFSLqzl4tzm",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ETERNAL GAMESon May 20, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recTwTGm4rdSQ9Ltr",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 22, 2024collapsed",
              "Amount": -0.1,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTxxouSPOooajkZ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "SP BAMBULAB.USon Dec 04, 2023collapsed",
              "Amount": -66.76,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTyILQ2nRC2qCse",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-13",
              "Merchant Name": "ETSYon Nov 13, 2024collapsed",
              "Amount": 8.16,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recTz4EIVO5yPkQSF",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "AMAZONon Apr 22, 2024collapsed",
              "Amount": -16.74,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recU2MwaFJhmTlBjj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 26, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recU32zHmOlOvNsBP",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 14, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recU4u9ueSNT9SdqO",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-16",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 16, 2024collapsed",
              "Amount": 0.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUBJmKnqRr0R4pC",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 18, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUFhXtLEhPHgRDK",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on May 31, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUHFAzalugWybvU",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 12, 2024collapsed",
              "Amount": 0.52,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUHp5TWm6b5D2DE",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "APPLEon May 20, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUKDZIsjvsDtuvP",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 11, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recULu6mXIiCholdh",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 01, 2023collapsed",
              "Amount": -7.94,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUPEBAmpCMq9VoW",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 18, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUQdHsboybHPOWj",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Aug 02, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUSWomFEIFR36Yy",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "AVANTI MARKETSon Mar 04, 2024collapsed",
              "Amount": -3.48,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recUahxMRkrBrMTwl",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 30, 2024collapsed",
              "Amount": 0.67,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUapCsk50pPlkhN",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-18",
              "Merchant Name": "BIGGBY COFFEEon Jul 18, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recUb171PTNjM3hBO",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 21, 2024collapsed",
              "Amount": 1.27,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUbB4tRaEG2JhsQ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-13",
              "Merchant Name": "GRAND TAVERNon Jun 13, 2024collapsed",
              "Amount": -24.02,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recUbFxLkWrsaPatR",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 08, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recUbtBY7EcvyQi5k",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 27, 2023collapsed",
              "Amount": 1.9,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUc6ZNsL6npleAL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-09",
              "Merchant Name": "TACO BELLon Mar 09, 2024collapsed",
              "Amount": -17.31,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recUhUavzTlFpwVpu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "CRACKER BARRELon Sep 09, 2024collapsed",
              "Amount": -33.73,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUiq3BmHHcb1ubL",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUlSLRuGVM18Rsw",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jan 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUlqiKH4G7k8GDb",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 10, 2023collapsed",
              "Amount": -0.85,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUoEUEokLGhq4Gm",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "BIGGBY COFFEEon Nov 27, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recUoIkxdwE7ICGxf",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 28, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recUotPeZzr1lh8YC",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-04",
              "Merchant Name": "FAMILY PAWS VETERINARYon Jul 04, 2024collapsed",
              "Amount": -645,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recUs0K0709k7dHQn",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 27, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recUyqYpTuZoZCNPQ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-21",
              "Merchant Name": "CRUNCHYROLLon Mar 21, 2024collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recUzzeS3hIHUecbP",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-03",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 03, 2024collapsed",
              "Amount": 0.6,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recV06H65xA2eyxuS",
            "createdTime": "2024-11-18T01:35:29.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 30, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recV0zdEZGxM7jHcu",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 08, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recV2XLWZv1gVBgk5",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-09",
              "Merchant Name": "BIGGBY COFFEEon Nov 09, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recV42a7KnaN4mAk2",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 11, 2023collapsed",
              "Amount": 25.22,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVA54V7xUB3DiJ0",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 22, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVE3uvCoUun7fWl",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-03",
              "Merchant Name": "MARATHONon Jan 03, 2024collapsed",
              "Amount": -35.07,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recVFVvM5hGiXjKed",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-08",
              "Merchant Name": "HOYOVERSEon Jul 08, 2024collapsed",
              "Amount": -0.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVGiL92hYMvL4wr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 11, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recVGv4Lpg2mVlr4p",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 27, 2023collapsed",
              "Amount": -3.76,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVJTgEC8F2UCmn3",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-16",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Jan 16, 2024collapsed",
              "Amount": 543.72,
              "Category": "Income: Deposits",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVKtMtD8sNBDquy",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "SPEEDWAYon Jun 24, 2024collapsed",
              "Amount": -7.36,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVLMCzD8uKnTiQQ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Feb 02, 2024collapsed",
              "Amount": 0.64,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recVMU8uHXA6EO36k",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "UNIVERSALMGT0793on Jan 19, 2024collapsed",
              "Amount": 1959.45,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVNr4PQeYz08pUz",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 17, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVO1sdsdipKD234",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "SQ *GEEKY ENDEAVOon May 31, 2024collapsed",
              "Amount": -69.39,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVO3b3tCqHZ7FP9",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 10, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVQdYaM3hSlRGic",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "LOUIES HAM & CORNon Apr 24, 2024collapsed",
              "Amount": -14.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVRMjzTd0TiYL24",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "NNT THE 8 SIDEon Oct 28, 2024collapsed",
              "Amount": -21.2,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVSUSLek6cWADXN",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "BANK OF AMERICAon May 21, 2024collapsed",
              "Amount": -22.53,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVYb95xQuJ6w6wU",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVZaTdrynnaueAu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "US POSTAL SERVICEon Sep 09, 2024collapsed",
              "Amount": -33.5,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVagza6ftXaKYNE",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 14, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVbNR52bKul9XaF",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jan 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVbszvVHxVkzd4c",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Sep 23, 2024collapsed",
              "Amount": -45.24,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recVg2LpwgtKeYugx",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-03",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 03, 2024collapsed",
              "Amount": 0.5,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recVnp4ZDjz7ERVjB",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVo8VgBPsLmSgiJ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-06",
              "Merchant Name": "GRAND TAVERNon Jun 06, 2024collapsed",
              "Amount": -25.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recVqBn5BvgI4OVDS",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-19",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Feb 19, 2024collapsed",
              "Amount": -16.2,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recVre5osDYrd4ip1",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "ETSYon Mar 12, 2024collapsed",
              "Amount": 39.57,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVwJI7YYjhtqufT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 08, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recVy3KXlADkzoEew",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 29, 2024collapsed",
              "Amount": -2.89,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recW05LTOr8tNR1uP",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 05, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recW0xhiQZl75M2Nt",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-28",
              "Merchant Name": "GRAND TAVERNon Feb 28, 2024collapsed",
              "Amount": -27.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recW1LvYegeFLLZln",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "APPLEon Jul 19, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recW4rDefLgUO2G68",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recW5h0Y89PGsGM3N",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "CHIPOTLEon Mar 11, 2024collapsed",
              "Amount": -26.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recW7hPgETyTfipuz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 21, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recW97FV7IO67fn0e",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 31, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWAMRQgJQLsLzJr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 20, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recWBRAFm7zGHXSAA",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "SQ *OTOTOBOon Nov 06, 2023collapsed",
              "Amount": -26.5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWFwQtkCGXZB7U7",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-09",
              "Merchant Name": "UNIVERSAL MANAGEon Aug 09, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWGTzYFHa6I3YCW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "CULTS3D.COMon Nov 27, 2023collapsed",
              "Amount": -6.52,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWNSI5JH0IVy3p7",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-13",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Dec 13, 2023collapsed",
              "Amount": -20.14,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWP4NT8z4jjEU9L",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 28, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWRg7rFe4tiB0EH",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "GM FINANCIALon May 28, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWTEVHxHOvbPIUc",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Mar 08, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recWTEVHxHOvbPIUc"
      },
      "headers": {
        "content-length": "3812",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recTL1L6DAPVCVrb2",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recWTEVHxHOvbPIUc",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recWTEVHxHOvbPIUc",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recWUECTLab1I5BT8",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "BIGGBY COFFEEon May 24, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recWUSIb5FopIxDWH",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jul 26, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWUswGunNXtT70V",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWV11angEhLJfOm",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 21, 2024collapsed",
              "Amount": 0.6,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recWX7U7CJYVoZroQ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWakZx0AdU16etd",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 08, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWcAVbJfbNkpNw9",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 09, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recWcxmIQSVMRFnE2",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLYFANSon Aug 30, 2024collapsed",
              "Amount": -55.55,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWd1f6qsU6i8nBS",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "THE HOME DEPOTon Mar 18, 2024collapsed",
              "Amount": -82.6,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWdKESROosiFoUs",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 27, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recWjCT9G8VyNThNm",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "BIGGBY COFFEEon Dec 22, 2023collapsed",
              "Amount": -1.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWlOKuGfWRp6QNm",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Aug 01, 2024collapsed",
              "Amount": 40,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWlPgKZjiUyuwvh",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-13",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Aug 13, 2024collapsed",
              "Amount": 580.5,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWlltwaFftZyw3y",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 31, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recWmPCT2HeD4X3Z2",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "Interest Earnedon Apr 12, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recWmh7QHEJWPJGC5",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-15",
              "Merchant Name": "MEIJERon Aug 15, 2024collapsed",
              "Amount": -46.83,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWmyjlhQmP9chC8",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Oct 28, 2024collapsed",
              "Amount": -800,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recWoQxlAof7Ta5nA",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-21",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Dec 21, 2023collapsed",
              "Amount": -29.67,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recWpPS0qXE4coudg",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "UNIVERSALMGT0793on Mar 29, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWtfFiNxbQpKFij",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "INTERSTATE PARKINon Sep 03, 2024collapsed",
              "Amount": -15.65,
              "Category": "Transportation: Public Transportation",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWuJM0y0VAmtSC5",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 23, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recWwIfNDlLyZr45W",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 05, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recWyBVLDNPDyDJgu",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-13",
              "Merchant Name": "Monthly Maintenance Feeon Aug 13, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recX1PcitNzXbwKEw",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-31",
              "Merchant Name": "BIGGBY COFFEEon Jan 31, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recX4RZq46MchJB6O",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *SENPAI SQUADon Jun 03, 2024collapsed",
              "Amount": -41.7,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recX4lhlnAd7UXOLx",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 02, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXAkoDsym8DW2mW",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 29, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recXAodGBgUMVcR2h",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "DTE ENERGYon Dec 19, 2023collapsed",
              "Amount": -44.45,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXE4fX3CRRmx4ZN",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "UNIVERSAL MANAGEon Sep 06, 2024collapsed",
              "Amount": 1357.97,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXG7ZQn8eE73RaW",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "U-HAULon Jan 08, 2024collapsed",
              "Amount": -15.85,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXIuFy7X06jMNHN",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 18, 2024collapsed",
              "Amount": -18,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXKbr9sAj8t5T37",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "CULTS3D.COMon Mar 25, 2024collapsed",
              "Amount": -2,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXLgmUwBNwMYRYe",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 20, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXNzr3sNhc3nMth",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-19",
              "Merchant Name": "ETERNAL GAMESon Oct 19, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXP2YYyy3Bq93BY",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "UNIVERSALMGT0793on Nov 03, 2023collapsed",
              "Amount": 1639.87,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXP9lcmhd6Aumo5",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "MR COOPERon May 09, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXPxFadr1xEdFRh",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "AMAZONon Nov 29, 2023collapsed",
              "Amount": -28.61,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXQxAeybr0PlKq7",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 22, 2024collapsed",
              "Amount": -0.48,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXRTbghIJBV7q41",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-01",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 01, 2024collapsed",
              "Amount": -0.64,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXWObevt5yxo1pD",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 29, 2024collapsed",
              "Amount": -0.64,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXX2OI3McE5uJt4",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-23",
              "Merchant Name": "AVANTI MARKETSon Mar 23, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXYbX9x1hi5bMLC",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "BIGGBY COFFEEon Jul 23, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recXZzZ5HZPwlgjuk",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 01, 2024collapsed",
              "Amount": 0.64,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recXakNfK4HQOKxSj",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-28",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 28, 2023collapsed",
              "Amount": -0.11,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXdgywFpnCLs8EY",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXfbbEFGjinuVYw",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jan 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXhoAKXbiFc8T40",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "Interest Earnedon Jan 29, 2024collapsed",
              "Amount": 0.02,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recXj1GlbtCIN1N7Q",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "BUFFALO WILD WINGSon Feb 02, 2024collapsed",
              "Amount": -10.81,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXjaWVNFrJ9Xmwx",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-04",
              "Merchant Name": "SQ *COLLECTOR STORE LLCon May 04, 2024collapsed",
              "Amount": -37.77,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXkVY1iKjEteTjO",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "CONTINENTAL SERVICESon Feb 23, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXkeXANquYPIDji",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 10, 2024collapsed",
              "Amount": 0.51,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recXldD68ofZDxmPF",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-28",
              "Merchant Name": "BIGGBY COFFEEon Aug 28, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXn1aEk3qV4qbvG",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-30",
              "Merchant Name": "13 MILE AND MOon May 30, 2024collapsed",
              "Amount": -40.15,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recXnncsQaVwp0u0V",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "COSTCOon Mar 04, 2024collapsed",
              "Amount": -34.19,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXowPVoKtVPXwPj",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 17, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recXqqfC1mQg2C8QE",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 28, 2023collapsed",
              "Amount": -1.29,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXsHEHcGr13mWRE",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-09",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 09, 2023collapsed",
              "Amount": 0.05,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recXtm640vEyB5fFt",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 28, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXupQRrMSg3hwMV",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "NNT HARU FRESHon Aug 26, 2024collapsed",
              "Amount": -6.25,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recXvPpYaCU206TnA",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "BIGGBY COFFEEon Nov 15, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recXzUnalySWItOtC",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 21, 2024collapsed",
              "Amount": -1.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recY1DEtcXGjmaBwc",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-21",
              "Merchant Name": "MCDONALDSon Sep 21, 2024collapsed",
              "Amount": -4.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recY1O81WGGNAgDsy",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 21, 2024collapsed",
              "Amount": -0.99,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recY2GtWKcQ09V5DR",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "BIGGBY COFFEEon Jul 12, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recY38xoOwzNjW3V0",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-04",
              "Merchant Name": "PETS BEST INSURANCEon Nov 04, 2024collapsed",
              "Amount": -26.19,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recY8J6erdnzEEUYa",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 13, 2024collapsed",
              "Amount": 0.21,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recY8T6OBr2IJLijY",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "POKEMON INTERNATIon Sep 03, 2024collapsed",
              "Amount": -70,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recY8rx2FRONVzTSx",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "AVANTI MARKETSon Nov 28, 2023collapsed",
              "Amount": -2.39,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYA6OLNFmV15FQL",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "AVANTI MARKETSon Nov 15, 2023collapsed",
              "Amount": -2.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYBY8oj23m8aTmF",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-06",
              "Merchant Name": "KY-IN RIVERLINK Ton Nov 06, 2024collapsed",
              "Amount": -5.22,
              "Category": "Travel: Travel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYDwL2nlSIhG981",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "VENMOon Aug 05, 2024collapsed",
              "Amount": -32,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYH35WJdhv556E9",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "TIKTOK SHOPon Dec 19, 2023collapsed",
              "Amount": -24.37,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYHnIRCKlRk8NJe",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "SERRA BUICK-GMC ROCHESTEon Aug 01, 2024collapsed",
              "Amount": -74.26,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYIrOn4r8CcbvjH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 29, 2023collapsed",
              "Amount": 1.29,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recYMConnaKGaOJmJ",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-12",
              "Merchant Name": "NINTENDO CA129914on Nov 12, 2024collapsed",
              "Amount": -16.95,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYMSS010GfjQtDr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 06, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recYMtPchATI38UwP",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 27, 2023collapsed",
              "Amount": -21.83,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYN9JCdaZMr66IF",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 05, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recYNrf6OGgndwapJ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 19, 2023collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYQ9JSNxBrDWpFZ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "BIGGBY COFFEEon Mar 20, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYSKtUpRdCQLaKv",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "CONTINENTAL SERVICESon Dec 08, 2023collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYTCiePhmKtvfRo",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recYW1KpSWVNq5wEV",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "MEIJERon May 17, 2024collapsed",
              "Amount": -7.68,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recYWTht1qBbtJrdR",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYXUAKP35F1FhwI",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "PAYMENT - THANK YOUon May 10, 2024collapsed",
              "Amount": 466.26,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYXVhHbJZVCdSNo",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-02",
              "Merchant Name": "BIGGBY COFFEEon Dec 02, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYYTFSDFhwH3GYi",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Jul 03, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYcVVPFD7hnGj2G",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "BIGGBY COFFEEon Oct 16, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYi3pQd1WM6wezY",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-23",
              "Merchant Name": "CCBILL.COMon May 23, 2024collapsed",
              "Amount": -20,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYikmYFo78I2HNU",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "BIGGBY COFFEEon Dec 20, 2023collapsed",
              "Amount": -3.51,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYkn3nKIb9CVAPV",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 30, 2024collapsed",
              "Amount": -2.32,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYlZWG40XSBpJvK",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-09",
              "Merchant Name": "ETERNAL GAMESon Mar 09, 2024collapsed",
              "Amount": -15.87,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYoC5yXbz8v4BD8",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 08, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recYoE8n0d5Cdpxgt",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-13",
              "Merchant Name": "TACO BELLon Jan 13, 2024collapsed",
              "Amount": -16.7,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recYslBjUHP4ZavG3",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "KIT CHEN THAI BYon Sep 30, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recYtKL9WmPLWgbon",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "CULVERSon May 13, 2024collapsed",
              "Amount": -8.03,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recYz1Ackgqhhrj6q",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 12, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recYzOiNvYGGB4S8a",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "AMAZON MARKETPLACEon Oct 17, 2024collapsed",
              "Amount": -215.83,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZ0GxrxvXSfx2zT",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 20, 2023collapsed",
              "Amount": 2.35,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recZ1jxwOVttdt2Gf",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recZ1jxwOVttdt2Gf"
      },
      "headers": {
        "content-length": "3941",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recWTEVHxHOvbPIUc",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recZ1jxwOVttdt2Gf",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recZ1jxwOVttdt2Gf",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recZ1vCy8MGIn7V8b",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-16",
              "Merchant Name": "Big Boy Restaurant Groon Jan 16, 2024collapsed",
              "Amount": -33.64,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZ5yjyUxkA6ZSAW",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-05",
              "Merchant Name": "KIT CHEN THAI BYon Jun 05, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZ6itaIQFQJX1pb",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-18",
              "Merchant Name": "DTE ENERGYon Apr 18, 2024collapsed",
              "Amount": -69.28,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZ8cszBcPY2hXux",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 20, 2024collapsed",
              "Amount": -0.26,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZ8yPFAWH6nZFxr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-18",
              "Merchant Name": "NINTENDO CA127196on Sep 18, 2024collapsed",
              "Amount": -21.19,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZGGQzqZ1FhERZS",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Mar 18, 2024collapsed",
              "Amount": -1143,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZHXzWQqL14QNJ2",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recZJBwxfmZjLA8pj",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on May 03, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZLlOUjc0hSerbI",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 10, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZN3XZkXHH0fV8Y",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "BIGGBY COFFEEon Apr 26, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZO5r6uTNYvUNK5",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 05, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recZOK5FNJrWoZajz",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 06, 2024collapsed",
              "Amount": 0.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recZQ8vvKoReCSN15",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "ETSYon May 14, 2024collapsed",
              "Amount": 8.16,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZQNtJPv1NJCAl6",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jan 05, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZU1VOAI9kExamW",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "MCDONALDSon Oct 11, 2024collapsed",
              "Amount": -7.83,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZWMsnVl8ypkDxV",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "SQ *PURPLE PLUM INCon Nov 06, 2023collapsed",
              "Amount": -10.6,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZWdYikkzT9x2NB",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 29, 2023collapsed",
              "Amount": 0.11,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recZX2JWVraqZWCYR",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "DISCORDon Nov 10, 2023collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZZJdLbmHekAiZY",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "CHIPOTLEon Mar 26, 2024collapsed",
              "Amount": -22.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZZRWqdBMnfH8pY",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "BIGGBY COFFEEon Dec 19, 2023collapsed",
              "Amount": -3.51,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZZoaW9r6SwNCnw",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 22, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZaMt432VPlnH9i",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "ANIMAL EMERGENCY CENTER-Ron Jul 03, 2024collapsed",
              "Amount": -1543,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZaZzCgVg62WKSA",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "AVANTI MARKETSon May 09, 2024collapsed",
              "Amount": -5.58,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZatfeg7Pt3yovP",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 07, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZfijoKptDqOS59",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-12",
              "Merchant Name": "MUSESCORE PRO+ &on Dec 12, 2023collapsed",
              "Amount": -39.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZiMjq03e82uXsk",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "AVANTI MARKETSon Feb 23, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZjUhTwWIef3GSt",
            "createdTime": "2024-11-18T01:36:23.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 31, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recZqGy73AoK5c2Yi",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "BIGGBY COFFEEon May 03, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZr4WkIFW0nolQf",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "KIT CHEN THAI BY TOEYon May 13, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recZsu1m3ewpbo3Bq",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 19, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZu8J5KURrKh8Xj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 23, 2024collapsed",
              "Amount": -600,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recZuGdwChCzC1BDd",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 13, 2023collapsed",
              "Amount": -85.17,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recZv1WRthyEkBDYe",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 13, 2024collapsed",
              "Amount": 0.46,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recZvUSipb2FxXGvB",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Nov 21, 2023collapsed",
              "Amount": -46.82,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZvjqkrbcJcKs9V",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 29, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recZy2nGLYCQTklt3",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "EMAGINE ENTERTAINMENTon Oct 01, 2024collapsed",
              "Amount": -15.37,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reca2W3VCI0XujgeS",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 07, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reca3gacVsqjTh3X8",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "GRAND TAVERNon Oct 02, 2024collapsed",
              "Amount": -22.96,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reca8eUH35G686rMd",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 22, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reca9dtJMc5VBY2OF",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-16",
              "Merchant Name": "Monthly Maintenance Feeon Jul 16, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recaAcMzxUQdiL8HZ",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "Restauranton Sep 06, 2024collapsed",
              "Amount": -9.7,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recaAvflqYkaUml8c",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "MEIJERon Jan 18, 2024collapsed",
              "Amount": -4.49,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recaB8PUNj0hLxTxw",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-15",
              "Merchant Name": "BIGGBY COFFEEon Apr 15, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaETQBPQmzMCVDd",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "IKEAon Jun 14, 2024collapsed",
              "Amount": -13.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaGsIVf7IeShD92",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-13",
              "Merchant Name": "GRAND TAVERNon Nov 13, 2024collapsed",
              "Amount": -38.6,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recaIkhL6DxdmFFOL",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 10, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recaLSmTlNOePw4Ko",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "PETS BEST INSURANCEon Oct 03, 2024collapsed",
              "Amount": -26.19,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recaLpDmJCuh0wmex",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 22, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaNVIqRNx1DaDKR",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "BIGGBY COFFEEon Sep 13, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recaO7c2iCbeRyoDe",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 26, 2024collapsed",
              "Amount": 0.83,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaONbUO5z9OkrYy",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-15",
              "Merchant Name": "Monthly Maintenance Feeon May 15, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recaQ7VCWNhUJPIGm",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "SQ *BBQ DADDY - Fon Jun 14, 2024collapsed",
              "Amount": -15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaQX5tMkLND3n4t",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 30, 2024collapsed",
              "Amount": 2.89,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaR8hfVbNd7mArU",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "BIGGBY COFFEEon Apr 22, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaRnBAg68497HqC",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-18",
              "Merchant Name": "GRAND TAVERNon Apr 18, 2024collapsed",
              "Amount": -23.02,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaStbb5JwVpqLNP",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Aug 23, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recaUSchxLsgftI6R",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-15",
              "Merchant Name": "THE HOME DEPOTon Jul 15, 2024collapsed",
              "Amount": -12.64,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recaXX65KNxLhaH3t",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "THE HOME DEPOTon Jan 22, 2024collapsed",
              "Amount": -48.55,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaYNu9vvh6TdVoO",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "BANK OF AMERICAon Jun 21, 2024collapsed",
              "Amount": -2756.02,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recaYR0e16UiwLQzG",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recabDnDR8xE1CVIB",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "GRAND TAVERNon Dec 26, 2023collapsed",
              "Amount": -33.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recabEJ0XgkXrHO0n",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-28",
              "Merchant Name": "PAYMENT - THANK YOUon Mar 28, 2024collapsed",
              "Amount": 637.98,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recabiD0BQPMjQJn4",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-13",
              "Merchant Name": "TACO BELLon Jul 13, 2024collapsed",
              "Amount": -7.42,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recadDM1FTO6c1vls",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-08",
              "Merchant Name": "AVANTI MARKETSon Apr 08, 2024collapsed",
              "Amount": -7.37,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recagadk70S36uIDv",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 18, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recah6S9Wd5EjRzaq",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on May 31, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recakIalI8dz0qD3n",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recalMgdKjWR2DvBX",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 10, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recalzoQzAMLqrbjg",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "Monthly Maintenance Feeon Sep 26, 2024collapsed",
              "Amount": -5,
              "Category": "Finance: Service Charges/Fees",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaodnWVRjIiQ767",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "APPLEon Jan 18, 2024collapsed",
              "Amount": 0.93,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recaqCZBolbc3ppV3",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-14",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 14, 2024collapsed",
              "Amount": 1.46,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaqI8jB05r0bVSr",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 26, 2024collapsed",
              "Amount": 0.2,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recaqoWbu1UI6Mf9X",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "APPLEon Apr 17, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recarDZ6du046gJfL",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-14",
              "Merchant Name": "WL *STEAM PURCHASon Feb 14, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recari8MfkEiglJ7z",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "GM FINANCIALon Feb 27, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recasguXkBE0Hj1Hn",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 24, 2023collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recatMlBOXiLViUW7",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 27, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recau2LnlcjQXEUd0",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-21",
              "Merchant Name": "CCBILL.COMon Mar 21, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recavIHkRIJ40g2sB",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 05, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recazOz73jNgbFIYh",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "PAYPAL *CASPIANLOon Dec 26, 2023collapsed",
              "Amount": -4,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recb0Ko8Vpzb8IUPB",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "WL *STEAM PURCHASon Oct 28, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recb22KjRgwrgkh81",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "BIGGBY COFFEEon Nov 22, 2023collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recb2ATkIduCed94H",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 03, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recb2M5MyuWJeYiJD",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "MICRO CENTERon Jan 10, 2024collapsed",
              "Amount": -581.86,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recb7DTFYn0oC0P8X",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 05, 2024collapsed",
              "Amount": -0.85,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbD8AZZYwqJu3nD",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 04, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbDcGQzShjeoUCs",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "MCC RESORT INDY, LLCon May 06, 2024collapsed",
              "Amount": -25.46,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbElgJGw8MtNrD5",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-09",
              "Merchant Name": "BIGGBY COFFEEon Dec 09, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbG9kb3EYqDyItV",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-13",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Aug 13, 2024collapsed",
              "Amount": 90.65,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbHlfKUTH1GxDG5",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "MEIJERon Sep 23, 2024collapsed",
              "Amount": -25.46,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbIsCdgUZ1xy138",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-04",
              "Merchant Name": "TACO BELLon Sep 04, 2024collapsed",
              "Amount": -9.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbLgI6TKkvSJfm6",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 22, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recbQKiRihIIc4iRH",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "BIGGBY COFFEEon Jan 12, 2024collapsed",
              "Amount": -5.71,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbS4jruAmy6ZRSc",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "TACO BELLon Dec 26, 2023collapsed",
              "Amount": -20.93,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbUW6LJAQglIq7A",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-11",
              "Merchant Name": "AVANTI MARKETSon Jul 11, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbYPkvGsFaitBCA",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "JIMMY JOHNSon Feb 20, 2024collapsed",
              "Amount": -8.89,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbZ6XOmvdu7urUX",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "Monthly Maintenance Feeon Jul 12, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recbZf1aLoXF4u8Ji",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "BIGGBY COFFEEon Apr 29, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recbe8CXcur4mT88m",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 29, 2024collapsed",
              "Amount": 2.63,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recbfHJkkrcS6Omrd",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 18, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recbfHJkkrcS6Omrd"
      },
      "headers": {
        "content-length": "3839",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recZ1jxwOVttdt2Gf",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recbfHJkkrcS6Omrd",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recbfHJkkrcS6Omrd",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recbkWxljrEaFZtNp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "CCBILL.COMon Dec 11, 2023collapsed",
              "Amount": -3,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbkoeZ7HAy5bouD",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 07, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recblM73fJov50NUG",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-18",
              "Merchant Name": "DTE ENERGYon Sep 18, 2024collapsed",
              "Amount": -140.74,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbqOyaTEwrj9ID2",
            "createdTime": "2024-11-18T01:33:51.000Z",
            "fields": {
              "Date": "2024-11-16",
              "Merchant Name": "SAGANO BISTRO IIIon Nov 16, 2024collapsed",
              "Amount": -95.24,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbrFE8BBgybSgfO",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-08",
              "Merchant Name": "ETSYon Oct 08, 2024collapsed",
              "Amount": 5.08,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbtuYdYSI4qElKn",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-09",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 09, 2024collapsed",
              "Amount": 0.27,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recbv6Hb51SdGMYOA",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Apr 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbvZbzfHqk579JG",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "MEIJER EXPRESSon Oct 28, 2024collapsed",
              "Amount": -41.27,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbwvVltIFFdhuOI",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "SQ *FULL GRIP GAMES.COMon Oct 12, 2024collapsed",
              "Amount": -55,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recbx2GzYZwiQUR7B",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "BUFFALO WILD WINGSon Mar 04, 2024collapsed",
              "Amount": -24.68,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbx3R3OziUoLVZF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 11, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recby7uiWkipqfo9Z",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 17, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recbyYwmJEbk3Gqjn",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recbyew5fu1qKrS6N",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "UNIVERSALMGT0793on Nov 24, 2023collapsed",
              "Amount": 1621.14,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recbzgHVdupok46sR",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "NNT ETERNAL GAon Apr 22, 2024collapsed",
              "Amount": -9.52,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recc0moRzBcNFKPrl",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "TACO BELLon Apr 29, 2024collapsed",
              "Amount": -4.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recc3MaTpAQPnux5P",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "PAYMENT - THANK YOUon Jun 21, 2024collapsed",
              "Amount": 2756.02,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recc9Fx6S9bDlmd32",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-30",
              "Merchant Name": "BIGGBY COFFEEon Jan 30, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccAGVU6LAggG17U",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 06, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccALFZp0elQYWOr",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "SQ *NO LIMIT GAMIon May 06, 2024collapsed",
              "Amount": -52.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccBn60AfeolAgjN",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 10, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccBnTXVOvLOEI8o",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "MEIJERon May 14, 2024collapsed",
              "Amount": -48.3,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccBoj1F4K44R5hV",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Mar 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccCVvAHpcf9c5an",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reccDrExOxJ0wjq7Q",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "THE HOME DEPOTon Nov 27, 2023collapsed",
              "Amount": 2.81,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccFmWF8WQuBn1wQ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 04, 2023collapsed",
              "Amount": -0.24,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccHvVVBzJhvRyLg",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "KIT CHEN THAI BYon Apr 17, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccIe2IqD16ZAaBv",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-24",
              "Merchant Name": "BIGGBY COFFEEon Jan 24, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reccQkHAaUtwjZWiZ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Mar 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccRgsv0OfwwAJLv",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Apr 05, 2024collapsed",
              "Amount": -22.05,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccSKnX6t4pFUwdz",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "ETSYon Jan 02, 2024collapsed",
              "Amount": -0.4,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccZUdbnfaXzbxFt",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-26",
              "Merchant Name": "CONSUMERS ENERGYon Jun 26, 2024collapsed",
              "Amount": -29.62,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccet5C93WO1ruQ1",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "AMAZON MARKETPLACEon Jul 03, 2024collapsed",
              "Amount": -36,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccjQqaM2l6vSvgQ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "UPSon Dec 11, 2023collapsed",
              "Amount": -3.7,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccm0CjrIzQB8Bsz",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 19, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccmr0MWNhCfO6fR",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "UNIVERSALMGT0793on May 03, 2024collapsed",
              "Amount": 1367.3,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccprmRZyTGmFq1m",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jun 21, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccq07n2QribNusg",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-14",
              "Merchant Name": "GRAND TAVERNon Dec 14, 2023collapsed",
              "Amount": -45.22,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccsXLChydMgkpz9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-08",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 08, 2024collapsed",
              "Amount": 3.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reccv7x6mm4Qqy5lL",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-20",
              "Merchant Name": "SQ *HEY HONEYon Jul 20, 2024collapsed",
              "Amount": -15.63,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reccwmusckoCr1QZL",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reccxkY6FKaN64Bah",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Mar 18, 2024collapsed",
              "Amount": 1143,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recd0Va4pD72vVz1T",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 30, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recd1AvJkHGVxTlXC",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 3102on Apr 09, 2024collapsed",
              "Amount": 300,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recd2FRQGCpj6XnCr",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-13",
              "Merchant Name": "BIGGBY COFFEEon Dec 13, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recd4P2ojE32O9xmg",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 09, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recdBmuESyObLwRkU",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "AMAZONon Nov 24, 2023collapsed",
              "Amount": -127.19,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdE2aFCjArnWk6B",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "CONSUMERS ENERGYon May 28, 2024collapsed",
              "Amount": -50.3,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdEzpLDMzaNaxMp",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "TOP CUT COMICS LPon Sep 14, 2024collapsed",
              "Amount": -23.32,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdF7ORkJRPkh3xV",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-04",
              "Merchant Name": "SQ *DAY 2 EVENTSon May 04, 2024collapsed",
              "Amount": -24,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdFTUMdgZH71IaP",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "USCONNECTon Aug 01, 2024collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdHlThqsvaxqnhV",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-24",
              "Merchant Name": "BIGGBY COFFEEon Jul 24, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recdJ5DN9Fn2b0QIa",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-19",
              "Merchant Name": "AVANTI MARKETSon Feb 19, 2024collapsed",
              "Amount": -5.77,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdLZMXPBU2QaWBj",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-10",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Aug 10, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdO2yKLMR5Flss8",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "MCDONALDSon Oct 12, 2024collapsed",
              "Amount": -10.69,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdO9IYIvT9jQoHu",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 12, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdQYu4XzR58ffeI",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 24, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdSf436geDd2CoC",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "UTILITY STORE BILon Nov 29, 2023collapsed",
              "Amount": -5.4,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdShA3Yvqr3c7qD",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "UNIVERSALMGT0793on Feb 23, 2024collapsed",
              "Amount": 1620.26,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdSvJ3VQ6iXfn2z",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-04",
              "Merchant Name": "RITE AIDon Jan 04, 2024collapsed",
              "Amount": -114.55,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdaN9zQjjLi8zBA",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "Online payment from CHK 7on Apr 11, 2024collapsed",
              "Amount": 569.16,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdd66K4TobHvZcY",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "STEAMGAMES.COM 42on Nov 10, 2023collapsed",
              "Amount": -13.16,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdhihhJb7Ic8XRx",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 01, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recdiud7gPZ7FuPCa",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-30",
              "Merchant Name": "WL *STEAM PURCHASon Oct 30, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdl4vD9g94xtwI3",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 20, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdlkPjwHwCvNpdD",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recdluUVFtQDX844Y",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "GM FINANCIALon Nov 27, 2023collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdrNTRCMfmnWKe6",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "Online payment from CHK 3on Oct 18, 2024collapsed",
              "Amount": 112.8,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdscIgKg7xPAwyc",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "LITTLE JOE'S CONEY ISLon Mar 01, 2024collapsed",
              "Amount": -12.96,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recdt1OM6EUPTL1Sn",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "UNIVERSALMGT0793on Jun 07, 2024collapsed",
              "Amount": 1367.3,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdtOj39XQOXKIGE",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Sep 13, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdtjqAWGylLzWZg",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 11, 2024collapsed",
              "Amount": 0.54,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recdwU03RRv3cN3tl",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "AMAZON MARKETPLACEon Apr 10, 2024collapsed",
              "Amount": -18,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdxIaEPiB2vdz7Q",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 13, 2023collapsed",
              "Amount": -0.83,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdy7NyDtw7AiE6B",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Jul 23, 2024collapsed",
              "Amount": 1600,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recdzsR9LRCcfQ6dl",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 11, 2024collapsed",
              "Amount": -1.48,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rece1Q1wnsCqEIOGT",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rece4k2M7hqjeWJN6",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 11, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rece4kT6yydPtIAzF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-23",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 23, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rece6GhPI5pLNdRz7",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Dec 01, 2023collapsed",
              "Amount": -47,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rece7Eg5KXnMh93wu",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "ETERNAL GAMESon Oct 16, 2024collapsed",
              "Amount": -14.28,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rece7cZNdyPdGWnxn",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "00000000023595 WITHDRWL MI Ren Fes Fr MIon Sep 03, 2024collapsed",
              "Amount": -103.75,
              "Category": "Cash, Checks & Misc: ATM/Cash Withdrawals",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rece9bPILk5CIIQab",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "POKEMON INTERNATIon Oct 17, 2024collapsed",
              "Amount": -70,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "receEkF0eZFvIcH9y",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "AMAZON MARKETPLACEon Oct 24, 2024collapsed",
              "Amount": -25.43,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "receKLJyCYHuXdSNG",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-13",
              "Merchant Name": "SCHOTTS MARKETon Feb 13, 2024collapsed",
              "Amount": -16.85,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "receLidl8fiJEeIUi",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "receOcMS7gKV5nZCT",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "receRJpHVpP8T2Ojr",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-25",
              "Merchant Name": "TARGETon Jun 25, 2024collapsed",
              "Amount": -75.19,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "receRpVsizYPC0jMz",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-28",
              "Merchant Name": "Monthly Maintenance Feeon Aug 28, 2024collapsed",
              "Amount": -5,
              "Category": "Finance: Service Charges/Fees",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "receUpM2QEJfQp5jZ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-04",
              "Merchant Name": "BUFFALO WILD WINGSon Nov 04, 2023collapsed",
              "Amount": -38.75,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "receWb74MeQ9VDrVu",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "TIKTOK SHOPon Jan 25, 2024collapsed",
              "Amount": -105.99,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "receZTmyD7I0lLpoZ",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "CHIPOTLEon Jun 28, 2024collapsed",
              "Amount": -30,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recebdqzOMDOK3sJy",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "GRAND TAVERNon Apr 10, 2024collapsed",
              "Amount": -16.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recegps5glKySAojI",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-26",
              "Merchant Name": "VENMOon Feb 26, 2024collapsed",
              "Amount": -50,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recehUrZcsR2Hcs0j",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Dec 01, 2023collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recehWBuXhNySmX5m",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-28",
              "Merchant Name": "AMAZON MARKETPLACEon Dec 28, 2023collapsed",
              "Amount": -15.89,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recekwq6xUrqPVHqd",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-18",
              "Merchant Name": "CVS PHARMACYon Jul 18, 2024collapsed",
              "Amount": -29.53,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recelA3Nfk3akDofI",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-18",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 18, 2024collapsed",
              "Amount": -0.82,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recem4A6gnUjJbUET",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "04412 THE EDGE FITNESS MIon Oct 17, 2024collapsed",
              "Amount": -8.47,
              "Category": "Health: Fitness or Health club membership",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recemEiZXEz7e7ZP2",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Sep 20, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recemEiZXEz7e7ZP2"
      },
      "headers": {
        "content-length": "4069",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recbfHJkkrcS6Omrd",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recemEiZXEz7e7ZP2",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recemEiZXEz7e7ZP2",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "receogi8a1xjVj4WX",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "DUNKIN DONUTSon Oct 28, 2024collapsed",
              "Amount": -5.5,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "receqE9M5b5CzUtda",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 14, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "receqhS2mbrmlkQfv",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "VENMOon Nov 06, 2023collapsed",
              "Amount": 350,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "receqhtLHI9BAgNDy",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 23, 2024collapsed",
              "Amount": -0.83,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recesADqMCdR8C2Hu",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "SP HORNANDRHODEon Jan 22, 2024collapsed",
              "Amount": -18,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recesYiQJgyqhe1uk",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-09",
              "Merchant Name": "BIGGBY COFFEEon Oct 09, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "receuenEq9UILgY4e",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "PP*KAWAII CATCHERSon Nov 06, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recevF3Uj8jMcbyRu",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Apr 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recevguN3Ezy7y69L",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "BIGGBY COFFEEon Jul 29, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recewQoN01Im5w6Gw",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Mar 25, 2024collapsed",
              "Amount": 10,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf0ITxIu42nABea",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "Checkon Jul 05, 2024collapsed",
              "Amount": -1147.72,
              "Category": "Cash, Checks & Misc: Checks",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf3APOsY5IubU1x",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "GRAND TAVERNon Mar 20, 2024collapsed",
              "Amount": -18.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recf3YJBUS1ljrNGT",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "DISCORDon May 10, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf5leN2AJktSYLx",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-08",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 08, 2024collapsed",
              "Amount": -0.27,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf7LRkcrrUH6p4L",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "UNIVERSAL MANAGEon Aug 30, 2024collapsed",
              "Amount": 1357.99,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf8OoDEOqkVwNOz",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-26",
              "Merchant Name": "AMAZON MARKETPLACEon Jun 26, 2024collapsed",
              "Amount": -42.35,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf8ubJBT55Z3epC",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "CITY OF FRASER UTon Feb 20, 2024collapsed",
              "Amount": -77.96,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recf90UPQUsp7czgB",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-19",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Feb 19, 2024collapsed",
              "Amount": -6.36,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recf9u6ybl9mn6Q7L",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Mar 25, 2024collapsed",
              "Amount": -9.96,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfA4eRL8jr6jUKf",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-12",
              "Merchant Name": "DISCORDon Nov 12, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfAWg61j9eNL50D",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 02, 2024collapsed",
              "Amount": -0.6,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfCgHwTOLFbnS4v",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 02, 2024collapsed",
              "Amount": -0.05,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfCz0vBqQSSmXmz",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 17, 2024collapsed",
              "Amount": -0.52,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfDogMt029Gi4sw",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 17, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfEFDjjmWnK4D4n",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "Monthly Maintenance Feeon Jul 29, 2024collapsed",
              "Amount": -5,
              "Category": "Finance: Service Charges/Fees",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recfF42oCNP5DqpM1",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-09",
              "Merchant Name": "GRAND TAVERNon Oct 09, 2024collapsed",
              "Amount": -28.26,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfFk34Opns7VncW",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-12",
              "Merchant Name": "BIGGBY COFFEEon Jun 12, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recfHrRz4gN0uiz95",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "LITTLE CAESARS PIZZAon May 29, 2024collapsed",
              "Amount": -4.23,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recfItt0pGTMXNq06",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfKFcKTuslaFNNo",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-30",
              "Merchant Name": "ETSYon Apr 30, 2024collapsed",
              "Amount": 8.17,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfLxWAGSgp8dcyk",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 15, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfMMCgMbGhRVVHj",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 24, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recfPmnYHAMwDAggr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Sep 06, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfQ5tzcneyS8GIu",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 10, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recfR01VdguHFf9zo",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-18",
              "Merchant Name": "APPLEon Sep 18, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfU8S8LijaO8D61",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-19",
              "Merchant Name": "APPLEon Aug 19, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfVLxeo15Qsdj99",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-02",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 02, 2023collapsed",
              "Amount": 2.12,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recfajlVMU1DnyVRK",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 01, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recfazkhPx1zzRGMY",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "RITE AIDon Apr 05, 2024collapsed",
              "Amount": -87.06,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfdbxKaEFR3KlIU",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 19, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recfdhpSjNabDe0Fv",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "Online payment from CHK 7on Nov 24, 2023collapsed",
              "Amount": 1207.32,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfeFg65twRe1Sdi",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 24, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recfgSJpEugUjCdtn",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "BIGGBY COFFEEon Dec 06, 2023collapsed",
              "Amount": -4.73,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfgeZMeonU1agmp",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jun 07, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfgwjNK8pKFFbvX",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon May 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfh7uFXyRNyRSgS",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 02, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recfnscik5rQUNMzq",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfpLEwTU8O1IFvG",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 16, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfpZvq4iBSAf5tO",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 18, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recfr4PTwMkrLLI9I",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 30, 2024collapsed",
              "Amount": 1.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recfuI9MAmKTOC5dS",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-09",
              "Merchant Name": "BPon Jan 09, 2024collapsed",
              "Amount": -38.83,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfxluntj99bTRB7",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-21",
              "Merchant Name": "FREDAL FAMILY DENon Aug 21, 2024collapsed",
              "Amount": -87.28,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recfz5oGISBnx5Bwj",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-01",
              "Merchant Name": "MEIJERon Jul 01, 2024collapsed",
              "Amount": -25.7,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recfzPDqltBntY7Kp",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 05, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recg0xoN2fjIK3sxG",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-27",
              "Merchant Name": "UNIVERSAL MANAGEon Sep 27, 2024collapsed",
              "Amount": 1357.97,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recg3RIRPsKnwnS5m",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "MARATHONon Sep 10, 2024collapsed",
              "Amount": -42.52,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recg3ewCvA6iBagIN",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-19",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 19, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recg4bL73CfUwG5vC",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 7139on Jun 21, 2024collapsed",
              "Amount": -2200,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recg6K1XrXcRzbMBf",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-07",
              "Merchant Name": "BIGGBY COFFEEon Aug 07, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recg7f153lo0GvedK",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 29, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recg90rM9fRRh4FMg",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "Interest Earnedon Jan 12, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recgAJ3fD7SgoHoSb",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "PETS BEST INSURANCEon Sep 23, 2024collapsed",
              "Amount": 24.92,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgAtDkbVeAz9jfj",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-22",
              "Merchant Name": "GRAND TAVERNon May 22, 2024collapsed",
              "Amount": -24.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recgBSjWfD0zybg4m",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "BIGGBY COFFEEon Jul 26, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgBoiUKh8jImhxM",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-29",
              "Merchant Name": "AMAZON MARKETPLACEon Oct 29, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgCGDpuK9y6avBj",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-20",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 20, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgCUSFreITvFN4T",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "NOBLE FISHon Sep 03, 2024collapsed",
              "Amount": -5.38,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgChTyZEyeJy8w3",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "PETS BEST INSURANCEon Apr 29, 2024collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgCjvNeqaRnEqWP",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-31",
              "Merchant Name": "ANIMAL EMERGENCY CENTER-Ron Jul 31, 2024collapsed",
              "Amount": -369,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgFnHgGdUnYX9bu",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 18, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recgGGZJQEjoP7R82",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Jan 17, 2024collapsed",
              "Amount": -2591.36,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recgGyGPhmppywmSB",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 09, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgIztIUmVLPI06j",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "VENMOon May 06, 2024collapsed",
              "Amount": -220,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgJ3UKCLG75Ds7p",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "TIKTOK SHOPon Dec 19, 2023collapsed",
              "Amount": -94.27,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgJGKjNuBdyW2no",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Oct 11, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgM99HQ1UAancKq",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "BIGGBY COFFEEon May 10, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgMalp0yLVIp0Wi",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "UNIVERSALMGT0793on Dec 22, 2023collapsed",
              "Amount": 1621.14,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgNtxAEDl893wpI",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-13",
              "Merchant Name": "MEIJER EXPRESS 145on Jul 13, 2024collapsed",
              "Amount": -9.77,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgORf6uvdmEm62u",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Apr 19, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgQc9Jyy6QpQMA6",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "PP*DUSTINon Oct 12, 2024collapsed",
              "Amount": -7,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgSWdZyPYVC5W9w",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-24",
              "Merchant Name": "AVANTI MARKETSon Sep 24, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgVyL3gIZl08a50",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 06, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgWhXHrHAGt7wzv",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "CIRCLE Kon Oct 11, 2024collapsed",
              "Amount": -37.3,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgYKNIPxUJnWJbs",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "UNIVERSALMGT0793on May 17, 2024collapsed",
              "Amount": 1367.3,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgYexxLorQRqQn1",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "AVANTI MARKETSon Jun 21, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgZeNXvUx8yCwGP",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-03",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 03, 2024collapsed",
              "Amount": -1.83,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgfxczH1Vyp0KyD",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "DTE ENERGYon Mar 20, 2024collapsed",
              "Amount": -73.98,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recggZIPzyPuw9qbg",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "BIGGBY COFFEEon Nov 10, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recggpTYGl2u3jvZK",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "AVANTI MARKETSon Sep 26, 2024collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recghYm95B4sEJ5Zd",
            "createdTime": "2024-11-18T01:37:15.000Z",
            "fields": {
              "Date": "2024-02-29",
              "Merchant Name": "BIGGBY COFFEEon Feb 29, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgi6P9LLNwFVf3U",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "MR COOPERon Jun 03, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recglovGYe528Mw5A",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "PP*FREE PLAY PINBon Oct 01, 2024collapsed",
              "Amount": -20,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgmDfZI3DiHBffV",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Jul 23, 2024collapsed",
              "Amount": 600,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgnDjJCFcPAhDfB",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 18, 2024collapsed",
              "Amount": -0.64,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgpXbXR5gq4JKkq",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-10",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 10, 2024collapsed",
              "Amount": -0.41,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgqOiBEypzj91ha",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 24, 2024collapsed",
              "Amount": 0.88,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recgtjqYrx0vDXlTw",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "DISCORDon Dec 11, 2023collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgu4l5oXbKXYatm",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 3102on May 20, 2024collapsed",
              "Amount": 180,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recgvdTtwt74YE6Y4",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-09",
              "Merchant Name": "BIGGBY COFFEEon Apr 09, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgvkBO7aRzoYQgJ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Jul 23, 2024collapsed",
              "Amount": -600,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recgvkBO7aRzoYQgJ"
      },
      "headers": {
        "content-length": "3912",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recemEiZXEz7e7ZP2",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recgvkBO7aRzoYQgJ",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recgvkBO7aRzoYQgJ",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recgxPjaUr0RK9Ibt",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Mar 01, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recgxYwVw8UBzUgYo",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-02",
              "Merchant Name": "CONTINENTAL SERVICESon Mar 02, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recgxZ79mpX3wKcBl",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Aug 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rech0US2NSdAOKM2l",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "SQ *GET ROASTED CORNon Aug 05, 2024collapsed",
              "Amount": -5.3,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rech0YAnf3NQcyZzt",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Oct 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rech0yPzHW5UN1ucC",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-11",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Nov 11, 2024collapsed",
              "Amount": -26.92,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rech18Y38ymdHrzmk",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-05",
              "Merchant Name": "BIGGBY COFFEEon Nov 05, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rech1IYprtQHGOFsn",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 22, 2024collapsed",
              "Amount": 0.4,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rech1fPvBSLPioPPM",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "Big Boy Restaurant Groon Dec 04, 2023collapsed",
              "Amount": -34.64,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rech5yvra6ZsGZ1Bd",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-10",
              "Merchant Name": "GRAND TAVERNon Jul 10, 2024collapsed",
              "Amount": -25.14,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rech9vFLe4Ls90Prt",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-23",
              "Merchant Name": "TACO BELLon Dec 23, 2023collapsed",
              "Amount": -10,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechBHmGAQgHLFY00",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 18, 2024collapsed",
              "Amount": -0.62,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechCbe5RvT2lujik",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Feb 09, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechDedYUa1SSTjRl",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Mar 06, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechKuJojCZ1eUdl9",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "TST* MARKET HOUSE - ANNAPon Sep 16, 2024collapsed",
              "Amount": -12.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechLvEGDbLOA4lza",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-13",
              "Merchant Name": "CVS PHARMACYon Jul 13, 2024collapsed",
              "Amount": -47.26,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechNI1RJ53a98Bng",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 07, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechQwMb9c7EJI0jA",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 17, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rechRFUe8hzgzKLkp",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 29, 2023collapsed",
              "Amount": -0.99,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechTLTsYt63PZTPW",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-09",
              "Merchant Name": "LITTLE JOE'S CONEY ISLon Jan 09, 2024collapsed",
              "Amount": -19.94,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechTOxGNX22saI8q",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "CONSUMERS ENERGYon Mar 27, 2024collapsed",
              "Amount": -83.95,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechWNb4sRbPpeg9F",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rechXsGgXFy3gmvJp",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jul 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechZDfCNrnM5nDj7",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-05",
              "Merchant Name": "BIGGBY COFFEEon Sep 05, 2024collapsed",
              "Amount": -3.33,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechcEFxmbMoFXbFf",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Apr 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recheaH1wVrw5VaVA",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 07, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rechkM1diMlS8XsGX",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "STEAMGAMES.COM 42on May 21, 2024collapsed",
              "Amount": -24.3,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechmvmMPMUC4vXrB",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "BEST LOCKERSon Jun 03, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rechoITtHdFGJV1m1",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 17, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rechq278QSenI7I8Q",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-24",
              "Merchant Name": "JETS PIZZAon Feb 24, 2024collapsed",
              "Amount": -1.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rechu6dTL2pGCMhr4",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-25",
              "Merchant Name": "WL *STEAM PURCHASon Apr 25, 2024collapsed",
              "Amount": -7.42,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechwCMNrxZgaunEL",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "MATTERHACKERS, INon Dec 11, 2023collapsed",
              "Amount": -43.09,
              "Category": "Business Expenses: Office Supplies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rechyQW1VNitxxOJG",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *NOSTALGIACONVon Jun 03, 2024collapsed",
              "Amount": -80,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rechzS5Icijdu5uOo",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-20",
              "Merchant Name": "CONTINENTAL SERVICESon Jun 20, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rechzjSxp75cimVXm",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 07, 2024collapsed",
              "Amount": -3.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reci2frDDYXgNHlrq",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reci3Bs13nNaSkE4f",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "WAYFAIRon Mar 26, 2024collapsed",
              "Amount": -943.39,
              "Category": "Home & Utilities: Home Improvement",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reci4JvJU20inASTl",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "DESHI KITCHEN INDon Sep 30, 2024collapsed",
              "Amount": -31.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reci7Ypi4xFm32vO3",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 29, 2024collapsed",
              "Amount": -0.21,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciAbOLGehnRmBvL",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 22, 2024collapsed",
              "Amount": 0.99,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reciD4PWcFeTaDJu7",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *STUDIOKITSU.Non Jun 03, 2024collapsed",
              "Amount": -25,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reciF8SfH8DPqscvD",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "AUTOZONEon Jan 08, 2024collapsed",
              "Amount": -14.83,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reciFOQ7iqy610tuU",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "Interest Earnedon Dec 27, 2023collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reciFiFJ6CZezeZ7u",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Mar 22, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciGKow8WAMHrFuy",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-16",
              "Merchant Name": "BIGGBY COFFEEon May 16, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reciHV2rQkjUpabhK",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-03",
              "Merchant Name": "ROYAL BENGALon Feb 03, 2024collapsed",
              "Amount": -14.83,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reciHrq3NjjFdW7DT",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 20, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "reciIDCHzmjNsWdvE",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "SQ *NO LIMIT GAMIon May 06, 2024collapsed",
              "Amount": 21.49,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reciJIPewjhT9jQkU",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "DISCORDon Apr 10, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciJvbAK3awGOPdc",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 22, 2024collapsed",
              "Amount": -2.26,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciKTIkKfoIBHk1g",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "UNIVERSALMGT0793on Jan 05, 2024collapsed",
              "Amount": 1621.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciKt0DXpdnUqx7x",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 10, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciN6gRaSC2ius8F",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *THE SIDE DECKon Sep 14, 2024collapsed",
              "Amount": -13,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reciRroYqE6I0uBy9",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "CONSUMERS ENERGYon Aug 26, 2024collapsed",
              "Amount": -26.1,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciTXKOtx1PvwH8E",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 24, 2023collapsed",
              "Amount": -23.31,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciTr8mJhYVoJJtg",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-27",
              "Merchant Name": "MICRO CENTERon Nov 27, 2023collapsed",
              "Amount": -137.67,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reciVHnBBkHwTWVDi",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-14",
              "Merchant Name": "BIGGBY COFFEEon Nov 14, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reciVlK9kndh43Zlb",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 24, 2023collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reciWhofEwLy4q1YZ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 10, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciZ5m9MZIwwzHT5",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 16, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recic5vFbJeB0vxCc",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-31",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 31, 2024collapsed",
              "Amount": 0.68,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recigvnZiNkCGBh06",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-02",
              "Merchant Name": "VENMOon Oct 02, 2024collapsed",
              "Amount": -200,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recih0aE3JJYqT2uD",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI RESORTSon Jun 03, 2024collapsed",
              "Amount": -26.68,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recikBAiqoKoH57FC",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Dec 29, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recinzctSoZ12UYXx",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 03, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recio635a4VyjAWfm",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "AVANTI MARKETSon Jul 19, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recioRbPh8OepCwBW",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "ALLIANZ INSURANCEon Aug 22, 2024collapsed",
              "Amount": -54,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recirBEyoQZdYmekE",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 11, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recivsRTx8mCZC862",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 25, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reciwXZAwam0YaCvs",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-16",
              "Merchant Name": "TST* THE BRUNCH BARon Jul 16, 2024collapsed",
              "Amount": -24.8,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recizijmregS4UwYQ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ETERNAL GAMESon Oct 18, 2024collapsed",
              "Amount": -9.52,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recj0XBhxvoirQ7is",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-21",
              "Merchant Name": "JIMMY JOHNSon Dec 21, 2023collapsed",
              "Amount": -9.95,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recj5gK3vlS9rVvLi",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "HOLLYWOOD SUPER MARKETSon Nov 21, 2023collapsed",
              "Amount": -18.77,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recj7evqNUZttKtSp",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "FI *RESTAURANTon May 24, 2024collapsed",
              "Amount": -14.45,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recj8k2hGTmtERykr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 25, 2024collapsed",
              "Amount": -2.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjAPX3ELnYVCHKK",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjBI8KvyJdyS3Pn",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "BIGGBY COFFEEon Mar 22, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recjE4FDgTAJ7XgeK",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjGDOMUHN7hK7YU",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "Interest Earnedon May 29, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recjHRCyBuJHiTEje",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Nov 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjIw8B6bvM6s5C3",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "WL *STEAM PURCHASon Apr 10, 2024collapsed",
              "Amount": -8.47,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjJROcGIbJQtazG",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "Pet Supplies Plus 0043on Dec 29, 2023collapsed",
              "Amount": -58.28,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recjJrjhgGw6Te6zX",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-16",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 16, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjJwihcGBhrNOul",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "CONSUMERS ENERGYon Nov 28, 2023collapsed",
              "Amount": -53.15,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjLUhuLRexvj5MQ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 05, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjPJGrWcSpkMrkg",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-26",
              "Merchant Name": "NINTENDO CA111554on Dec 26, 2023collapsed",
              "Amount": -63.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjSgJx54YWuU76M",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-16",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Apr 16, 2024collapsed",
              "Amount": 94.4,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjTPyeP419OVdM2",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjWxxbCwSMl3lO1",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjZSUA6cbuPuf7r",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 31, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjcM1hxWtKE9xJf",
            "createdTime": "2024-11-18T01:34:45.000Z",
            "fields": {
              "Date": "2024-10-31",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Oct 31, 2024collapsed",
              "Amount": -600,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recje0Tv5YwvIhU5c",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Aug 30, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjhlZCULr7iKjtW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "VENMOon Nov 15, 2023collapsed",
              "Amount": -13,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjhyVTAXtcu68Pd",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjjUR0a8QMRGHTe",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "JIMMY JOHNSon Jan 25, 2024collapsed",
              "Amount": -10.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjk1rkVV7ni0PIp",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jul 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjkE9qMuuqxCq9t",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "DISCORDon Mar 11, 2024collapsed",
              "Amount": -9.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjkoegBZNV18xvV",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "AVANTI MARKETSon Aug 30, 2024collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjl4pInbHaxA3Dc",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-06",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Sep 06, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recjmUPcfLhtWrpkn",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 15, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recjmUPcfLhtWrpkn"
      },
      "headers": {
        "content-length": "3973",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recgvkBO7aRzoYQgJ",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recjmUPcfLhtWrpkn",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recjmUPcfLhtWrpkn",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recjmxXpcglpG6lOk",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "LS FRASER BICYCLEon May 21, 2024collapsed",
              "Amount": -16.8,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjnvGDlfZGeVHU6",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 09, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjokiUn4k0q3pb3",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 12, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjphekLWHHwbHR1",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 16, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recjr6Mem9Ls7uLyM",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 24, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recjunwrXpBAx49QQ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recjyqt6rsHkrDBkE",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "WARREN FAMILY CONEY ISon Aug 16, 2024collapsed",
              "Amount": -13.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recjzAqbN68iUCpc1",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-03",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 03, 2024collapsed",
              "Amount": 0.08,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reck34UW0mOmP5WKr",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SP SANSHEE LLCon Jun 03, 2024collapsed",
              "Amount": -27.74,
              "Category": "Shopping & Entertainment: Clothing/Shoes",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reck3I1FOQn91cQ0V",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "RITE AIDon Nov 28, 2023collapsed",
              "Amount": -42.95,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reck3JKnidQwmaXti",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 01, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reck4tweCrdrM1uZB",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 29, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reck6YYo3I6NyB41u",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 04, 2024collapsed",
              "Amount": -0.32,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckH9wbiq2a5jUHp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 05, 2023collapsed",
              "Amount": 0.24,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reckM0mzIBscWz5pY",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-04",
              "Merchant Name": "BIGGBY COFFEEon Jan 04, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckNXoEjy38hFrVj",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 12, 2023collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckR2BZLO3EodLpO",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-26",
              "Merchant Name": "Interest Earnedon Jun 26, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reckUYWT8EZ1T9f9F",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "PEPSI-COLAon Oct 14, 2024collapsed",
              "Amount": -6.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckUyW1ujQVjpPw1",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Oct 17, 2024collapsed",
              "Amount": -458.27,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckVXXXeYHFSW3Ed",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 13, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reckWkz6U7ANTuZoc",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "STEAMGAMES.COM 42on Jun 21, 2024collapsed",
              "Amount": -29.2,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckWpmuDQF1LYO6J",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "CCBILL.COMon Jan 22, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckZ3x00cYgdY9b4",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "GRAND TAVERNon Mar 13, 2024collapsed",
              "Amount": -16.98,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckcgUmo2HDwQ7EH",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-27",
              "Merchant Name": "BIGGBY COFFEEon Aug 27, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckcoyc4l5Yku8CU",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 13, 2024collapsed",
              "Amount": 0.64,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reckebl8CMdBjGMhT",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-15",
              "Merchant Name": "BIGGBY COFFEEon Aug 15, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckesbSzv5Yxt56d",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jul 26, 2024collapsed",
              "Amount": 1.25,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reckfEvkk0Oyy078u",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-01",
              "Merchant Name": "BIGGBY COFFEEon May 01, 2024collapsed",
              "Amount": -1.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reckfNkYgnn4kyZbZ",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-05",
              "Merchant Name": "ETSYon Nov 05, 2024collapsed",
              "Amount": 8.15,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckfsJ1gQ5I2RdFJ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 23, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reckiY5iY6WCtsj02",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 07, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reckjtVUGZG2VWOAA",
            "createdTime": "2024-11-18T01:36:57.000Z",
            "fields": {
              "Date": "2024-03-30",
              "Merchant Name": "AVANTI MARKETSon Mar 30, 2024collapsed",
              "Amount": -6.67,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckkjR6hEdpgNeQd",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-29",
              "Merchant Name": "PETSMARTon Jul 29, 2024collapsed",
              "Amount": -33.35,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckm7i6Dz3nDTpu1",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "BIGGBY COFFEEon Feb 02, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reckmqzbqwY6Wu73B",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 26, 2024collapsed",
              "Amount": -0.65,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reckoyL7dYMEPxtqY",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "CITY OF FRASER UTon Dec 27, 2023collapsed",
              "Amount": -77.96,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recksQwyf11rcj6kM",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 19, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recl0GMnwaGf8ckIJ",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 03, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recl22ozqqzNm8pBB",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "UNIVERSAL MANAGEon Oct 04, 2024collapsed",
              "Amount": 1357.99,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recl2xhebvhVHuqZo",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 13, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recl4XdItck5lKwST",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-10",
              "Merchant Name": "U-HAULon Jan 10, 2024collapsed",
              "Amount": -34.93,
              "Category": "Travel: Travel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recl5uMFtXLgIoe4d",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 28, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recl7eQjxWLzvoDSw",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "GRAND TAVERNon Dec 20, 2023collapsed",
              "Amount": -29.44,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recl8m6wlG85ycyOy",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-09",
              "Merchant Name": "VENMOon May 09, 2024collapsed",
              "Amount": -120,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recl9GAyNPdPwiHHx",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 02, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recl9sHxReIfxWpga",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-27",
              "Merchant Name": "GM FINANCIALon Jun 27, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recl9wamOkIGdUx6Y",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "TACO BELLon Feb 27, 2024collapsed",
              "Amount": -5.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclA3jYnNRH6UhTk",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 26, 2024collapsed",
              "Amount": 0.08,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reclATzzTkv2kQNoL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "AMAZON MARKETPLACEon Mar 15, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclBhNKV1Nrg4QEX",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-09",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Oct 09, 2024collapsed",
              "Amount": -14.3,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclHEGvUBMp19zSI",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 21, 2024collapsed",
              "Amount": -1.48,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclIwKkyaOP333YG",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-11",
              "Merchant Name": "Monthly Maintenance Feeon Sep 11, 2024collapsed",
              "Amount": -4.95,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reclJgbJHcGgLnCax",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-18",
              "Merchant Name": "JIMMY JOHNSon Nov 18, 2023collapsed",
              "Amount": -9.95,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclLQpgfJwbOX0TR",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "SQ *KAYFABE CARDSon Sep 16, 2024collapsed",
              "Amount": -12.87,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclNEPHAjaOfNrDC",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Feb 23, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclP91cLUIiwwoBZ",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "UNIVERSAL MANAGEon Sep 13, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclPWRLhMJtG3kKZ",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-29",
              "Merchant Name": "TST*THE MASONIC Ton Aug 29, 2024collapsed",
              "Amount": -15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclPnQ1UqhJtNg9u",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclQ0a1t5MZILjqj",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "SPEEDWAYon Sep 03, 2024collapsed",
              "Amount": -47.2,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclSVWoYZMvDML1n",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 03, 2024collapsed",
              "Amount": -2.94,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclTSAoZyHaTSU3X",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-03",
              "Merchant Name": "BIGGBY COFFEEon Aug 03, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclWgJah2GJdYOhL",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Mar 01, 2024collapsed",
              "Amount": -18.17,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclZNxQU1azvX59I",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-19",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 19, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reclbJuYtkHMej9tN",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recldIRrkFtTAZOld",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 08, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclf2zdkDIzJ2eqV",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reclfmtfIytzfMbNZ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 12, 2024collapsed",
              "Amount": -0.98,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclhXXHVKrAbbFhi",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "UNIVERSALMGT0793on Apr 19, 2024collapsed",
              "Amount": 1620.24,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclijn73DgpFBBqK",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 25, 2024collapsed",
              "Amount": -0.2,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recljK6omfBE0t3h9",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "MARIA SABERONon Nov 15, 2024collapsed",
              "Amount": 40.25,
              "Category": "Income: Other Income",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reclkt7xoTwxCYWaS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-14",
              "Merchant Name": "CULVERSon May 14, 2024collapsed",
              "Amount": -8.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recllHWgWQDPi0jsH",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 29, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reclnaQ3lYGQiTPkv",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 04, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "reclng7rru5UMSpGY",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Aug 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclpTpMHRIeKWdaN",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 06, 2023collapsed",
              "Amount": 0.82,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reclrtDS6PBd1A8VN",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-22",
              "Merchant Name": "ETSYon Oct 22, 2024collapsed",
              "Amount": 8.21,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recltgqKscoHpUZ7V",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 22, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reclvMA4n9JQFTUBV",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "UNIVERSAL MANAGEon Jul 05, 2024collapsed",
              "Amount": 1367.28,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reclwFNdmWx14X3FT",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "BIGGBY COFFEEon Jan 26, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recly27mK919fSBLR",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 31, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reclyQcD2PKRgmsNX",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 26, 2024collapsed",
              "Amount": 0.58,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reclz6Nl11ZtCdNKN",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-25",
              "Merchant Name": "COSTCOon Mar 25, 2024collapsed",
              "Amount": -7.07,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reclzFxrPcBSSPfvX",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jun 28, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recm0Wmh1mAve1YRi",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recm3lWOy2WjkrGDW",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 26, 2024collapsed",
              "Amount": -3.34,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recm5tN5MnpzsJLlv",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-20",
              "Merchant Name": "CONTINENTAL SERVICESon Dec 20, 2023collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmAd8kwJ1LVpTrZ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-23",
              "Merchant Name": "BIGGBY COFFEEon Dec 23, 2023collapsed",
              "Amount": -5.05,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmBPBFC2NPRgurl",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "CULVERSon May 06, 2024collapsed",
              "Amount": -32.91,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmCzhWspvXuTZ04",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Sep 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmEALJcFhjVANfS",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-24",
              "Merchant Name": "AVANTI MARKETSon Aug 24, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmEJnPSP6pDjH46",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "BIGGBY COFFEEon Aug 30, 2024collapsed",
              "Amount": -6.18,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmG0g150kOyIgok",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 18, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmHCpHWt9lk6l43",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 15, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recmILUjNMYbp06A0",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "GRAND TAVERNon Oct 24, 2024collapsed",
              "Amount": -27.79,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmK1IkpKuUmwlAY",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-19",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 19, 2024collapsed",
              "Amount": 0.82,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recmKFT6WxnPPq26Z",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "SQ *TRIFORGE LASER DESIGNon Nov 06, 2023collapsed",
              "Amount": -20,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmL5uOXCAZGBaPh",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-20",
              "Merchant Name": "TARGETon Jan 20, 2024collapsed",
              "Amount": -20.95,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmNpBrcqZAJ7n3k",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Sep 13, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmOC14mjfnPpozX",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Feb 27, 2024collapsed",
              "Amount": -36.54,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmPqSIBMC3ckxhJ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-25",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 25, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recmPqSIBMC3ckxhJ"
      },
      "headers": {
        "content-length": "3826",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recjmUPcfLhtWrpkn",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recmPqSIBMC3ckxhJ",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recmPqSIBMC3ckxhJ",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recmQJW1PhL5oXHMD",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 11, 2024collapsed",
              "Amount": 0.41,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recmR3G2ba3iP7Kpd",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Jan 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmV372DbBkvbjlI",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Jun 28, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmVe8IkB8ocEwmw",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 02, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmZ6uKV8r1zPWUl",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-22",
              "Merchant Name": "CRUNCHYROLLon May 22, 2024collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmZahOSAQ8gcmhk",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-16",
              "Merchant Name": "ETSYon Oct 16, 2024collapsed",
              "Amount": 11.19,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmZoh4W9Lb5CooD",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "PATREON* MEMBERSHon Dec 11, 2023collapsed",
              "Amount": -2,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmbJ1zaWTjWqgU4",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-26",
              "Merchant Name": "NINTENDO CA127576on Sep 26, 2024collapsed",
              "Amount": -37.09,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmbKE59DIWScfbD",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-26",
              "Merchant Name": "AVANTI MARKETSon Feb 26, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmc0ToqxFsbwDa2",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-12",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 12, 2023collapsed",
              "Amount": 2.78,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recmcuWdIh2zKf3YW",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmgHrC9JOG9na9p",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 05, 2024collapsed",
              "Amount": 0.32,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recmnnvsQvmKL0CMe",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 12, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recmpq5qU4c6PilaW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 10, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recmpz1pcM2Z81VIR",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-30",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 30, 2024collapsed",
              "Amount": -0.68,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recmqQls8ouOUu4X4",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-23",
              "Merchant Name": "MICRO CENTERon Dec 23, 2023collapsed",
              "Amount": -63.56,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recmqiLtBRyHIrmo6",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 24, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recmruGZNum8tY7zW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recn0sHUk6liyj6F5",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "TST* BREAD & ROSESon Dec 04, 2023collapsed",
              "Amount": -20.21,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recn3S3VVuvnWEYv3",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-09",
              "Merchant Name": "Subway 52751on Nov 09, 2023collapsed",
              "Amount": -7.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recn46BYhSiMert0W",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "GRAND TAVERNon Oct 17, 2024collapsed",
              "Amount": -24.02,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnAeiXXBxniC4Vu",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recnArGcoew0RghAG",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "TACO BELLon Feb 02, 2024collapsed",
              "Amount": -8.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnBHMR9Im33mG1I",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 08, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnGaOxbJqwyh7D7",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 20, 2023collapsed",
              "Amount": -25.22,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnGqrWXwIMjCOD1",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Oct 22, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnJ2ZdOSWd2bAqH",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Mar 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnKITjxos9zy6kW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "MR CS CAR WASH NUMBER 8on Nov 13, 2023collapsed",
              "Amount": -9,
              "Category": "Transportation: Automotive Expenses",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnMY1z0HmcjrPdF",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 03, 2024collapsed",
              "Amount": 2.61,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recnMtA6hUFnChpIf",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-21",
              "Merchant Name": "BIGGBY COFFEEon Sep 21, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnTitBFa8F3LrM5",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 14, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recnUrzs41q6SSvp7",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "BANK OF AMERICAon Mar 18, 2024collapsed",
              "Amount": -1142.79,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnVxguVap1U2GvP",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 29, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnXEJ6OwPQyG5Vp",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "CCBILL.COMon Jun 21, 2024collapsed",
              "Amount": -33.33,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnXgKSYyYV2PQaY",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "AVANTI MARKETSon Jun 28, 2024collapsed",
              "Amount": -2.99,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recnXwckVeBJ6KsFS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on May 10, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnZVBbAIVcYpXCr",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "BIGGBY COFFEEon Dec 08, 2023collapsed",
              "Amount": -2.53,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnhNkAp8Bgg62oW",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 01, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnkKO0jYOl90vWM",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recnoLRtFBLYnT419",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-05",
              "Merchant Name": "US DEPT OF EDUCATIONon Dec 05, 2023collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnpFamC5gHprd7V",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "MULVEY GARDENS Con Mar 04, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnpkMqlH0U706bZ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-11",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 11, 2024collapsed",
              "Amount": -2.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnrhq2uxzbm5pMT",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "BIGGBY COFFEEon Oct 18, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recns0zG2iu6c0r47",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-24",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 24, 2024collapsed",
              "Amount": 1.05,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recns4lcfCoQEDQKi",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-01",
              "Merchant Name": "AVANTI MARKETSon Feb 01, 2024collapsed",
              "Amount": -2.59,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recntuX4VSCcOVLhP",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Aug 22, 2024collapsed",
              "Amount": 0.73,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recnuy4ntZ3skZ6Kw",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 22, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recnvT5yesaNei6p7",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-06",
              "Merchant Name": "GRAND TAVERNon Mar 06, 2024collapsed",
              "Amount": -25.97,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recnvUPs5QjkMX5s8",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recnwTkiSdZodLKOI",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "BIGGBY COFFEEon Nov 21, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco0KtHbXIhUcPWI",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Apr 12, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reco1foojH0iCANSf",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-11",
              "Merchant Name": "MEIJER EXPRESS 145on Nov 11, 2024collapsed",
              "Amount": -42.09,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco2DuhRfdfs2Rfs",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 20, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reco3Ix1KaCDJPKXh",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "TST* PHULKARI PUNJABI KITon Mar 18, 2024collapsed",
              "Amount": -12.72,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco3TeVx8sIxmzZ2",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-02",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Dec 02, 2023collapsed",
              "Amount": -12.76,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco3af9EXsNS48Kh",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-04",
              "Merchant Name": "CONTINENTAL SERVICESon Nov 04, 2023collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco4KhwidyCQbGcq",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "US DEPT OF EDUCATIONon Oct 28, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reco4bmgC5UpCZS5o",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-04",
              "Merchant Name": "NNT HARU FRESHon Mar 04, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reco6rSAhXEi0yv35",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-27",
              "Merchant Name": "PETS BEST INSURANCEon Dec 27, 2023collapsed",
              "Amount": -26.47,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reco7YUCelaMv2SXm",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-07",
              "Merchant Name": "CONTINENTAL SERVICESon Dec 07, 2023collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reco9AgedhV3AlZzw",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-11",
              "Merchant Name": "ETERNAL GAMESon May 11, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoAEu7uN8zBspVl",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recoBBKNBH6dktRyx",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "WL *STEAM PURCHASon Jul 19, 2024collapsed",
              "Amount": -28.61,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recoENXc2tnZSbMrq",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 19, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recoIRNLxiWK97JnU",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "VENTIMIGLIA ITALIAN FOODSon Dec 06, 2023collapsed",
              "Amount": -25.75,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoJpsKnYiBZkLz8",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 05, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recoJv6a3LJs5QlIg",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "DISCORDon Sep 10, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recoQPsBkvIvnzco8",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "US POSTAL SERVICEon Aug 06, 2024collapsed",
              "Amount": -4.47,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recoQuveFa7rkd17Q",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-28",
              "Merchant Name": "MICRO CENTERon Dec 28, 2023collapsed",
              "Amount": -90.05,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoTOAUcxeBjY7Bu",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recoTPwBPFTd7oM1t",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-08",
              "Merchant Name": "KURA SUSHIon Nov 08, 2023collapsed",
              "Amount": -68.95,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recoZ9Ke5Z65dRVfW",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recoZSOQY08V1x0SW",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "DTE ENERGYon Jul 19, 2024collapsed",
              "Amount": -181.46,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recobOjmYT41Vx7KA",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-14",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Aug 14, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recocua2BCwmgzrYx",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI RESORTSon Jun 03, 2024collapsed",
              "Amount": -10.68,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recodQv45JI02ZMbN",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "Debrand Fine Chocolateson Jan 02, 2024collapsed",
              "Amount": -16.2,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoeMOfVN2Ne0lcC",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-09",
              "Merchant Name": "CHINA HOUSE HUA INCon Sep 09, 2024collapsed",
              "Amount": -8.48,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoj7oz5WunzPBuh",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "UNIVERSALMGT0793on May 24, 2024collapsed",
              "Amount": 1367.28,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recoj8ozsy4LnWWSA",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jan 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recojREgOjsZqkoOg",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Aug 30, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recolfdmWEzM6hoSc",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "Interest Earnedon Mar 27, 2024collapsed",
              "Amount": 0.02,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recombOv9yjhpumPO",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-12",
              "Merchant Name": "BIGGBY COFFEEon Sep 12, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reconGqs0qfFo8B20",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "Interest Earnedon Mar 13, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "reconK4HjUicdLT23",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "PAYMENT - THANK YOUon May 21, 2024collapsed",
              "Amount": 22.53,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reconTapA964a6nc8",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "SANDERS CANDY LLCon Aug 01, 2024collapsed",
              "Amount": -9.73,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recoqqBBeyu4n2xBJ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "THE STREAT CORN-ERon Jul 19, 2024collapsed",
              "Amount": -38.21,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recotwUnjQMvG7kuU",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-04",
              "Merchant Name": "MEIJERon Jun 04, 2024collapsed",
              "Amount": -94.67,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recoy4wnOjvV5OFig",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-16",
              "Merchant Name": "BIGGBY COFFEEon Nov 16, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recp00yTTBJPckIKH",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-25",
              "Merchant Name": "CONSUMERS ENERGYon Sep 25, 2024collapsed",
              "Amount": -23.4,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recp0MXa4dTOU7ip4",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-28",
              "Merchant Name": "UNIVERSALMGT0793on Jun 28, 2024collapsed",
              "Amount": 1367.29,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recp1rkM2PHxliVb8",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "TST*LITTLE TREE Son Aug 26, 2024collapsed",
              "Amount": -29.15,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recp2jIBaLhWNRRIr",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 13, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recp6M5jJQCpwKUIT",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "VENMOon Feb 20, 2024collapsed",
              "Amount": -200,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recp9R2tdzGcJZRFw",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 04, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpB8nrr8K55U9Kk",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 27, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpC8PPj49uNaJJt",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "STEAMGAMES.COM 42on Jan 22, 2024collapsed",
              "Amount": -28.61,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpDryhDhzBkH3s4",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-02",
              "Merchant Name": "MULVEY GARDENS Con Jul 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpEJaOmpv1NKqdO",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "COMCASTon Nov 06, 2023collapsed",
              "Amount": -56.78,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpFjbaCEl6DtnRr",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 21, 2023collapsed",
              "Amount": -0.18,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpGO1ZzX8ifYKW4",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-12",
              "Merchant Name": "LOVE SUSHIon Sep 12, 2024collapsed",
              "Amount": -38.45,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recpGO1ZzX8ifYKW4"
      },
      "headers": {
        "content-length": "3987",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recmPqSIBMC3ckxhJ",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recpGO1ZzX8ifYKW4",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recpGO1ZzX8ifYKW4",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recpK4ZZ35xXhkITn",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-10",
              "Merchant Name": "DISCORDon Jul 10, 2024collapsed",
              "Amount": -10.59,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpLMyAIplIUrdU6",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-21",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Aug 21, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recpLQ5luFvbV2Nqc",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-04",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 04, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recpSe41gbvekud6B",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "HARU FRESH JUIon Apr 22, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recpT6ACSSzlFTvVf",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recpU6Ey2TWAqoms9",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Dec 15, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpYl8EtXlncRlx8",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recpZnF87Qq57ZTSY",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "LOUIES HAM & CORNon Jul 23, 2024collapsed",
              "Amount": -13.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recpZwTZbMM6Hev57",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-31",
              "Merchant Name": "UNIVERSALMGT0793on May 31, 2024collapsed",
              "Amount": 1367.29,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpbtc8G8IEQB5jy",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "STEAMGAMES.COM 42on Sep 23, 2024collapsed",
              "Amount": -13.5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpdjXb4K7fLw50I",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recpe0b3yD4zk2h5e",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "UNIVERSALMGT0793on Mar 08, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpghcBpgXVQilQ0",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-21",
              "Merchant Name": "CRUNCHYROLLon Feb 21, 2024collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpiQW1lJGubGMni",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "BKOFAMERICA MOBILE DEPOSIT MIon Sep 03, 2024collapsed",
              "Amount": 387,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpj5vOkuvQ9bxGM",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "AMAZON MARKETPLACEon Feb 02, 2024collapsed",
              "Amount": -128.2,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpp9HgENzbWoqlA",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 10, 2024collapsed",
              "Amount": 1.19,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recppe0z0hKgxrbxR",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "TOP CUT COMICS LPon Sep 16, 2024collapsed",
              "Amount": -13.78,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recprcYz9YClphWb6",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "CVS PHARMACYon Oct 01, 2024collapsed",
              "Amount": -10.38,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpuFObBRYLvsiSi",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "SQ *KAYFABE CARDSon Sep 16, 2024collapsed",
              "Amount": -21.45,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recpvO8i8ANVtKVUb",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 26, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recpzfd2mFELfUt7w",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Jul 05, 2024collapsed",
              "Amount": 500,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recq2Lr6DDLFtCulN",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 15, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recq2lvHybkYfyU2u",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "04412 THE EDGE FITNESS MIon Oct 17, 2024collapsed",
              "Amount": -8.47,
              "Category": "Health: Fitness or Health club membership",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recq3zF9bNHLBa34A",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-01",
              "Merchant Name": "CITY OF FRASER UTon Feb 01, 2024collapsed",
              "Amount": -94.36,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recq4XRpYfacprat1",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-13",
              "Merchant Name": "BIGGBY COFFEEon Jul 13, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recq7r83QRpa6abpp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 29, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recq9qcbAUkARY1QH",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "UNIVERSAL MANAGEon Aug 02, 2024collapsed",
              "Amount": 1357.98,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqA2HFMrVpr7Ky6",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recqKVJc7nHPgtE0Q",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-11",
              "Merchant Name": "MICRO CENTERon Mar 11, 2024collapsed",
              "Amount": -61.81,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recqKbZ22KHyJSBc3",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-04",
              "Merchant Name": "INDIANAPOLIS CONVENTIOon May 04, 2024collapsed",
              "Amount": -6.54,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recqMFPRTu5yiFDSu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *THE SIDE DECKon Sep 14, 2024collapsed",
              "Amount": -49,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recqS7OthihL8eRmL",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqSbcmZ8IztFilr",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 12, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqSfs8xjc906FQL",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 10, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recqW9u7Jsj8OElsZ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "AVANTI MARKETSon Jul 22, 2024collapsed",
              "Amount": -2.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recqYv4ztQwSisbE8",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-13",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 13, 2023collapsed",
              "Amount": 0.85,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recqcqgTUAH6nkV3z",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqkAx074dMSmFcU",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 27, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqqfS8WVwZvsdRT",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "MEJIAERNESTO26on Sep 16, 2024collapsed",
              "Amount": -10,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqreIknAPUiCWLt",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Mar 29, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqsBliqIpLUOPSQ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "KENNETH MEAD:SARAH MEADon Apr 02, 2024collapsed",
              "Amount": -47,
              "Category": "Uncategorized: Uncategorized",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recqte7qRkRBIQhOh",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "BIGGBY COFFEEon Apr 24, 2024collapsed",
              "Amount": -2.53,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recqvLNStvQ1bffAA",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "JIMMY JOHNSon Mar 27, 2024collapsed",
              "Amount": -13.75,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recqxnUJmYWN1AifW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "BIGGBY COFFEEon Apr 19, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recqzuQtADSGYkjI3",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 22, 2023collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recr012W7GEXBVzfp",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "BIGGBY COFFEEon Nov 28, 2023collapsed",
              "Amount": -4.73,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recr0s7RH60X1mJbM",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recr2ET2v238L8H66",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "AMAZON MARKETPLACEon May 20, 2024collapsed",
              "Amount": -16.95,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recr3O24mYgkos4t6",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "MARATHONon Dec 29, 2023collapsed",
              "Amount": -40.25,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recr5GqM0N6BZpDVM",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-18",
              "Merchant Name": "BIGGBY COFFEEon Sep 18, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recr5V3Fs7nCh8Q6b",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jun 21, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recr8vgnyh058aAqR",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "STEAMGAMES.COM 42on Dec 29, 2023collapsed",
              "Amount": -25.43,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrBthMBlsgUATeb",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-30",
              "Merchant Name": "ETSYon Jul 30, 2024collapsed",
              "Amount": 4.49,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrDGDaM6SC4r3AH",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-10",
              "Merchant Name": "AMAZON MARKETPLACEon Sep 10, 2024collapsed",
              "Amount": -36,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrLmd6BxUMqyyvg",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-02",
              "Merchant Name": "ETSYon Apr 02, 2024collapsed",
              "Amount": 6.62,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrONIWb4AyUYbAN",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "UNIVERSAL MANAGEon Nov 01, 2024collapsed",
              "Amount": 1408.88,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrOqSU4ly021pYE",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-13",
              "Merchant Name": "BUFFALO WILD WINGSon Jul 13, 2024collapsed",
              "Amount": -24.88,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recrOyqPUthu9PsMW",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "NARUTO SUSHIon Nov 28, 2023collapsed",
              "Amount": -47.29,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recrTcyk9h1hR5CZF",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-31",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 9875on Oct 31, 2024collapsed",
              "Amount": 600,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrWAnzeJsOTjXha",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 01, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrWQ8BPSTTeGbAR",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-13",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Sep 13, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recraqsUrKewAOoyY",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "LS FRASER BICYCLEon May 24, 2024collapsed",
              "Amount": -37.1,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recrbegXxW3dBJkHJ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "SQ *THE SIDE DECKon Oct 14, 2024collapsed",
              "Amount": -29,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recrckkIHSUTFK8nE",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "VENMOon Jan 02, 2024collapsed",
              "Amount": -60,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrgeNLE2wc6Y4vc",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-29",
              "Merchant Name": "AMAZON MARKETPLACEon Feb 29, 2024collapsed",
              "Amount": -29.36,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrk8Z8kNf61UPGJ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 26, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recrkKzIHPZZWbD11",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER TO CHK 3102on Aug 01, 2024collapsed",
              "Amount": -110,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recrokcGeRPVaesZc",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-07",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 07, 2024collapsed",
              "Amount": 0.45,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recrp2Gl0l43MO2u6",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Feb 09, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrvlKIHMFDiyfvM",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "AMF BOWLING CENTERSon Sep 23, 2024collapsed",
              "Amount": -21.24,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recrwDB4AnpVWX0xt",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-01",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 01, 2023collapsed",
              "Amount": -2.12,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recryNm2lOulNXszH",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-30",
              "Merchant Name": "JUAN BLANCOS - EAon Sep 30, 2024collapsed",
              "Amount": -51.46,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recrytq77W8FpvPF6",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 25, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recrywsgyefqMiGCM",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-04",
              "Merchant Name": "AVANTI MARKETSon Dec 04, 2023collapsed",
              "Amount": -4.58,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recrzMXwp5TiWUEZw",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "BIGGBY COFFEEon May 17, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recs0Xc4MQiA8Hpzc",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-29",
              "Merchant Name": "GM FINANCIALon Apr 29, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recs4G86bSLwHjocz",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-29",
              "Merchant Name": "BIGGBY COFFEEon Nov 29, 2023collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recs4Mea7FoxYBSDw",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "CCBILL.COMon Feb 20, 2024collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsAJSaFoBkE9Zu5",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 20, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsBtNPqNTgF7fXK",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 10, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsCfkp7iKRq65lm",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "GRAND TAVERNon Nov 15, 2023collapsed",
              "Amount": -27.03,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsDrD00wrP5Ez4l",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 24, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsITXULTge2r20N",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-13",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Mar 13, 2024collapsed",
              "Amount": -1.46,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsIddUry8MLAWOw",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ETSYon Jul 23, 2024collapsed",
              "Amount": 12.09,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsM6OzUsoDlQ2HD",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "INDIANAPOLIS CONVENTIOon May 06, 2024collapsed",
              "Amount": -17.44,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsNeA5g0Y3TLvws",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-10",
              "Merchant Name": "MEIJERon Apr 10, 2024collapsed",
              "Amount": -22.05,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsQFb3vBEZ6Nl7Z",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "FI *RESTAURANTon Jun 03, 2024collapsed",
              "Amount": -14.45,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsRgj3Lllgg63Eb",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-17",
              "Merchant Name": "BIGGBY COFFEEon Feb 17, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsSfBMKv7I13VID",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-02",
              "Merchant Name": "GRAND TAVERNon May 02, 2024collapsed",
              "Amount": -28.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsTY5GIgcTOO7uf",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *CRADILICIOUSon Sep 14, 2024collapsed",
              "Amount": -8,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsTw7O5fMeFipnX",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jan 12, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsVlYLcbgD83ZJo",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-25",
              "Merchant Name": "CONSUMERS ENERGYon Jul 25, 2024collapsed",
              "Amount": -24.58,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsXQfMIXK1dPD0q",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-20",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM CHK 7139on Feb 20, 2024collapsed",
              "Amount": 661.86,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsc8my8zIhdn35W",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "BIGGBY COFFEEon Jun 07, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recscGCtp0u5HsVX5",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recscpyMonMUnPq2q",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-12",
              "Merchant Name": "BIGGBY COFFEEon Dec 12, 2023collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsgsGR1Tuuu10fE",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-14",
              "Merchant Name": "THE EDGE FIT ABCon Nov 14, 2024collapsed",
              "Amount": -44.99,
              "Category": "Health: Fitness or Health club membership",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsiN0QZz055K6FY",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-12",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jun 12, 2024collapsed",
              "Amount": -0.64,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsiQRmDsmm13rdK",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "CRUNCHYROLLon Jan 22, 2024collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsinJFCX0pRr04n",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "TIKTOK SHOPon Oct 17, 2024collapsed",
              "Amount": -10.78,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recsinJFCX0pRr04n"
      },
      "headers": {
        "content-length": "3913",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recpGO1ZzX8ifYKW4",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recsinJFCX0pRr04n",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recsinJFCX0pRr04n",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recsjBZYViyE0szzt",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-12",
              "Merchant Name": "LOVES TRAVEL STOPS AND COUNTRY STORESon Oct 12, 2024collapsed",
              "Amount": -13.38,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsjM3eWKU4jx8Ip",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "TIM HORTONSon Jun 10, 2024collapsed",
              "Amount": -5.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recslaOCOjX1kgUMZ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-15",
              "Merchant Name": "AVANTI MARKETSon Nov 15, 2023collapsed",
              "Amount": -2.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsldbhTjTEJFBz0",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-06",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 06, 2023collapsed",
              "Amount": 0.33,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recsn6fCguMKkGwk4",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "GRAND TAVERNon Apr 24, 2024collapsed",
              "Amount": -18.31,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recsntUu3VoEHafxy",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-26",
              "Merchant Name": "BIGGBY COFFEEon Mar 26, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recsp5IhKR5OgaVwH",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 30, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recspwAOyHwlNONM0",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Feb 02, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recssTsnsjVU7Zw1F",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-15",
              "Merchant Name": "Monthly Maintenance Feeon Apr 15, 2024collapsed",
              "Amount": -8,
              "Category": "Finance: Service Charges/Fees",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recsuua4zIeCrKSuz",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Apr 05, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recsz050e4qCYrOlM",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Feb 16, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rect0pjJNDNUmyl2X",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "UNITED WHOLESALE MORTGAGEon Jan 02, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Finance: Loans",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rect12qtMUH3i1Cj1",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jan 25, 2024collapsed",
              "Amount": 0.22,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rect1dIEdJygxVbUX",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-14",
              "Merchant Name": "BIGGBY COFFEEon Jun 14, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rect4Tyutwivqxf3P",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 01, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rect7bgNJsQRwjeI7",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-20",
              "Merchant Name": "APPLEon Jun 20, 2024collapsed",
              "Amount": -2.99,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rect8j9jgDESoVmcp",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-16",
              "Merchant Name": "2BALTIMORE CONVENTIONon Sep 16, 2024collapsed",
              "Amount": -5.3,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rectAcFywxocoKDz2",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "UNIVERSALMGT0793on Apr 12, 2024collapsed",
              "Amount": 1620.26,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectC71XJhf47xFBw",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-10",
              "Merchant Name": "LS FRASER BICYCLEon Jun 10, 2024collapsed",
              "Amount": -57.24,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectEmmURMNQw1660",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Aug 16, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectFOQvmzd0wCIhQ",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 01, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectJCUMJXv0BR9L2",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "UNIVERSALMGT0793on Dec 08, 2023collapsed",
              "Amount": 1621.13,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectMMCKwT4zCQnDb",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "MEIJERon Dec 18, 2023collapsed",
              "Amount": -40,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rectMgdD3Ecm9UVPc",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-19",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Dec 19, 2023collapsed",
              "Amount": 0.75,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rectPfyb9i4GxjsHI",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 21, 2024collapsed",
              "Amount": 0.64,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rectQcsfwLjAgMiOO",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-16",
              "Merchant Name": "GRAND TAVERNon May 16, 2024collapsed",
              "Amount": -10.36,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectSfpKLn63ZJlIl",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-13",
              "Merchant Name": "BIGGBY COFFEEon Nov 13, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rectUQt3AMkJvDDxc",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Sep 24, 2024collapsed",
              "Amount": -0.81,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectUaUt8HEhlj0o7",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 17, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "rectV7Q4GBY6pfYNQ",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-17",
              "Merchant Name": "HERTZon Sep 17, 2024collapsed",
              "Amount": -26,
              "Category": "Travel: Travel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "rectWKDVesIxdGEm1",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-28",
              "Merchant Name": "BIGGBY COFFEEon May 28, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectX2daH89HH5CAW",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "STATE OF MICHIGANon Apr 22, 2024collapsed",
              "Amount": 391,
              "Category": "Income: Deposits",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectY0Qv9PzeYG1T7",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-02",
              "Merchant Name": "MULVEY GARDENS Con Aug 02, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recthhYMqZb6DkRaS",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 29, 2024collapsed",
              "Amount": -0.67,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectj2PXG16rdAM7H",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "LS FRASER BICYCLEon May 13, 2024collapsed",
              "Amount": -38,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectjhscc2DcCQGZZ",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-11",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 11, 2024collapsed",
              "Amount": -0.01,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectlkacUR8J1iiKT",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Sep 23, 2024collapsed",
              "Amount": -536.78,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectmukIxUFAarA53",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "Interest Earnedon Apr 26, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recto1Dzd4V22iu8F",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Aug 16, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectp7EZ519RYIPrS",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 17, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectvbTE7XAnMC6nA",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 17, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "rectwPBzHkVgcwmSS",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-14",
              "Merchant Name": "SQ *CRADILICIOUSon Sep 14, 2024collapsed",
              "Amount": -12,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recty5lXXXTusDt6X",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 24, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "rectyzwVJyHulIE8R",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-23",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 7344on Jul 23, 2024collapsed",
              "Amount": 600,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recu3ihBAzBovQuzJ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-25",
              "Merchant Name": "KIT CHEN THAI BYon Jul 25, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recu5WZI6mAJWoGHP",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-25",
              "Merchant Name": "AVANTI MARKETSon Jul 25, 2024collapsed",
              "Amount": -5.38,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recu5nqyK14qpGSOo",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 01, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recu6Ow4RYip1fKrY",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Nov 03, 2023collapsed",
              "Amount": -0.82,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recu7atagQKRZXuHj",
            "createdTime": "2024-11-18T01:38:10.000Z",
            "fields": {
              "Date": "2023-11-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 30, 2023collapsed",
              "Amount": 0.99,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recu8qj80GIU5lBRM",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "UNIVERSALMGT0793on Jun 21, 2024collapsed",
              "Amount": 1367.3,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recu9U1eaQsUeVjJ4",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "JIMMY JOHNSon Nov 03, 2023collapsed",
              "Amount": -12.06,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recuBArRchGfx5Ahq",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "BIGGBY COFFEEon Mar 29, 2024collapsed",
              "Amount": -3.01,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recuGX8nqxHBvJFbG",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Oct 18, 2024collapsed",
              "Amount": -112.8,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuI69nYNUqEVOeo",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-15",
              "Merchant Name": "AMAZON MARKETPLACEon May 15, 2024collapsed",
              "Amount": -18.88,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuIH3WqRasdni5z",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recuLAlww7iXlHWhp",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-05",
              "Merchant Name": "UNIVERSALMGT0793on Apr 05, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuLYVqf9ix0mQiA",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "Online payment from CHK 3on Aug 22, 2024collapsed",
              "Amount": 1121.42,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recuOJ7apKKHWxKkI",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-18",
              "Merchant Name": "GITHUBon Dec 18, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuOzL1KsXPH6TiY",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-17",
              "Merchant Name": "MEIJERon Apr 17, 2024collapsed",
              "Amount": -12.18,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recuPHXlFLR6kcJHa",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-27",
              "Merchant Name": "GRAND TAVERNon Mar 27, 2024collapsed",
              "Amount": -29.32,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recuQZdbdjFeHmY18",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "CRUNCHYROLLon Apr 22, 2024collapsed",
              "Amount": -9.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuS4ClNfh79SZzh",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 17, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuTUGcrecmrF3gO",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-24",
              "Merchant Name": "BIGGBY COFFEEon Apr 24, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recuTf3p29eCEFdfm",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "THE HOME DEPOTon Jan 29, 2024collapsed",
              "Amount": -102.18,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recuTilJOmh9WhTAX",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-07",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 07, 2024collapsed",
              "Amount": 0.79,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recuTrnaeBsUOPyep",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 03, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recuVuHqNUqu5bkS9",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Oct 07, 2024collapsed",
              "Amount": 0.3,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recuWiDQWjJycFeWK",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 11, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuX3G9l9jWXIOpp",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 08, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recuXGDfpWVMtmOd9",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-22",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 22, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recuYhklwnxR0BcZi",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Nov 01, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuaYzezndStUXdh",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-09",
              "Merchant Name": "ETERNAL GAMESon Mar 09, 2024collapsed",
              "Amount": -5,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recufjXZvneNjCCzX",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-28",
              "Merchant Name": "BIGGBY COFFEEon Dec 28, 2023collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recugYjpxMczBdd1Y",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Feb 16, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recukovNNXjfNVjJg",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-18",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 18, 2024collapsed",
              "Amount": -16.39,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recukrl92llw1OzZ1",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-01",
              "Merchant Name": "ONLINE BANKING TRANSFER FROM SAV 7344on Aug 01, 2024collapsed",
              "Amount": 110,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuocFzRGj9CcPAS",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jan 26, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recupHucfpZ5DYtbJ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "PETSMARTon Jan 05, 2024collapsed",
              "Amount": -47.68,
              "Category": "Personal & Family Care: Pets/Pet Care",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recuqaS7hfOI6od6l",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-18",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Oct 18, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recus1ZPYhwEJeVZf",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 19, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recutBpYtSf6pe3Ox",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 26, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recuxkEgY4eY4rx8D",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-12",
              "Merchant Name": "Interest Earnedon Feb 12, 2024collapsed",
              "Amount": 0.01,
              "Category": "Income: Interest",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recuyZVq1GECDWBm6",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-21",
              "Merchant Name": "CRUNCHYROLLon Aug 21, 2024collapsed",
              "Amount": -11.99,
              "Category": "Home & Utilities: Cable/Satellite Services",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recv1vjW6Ip6GPNYm",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "SQ *COEY & SHYon Jun 03, 2024collapsed",
              "Amount": -75.25,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recv25Y9Eo0FfuX97",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "GRAND TAVERNon May 29, 2024collapsed",
              "Amount": -18.84,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recv4HSHyvXwCXOxi",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-19",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 19, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recv9nX88m1vv65Ew",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Aug 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvCzfBFGnhEd9Yk",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "Online payment from CHK 7on Jan 17, 2024collapsed",
              "Amount": 2591.36,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvFhZh4RjjVScTp",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Dec 01, 2023collapsed",
              "Amount": -1.44,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvIafgXXKrT6Sfq",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-30",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 30, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recvMgRiY7vFLuUJH",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE BANKING PAYMENT TO CRD 5496on Nov 24, 2023collapsed",
              "Amount": -1207.32,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recvNINCT2cobyI1q",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-03",
              "Merchant Name": "KALAHARI RESORTSon Jun 03, 2024collapsed",
              "Amount": -27.11,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recvPGD0tdKGCbr6K",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 03, 2023collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvR44xT47SVNlcS",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "AVANTI MARKETSon Nov 06, 2023collapsed",
              "Amount": -4.68,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvVT9rp77NOrTt9",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "VENMOon Aug 26, 2024collapsed",
              "Amount": -45,
              "Category": "Cash, Checks & Misc: Other Expenses",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvXyHdIzTF5uQFW",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-05",
              "Merchant Name": "BIGGBY COFFEEon Dec 05, 2023collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvZCAdx1Em8AZtF",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 26, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recvbg0R9AkSsyvHx",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-20",
              "Merchant Name": "SP MADEINCOOKWAREon May 20, 2024collapsed",
              "Amount": -115.54,
              "Category": "Home & Utilities: Home Improvement",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvbuwjMRJi2Jhqx",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on May 24, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvc5thE2okQZD8C",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-07",
              "Merchant Name": "NNT HARU FRESHon Oct 07, 2024collapsed",
              "Amount": -23.11,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/recvc5thE2okQZD8C"
      },
      "headers": {
        "content-length": "3862",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recsinJFCX0pRr04n",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/recvc5thE2okQZD8C",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/recvc5thE2okQZD8C",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "recvcaJINDRmDslC0",
            "createdTime": "2024-11-18T01:35:44.000Z",
            "fields": {
              "Date": "2024-07-31",
              "Merchant Name": "GRAND TAVERNon Jul 31, 2024collapsed",
              "Amount": -21.49,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvcqlc1GZ0Cdwfz",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "NARUTO SUSHIon Aug 16, 2024collapsed",
              "Amount": -16.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvdVYObqXdVlfHM",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-20",
              "Merchant Name": "CULTS3D.COMon Mar 20, 2024collapsed",
              "Amount": -1.4,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvgG0YZLqDwxKNb",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "SQ *APOCALYSSon Nov 06, 2023collapsed",
              "Amount": -106,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recvh2mOlumO1Lv7Q",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 23, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recvky9a84R778zmL",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-21",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Aug 21, 2024collapsed",
              "Amount": -0.73,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvq07HKccV3Kz19",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-17",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on May 17, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvr49BkNsF1IVRa",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Mar 28, 2024collapsed",
              "Amount": 0.53,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recvrdIpP8HY8xXux",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-13",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on May 13, 2024collapsed",
              "Amount": -0.53,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvsqWhfyFACimO5",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jul 05, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvvJ7rzvwL3CNa0",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "AMAZON MARKETPLACEon Apr 22, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recvzeH4RzQS0yBqT",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-01",
              "Merchant Name": "CITY OF FRASER UTon Apr 01, 2024collapsed",
              "Amount": -99,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recw3DSgW6VsN15R4",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-21",
              "Merchant Name": "AMAZONon May 21, 2024collapsed",
              "Amount": -169.58,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recw3d2dfkLafVmWK",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-12",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Apr 12, 2024collapsed",
              "Amount": 0.01,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recw54dDf7AXWyoWm",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-01",
              "Merchant Name": "CULVERSon Jul 01, 2024collapsed",
              "Amount": -8.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recw6udFDpgZrzhJU",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-21",
              "Merchant Name": "GRAND TAVERNon Aug 21, 2024collapsed",
              "Amount": -15.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recw99Lf8LvB4D6hH",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-03",
              "Merchant Name": "ROYAL BENGALon Jan 03, 2024collapsed",
              "Amount": -13.4,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwBaZa9O1MxIwEW",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-11",
              "Merchant Name": "MEIJERon Jul 11, 2024collapsed",
              "Amount": -54.32,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwDCVYGGBXiwFq4",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-17",
              "Merchant Name": "SPEEDWAYon Jun 17, 2024collapsed",
              "Amount": -49.7,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwDzNShdy0KL5TW",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-07",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Jun 07, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwF7x8rS39vT7UU",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 23, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recwFszrRSEe5ST7T",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "UNIVERSALMGT0793on Nov 10, 2023collapsed",
              "Amount": 1639.87,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwIEHKoQwdPuvKJ",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "Interest Earnedon Feb 27, 2024collapsed",
              "Amount": 0.02,
              "Category": "Income: Interest",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recwJ5oICYquBLYCU",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 15, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwO4PnLLz2kw11B",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 15, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recwODDfkRtvQW2Xs",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-16",
              "Merchant Name": "MEIJERon Jul 16, 2024collapsed",
              "Amount": -46.11,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwONfUecywUlXzA",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-03",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Aug 03, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwP787AgZgtTsOo",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-05",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Sep 05, 2024collapsed",
              "Amount": 0.43,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recwRE1eQV33lOQaI",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-03",
              "Merchant Name": "CVS PHARMACYon Aug 03, 2024collapsed",
              "Amount": -61.8,
              "Category": "Health: Healthcare/Medical",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwRM212Oju7RVLk",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "WENDYSon May 06, 2024collapsed",
              "Amount": -10.58,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recwTlQJ0KuBs9kNM",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-20",
              "Merchant Name": "THE MELTING POTon Nov 20, 2023collapsed",
              "Amount": -71.55,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwTyhWaDU3YGYp1",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-18",
              "Merchant Name": "PAYMENT - THANK YOUon Mar 18, 2024collapsed",
              "Amount": 1142.79,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwUo9OdCNG3hKcN",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-16",
              "Merchant Name": "ETERNAL GAMESon Dec 16, 2023collapsed",
              "Amount": -10,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwXbWvJIPd4FRuX",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "NATIONAL CONEY ISLANDon Jun 21, 2024collapsed",
              "Amount": -25.75,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recwXc8HjxGnApe6y",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-13",
              "Merchant Name": "BIGGBY COFFEEon Jun 13, 2024collapsed",
              "Amount": -2.85,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recwXt0R9DGMfS6lu",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-23",
              "Merchant Name": "PETS BEST INSURANCEon Sep 23, 2024collapsed",
              "Amount": 15.71,
              "Category": "Insurance: Insurance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwZoBZbTjKAkYn3",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-02",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Feb 02, 2024collapsed",
              "Amount": -1.4,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwbEWivtlZQgjTZ",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-05",
              "Merchant Name": "LOVE SUSHIon Jan 05, 2024collapsed",
              "Amount": -28.25,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwfBlIVDGmA72J8",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-27",
              "Merchant Name": "CONSUMERS ENERGYon Feb 27, 2024collapsed",
              "Amount": -95.5,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwftO1r3wGR7QoZ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jul 22, 2024collapsed",
              "Amount": -0.86,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwgqbYvtFRYrqS0",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-06",
              "Merchant Name": "SQSP* INV14392868on Aug 06, 2024collapsed",
              "Amount": -30,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwkKPL4o8RmO7jH",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-29",
              "Merchant Name": "BOFFS MARKETon Dec 29, 2023collapsed",
              "Amount": -6.79,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwl6TFir50keNy2",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "BIGGBY COFFEEon Nov 08, 2024collapsed",
              "Amount": -4.89,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwnPx4phze1LDAb",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-06",
              "Merchant Name": "SQ *YETI GAMINGon May 06, 2024collapsed",
              "Amount": -40,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwqq1INItrTsN5T",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 01, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recwruFLWq5haickN",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-22",
              "Merchant Name": "AMAZON MARKETPLACEon Jan 22, 2024collapsed",
              "Amount": -27.23,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recwsxiebJVSZ2LW5",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "HUNTINGTON PLACE CONCon Nov 06, 2023collapsed",
              "Amount": -7,
              "Category": "Shopping & Entertainment: Entertainment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recwtlR1h9BHqtaoT",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-12",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 12, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recwvQIbVH6MfWmNR",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-01",
              "Merchant Name": "ETSYon Oct 01, 2024collapsed",
              "Amount": -0.06,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recx4dBkp1Ejstnz9",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 29, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recx6HmZgCSQwFcVC",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "AMAZON MARKETPLACEon Aug 16, 2024collapsed",
              "Amount": -47.19,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recx9kAY4CqkgzlVC",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-22",
              "Merchant Name": "CONTINENTAL SERVICESon Apr 22, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recxDa383hBv1gWEY",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-09",
              "Merchant Name": "TRADER JOESon Nov 09, 2024collapsed",
              "Amount": -56.8,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recxI1r5MJHFh7qG3",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-11",
              "Merchant Name": "BIGGBY COFFEEon Jul 11, 2024collapsed",
              "Amount": -3.28,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recxSqtypcqQ0uhwj",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "GRAND TAVERNon Jan 17, 2024collapsed",
              "Amount": -12.19,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recxVZ5ioZZMz3Nz1",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-21",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Jun 21, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxWkqgWstkKgaSn",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Mar 15, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxXMy8xzFTlqTal",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-09",
              "Merchant Name": "UNIVERSALMGT0793on Feb 09, 2024collapsed",
              "Amount": 1620.25,
              "Category": "Income: Paychecks/Salary",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxXXISMvBmG5qsD",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 16, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recxi7fZO3Bm3fjNs",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Oct 04, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxkUc2s61PSz8Sz",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-25",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Apr 25, 2024collapsed",
              "Amount": -0.58,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxm2Dy3flXe9nNe",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 04, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recxpAbd8td6karYd",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-21",
              "Merchant Name": "NNT HARU FRESHon Oct 21, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recxpRM4khJ8wtcUM",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on May 03, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recxs5u4XGeJLMLLv",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "THE HOME DEPOTon Jul 05, 2024collapsed",
              "Amount": -31.78,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recxwR36LSwshO7C4",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-16",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Aug 16, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recxx3CHUtU0rdfDY",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-17",
              "Merchant Name": "Online payment from CHK 3on Oct 17, 2024collapsed",
              "Amount": 458.27,
              "Category": "Finance: Bank of America Credit Card Payment",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recxxeTR0uzLWYFtC",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-24",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 24, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "recy1CACtvGP01BrZ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Nov 10, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recy1MDaG0l3J95HK",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-06",
              "Merchant Name": "AMAZON MARKETPLACEon Nov 06, 2024collapsed",
              "Amount": -94.99,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recy7NGYmO3v0f8eQ",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-05",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Jul 05, 2024collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recyCb7JFuO9N3Jvc",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 01, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyDjGSKyCrwVTLg",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-22",
              "Merchant Name": "AVANTI MARKETSon Aug 22, 2024collapsed",
              "Amount": -1.09,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recyEi7Z2esB7y8u5",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-24",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 24, 2024collapsed",
              "Amount": -0.22,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyNved5xdddJ7Qm",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-29",
              "Merchant Name": "GM FINANCIALon Jan 29, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyOdbot46a4QEEJ",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-30",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on May 30, 2024collapsed",
              "Amount": 0.21,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "recyOfKN8pJp5TXNm",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on Feb 23, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyRJ77s7pShcq1W",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-26",
              "Merchant Name": "BIGGBY COFFEEon Aug 26, 2024collapsed",
              "Amount": -3.17,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyUtJuty5h0ZQCQ",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "GM FINANCIALon Oct 28, 2024collapsed",
              "Amount": -540.99,
              "Category": "Transportation: Car Payments",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyVreNbtXta4hw5",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-17",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 17, 2024collapsed",
              "Amount": -1.9,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recya7pqHrvJk0wMQ",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 08, 2023collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyaz9yqUHWfnEER",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-03",
              "Merchant Name": "MR COOPERon Sep 03, 2024collapsed",
              "Amount": -1964.01,
              "Category": "Home & Utilities: Mortgages",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recydeDVdbpJac4dn",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-02",
              "Merchant Name": "TACO BELLon Jan 02, 2024collapsed",
              "Amount": -20.2,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recyfTdrf8b8TqyHy",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "KEEP THE CHANGE TRANSFER TO ACCT 9875on Jan 25, 2024collapsed",
              "Amount": -0.08,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recygbyxjdAQ242zq",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-29",
              "Merchant Name": "WL *STEAM PURCHASon May 29, 2024collapsed",
              "Amount": -31.79,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyhysdhllWp0Hte",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-01",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 01, 2023collapsed",
              "Amount": 50,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Vacation Savings - 7344"
            }
          },
          {
            "id": "recyjdP4Pcu2YTH43",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-12",
              "Merchant Name": "Subway 52751on Mar 12, 2024collapsed",
              "Amount": -8.67,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recykasGhiOhJYonM",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-14",
              "Merchant Name": "LEVY RESTAURANTSon Oct 14, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recylqR31TTyFYT4z",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-24",
              "Merchant Name": "CONSUMERS ENERGYon Oct 24, 2024collapsed",
              "Amount": -25.06,
              "Category": "Home & Utilities: Utilities",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyq0kTSwi2vdUJB",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-03",
              "Merchant Name": "KIT CHEN THAI BY TOEYon Apr 03, 2024collapsed",
              "Amount": -11.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recyqbdlrpJyqdlMR",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 9875on May 10, 2024collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "recyrjT6iND2370Xb",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-08",
              "Merchant Name": "THE HOME DEPOTon Jan 08, 2024collapsed",
              "Amount": -5.24,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recz0zQTttiek1vn1",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-05",
              "Merchant Name": "SQ *VILLAGE SMOKEHOUSE &on Aug 05, 2024collapsed",
              "Amount": -15.26,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recz2X4P7LVUXYVIR",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-20",
              "Merchant Name": "GRAND TAVERNon Jun 20, 2024collapsed",
              "Amount": -13.42,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recz3jVzOa6M6n4qt",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-03",
              "Merchant Name": "CONTINENTAL SERVICESon Nov 03, 2023collapsed",
              "Amount": -1.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recz96mlYMUAemB7E",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-25",
              "Merchant Name": "CONTINENTAL SERVICESon Jan 25, 2024collapsed",
              "Amount": -2.65,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczBXUgmobIOetNP",
            "createdTime": "2024-11-18T01:35:17.000Z",
            "fields": {
              "Date": "2024-09-20",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Sep 20, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczBZWI4jKtUUmb1",
            "createdTime": "2024-11-18T01:35:30.000Z",
            "fields": {
              "Date": "2024-08-08",
              "Merchant Name": "AMAZON MARKETPLACEon Aug 08, 2024collapsed",
              "Amount": -27.55,
              "Category": "Shopping & Entertainment: Hobbies",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczBbgsWIf0qxqlj",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-11",
              "Merchant Name": "HARU FRESH JUICE CARTOONon Nov 11, 2024collapsed",
              "Amount": -3.71,
              "Category": "Groceries: Groceries",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczD202VO0EZjLj8",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-28",
              "Merchant Name": "APPLEon Oct 28, 2024collapsed",
              "Amount": -1.05,
              "Category": "Shopping & Entertainment: Electronics",
              "Account": "Primary Checkings - 3102"
            }
          }
        ],
        "offset": "itrCqRPq15FM4ziEH/reczD202VO0EZjLj8"
      },
      "headers": {
        "content-length": "3854",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/recvc5thE2okQZD8C",
      "ok": true,
      "type": 4
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized",
      "params": "offset=itrCqRPq15FM4ziEH/reczD202VO0EZjLj8",
      "body": null,
      "responseType": "json",
      "withCredentials": false,
      "urlWithParams": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions BofA Categorized?offset=itrCqRPq15FM4ziEH/reczD202VO0EZjLj8",
      "headers": {}
    },
    "response": {
      "body": {
        "records": [
          {
            "id": "reczDyaakOXPTlUTT",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Apr 26, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczEjndCPYlADqEB",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-10",
              "Merchant Name": "LA QUINTA INN AND SUITESon May 10, 2024collapsed",
              "Amount": 100,
              "Category": "Travel: Travel",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczFGKJi46c98yOe",
            "createdTime": "2024-11-18T01:37:35.000Z",
            "fields": {
              "Date": "2024-01-19",
              "Merchant Name": "BIGGBY COFFEEon Jan 19, 2024collapsed",
              "Amount": -4.57,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczFTnxm9dyRrcfm",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-04",
              "Merchant Name": "MULVEY GARDENS Con Nov 04, 2024collapsed",
              "Amount": -200,
              "Category": "Home & Utilities: Home Maintenance",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczJH8DzQT7nWq5i",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-03",
              "Merchant Name": "FLYING J TRAVEL PLAZAon May 03, 2024collapsed",
              "Amount": -47.37,
              "Category": "Transportation: Gasoline/Fuel",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczJRavM1bTu7W2I",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-11",
              "Merchant Name": "BATTERIES PLUSon Dec 11, 2023collapsed",
              "Amount": -5.29,
              "Category": "Shopping & Entertainment: General Merchandise",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczKF3bIIKmwpDgJ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-06",
              "Merchant Name": "CLASSIC FAMILY GRILLon Nov 06, 2023collapsed",
              "Amount": -26.66,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczNPospTtJzgThA",
            "createdTime": "2024-11-18T01:36:39.000Z",
            "fields": {
              "Date": "2024-04-26",
              "Merchant Name": "US DEPT OF EDUCATIONon Apr 26, 2024collapsed",
              "Amount": -260.38,
              "Category": "Education: Education",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczNTtBKVVwJKcBW",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-04",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Oct 04, 2024collapsed",
              "Amount": -20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczRTw85Fxh5MIVT",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-02",
              "Merchant Name": "MEIJERon May 02, 2024collapsed",
              "Amount": -22.35,
              "Category": "Groceries: Groceries",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczTerr9FirA2NCk",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Dec 15, 2023collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczYIHsb4LVJu6zg",
            "createdTime": "2024-11-18T01:37:16.000Z",
            "fields": {
              "Date": "2024-02-23",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Feb 23, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczbGseNEwVy1T9e",
            "createdTime": "2024-11-18T01:37:52.000Z",
            "fields": {
              "Date": "2023-12-15",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO CHK 7139on Dec 15, 2023collapsed",
              "Amount": -125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczbyaryKMwqlfnJ",
            "createdTime": "2024-11-18T01:38:12.000Z",
            "fields": {
              "Date": "2023-11-28",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Nov 28, 2023collapsed",
              "Amount": 3.76,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reczdJ980zUVgio0E",
            "createdTime": "2024-11-18T01:34:48.000Z",
            "fields": {
              "Date": "2024-10-11",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Oct 11, 2024collapsed",
              "Amount": 20,
              "Category": "Savings & Transfers: Transfers",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczeSzXA6BluRt0L",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-22",
              "Merchant Name": "BKOFAMERICA ATM WITHDRWL 15 MILE AND MIon Jul 22, 2024collapsed",
              "Amount": -100,
              "Category": "Cash, Checks & Misc: ATM/Cash Withdrawals",
              "Account": "Spending - 7139"
            }
          },
          {
            "id": "reczn4EGqenElKsGW",
            "createdTime": "2024-11-18T01:36:25.000Z",
            "fields": {
              "Date": "2024-05-07",
              "Merchant Name": "HANEYS FAMILY RESTAURANTon May 07, 2024collapsed",
              "Amount": -13.23,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "recznoQKwAPbb8esz",
            "createdTime": "2024-11-18T01:33:56.000Z",
            "fields": {
              "Date": "2024-11-08",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER TO SAV 7344on Nov 08, 2024collapsed",
              "Amount": -50,
              "Category": "Savings & Transfers: Savings",
              "Account": "Primary Checkings - 3102"
            }
          },
          {
            "id": "reczo2J3noJbbHtcu",
            "createdTime": "2024-11-18T01:36:10.000Z",
            "fields": {
              "Date": "2024-06-24",
              "Merchant Name": "KEEPTHECHANGE CREDIT FROM ACCT3102on Jun 24, 2024collapsed",
              "Amount": 1.48,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          },
          {
            "id": "reczt17Sw9XfzscRI",
            "createdTime": "2024-11-18T01:35:47.000Z",
            "fields": {
              "Date": "2024-07-18",
              "Merchant Name": "GRAND TAVERNon Jul 18, 2024collapsed",
              "Amount": -23.08,
              "Category": "Restaurants & Dining: Restaurants/Dining",
              "Account": "Primary Credit - 5496"
            }
          },
          {
            "id": "reczwS9GHqKJPxhKI",
            "createdTime": "2024-11-18T01:37:00.000Z",
            "fields": {
              "Date": "2024-03-29",
              "Merchant Name": "ONLINE SCHEDULED TRANSFER FROM CHK 3102on Mar 29, 2024collapsed",
              "Amount": 125,
              "Category": "Savings & Transfers: Transfers",
              "Account": "General Savings - 9875"
            }
          }
        ]
      },
      "headers": {
        "content-length": "1298",
        "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "statusText": "OK",
      "url": "https://api.airtable.com/v0/appGkawgVuUsMXjLz/Transactions%20BofA%20Categorized?offset=itrCqRPq15FM4ziEH/reczD202VO0EZjLj8",
      "ok": true,
      "type": 4
    }
  }
]
