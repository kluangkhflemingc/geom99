https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJYaKj0KYdGWARO6p6ilYYczM&destination=place_id:ChIJY2PSdn7iGGARHafx9ZRAPOw&waypoints=place_id:ChIJifjd04UdGWARI4KJ3ThIiYc&mode=bicyling&language=ja&key=AIzaSyBmwxOyg1ApXQKH4GCF4GNbSQVtrti4G4Y

#JSON response

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJYaKj0KYdGWARO6p6ilYYczM",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJifjd04UdGWARI4KJ3ThIiYc",
         "types" : [ "street_address" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJY2PSdn7iGGARHafx9ZRAPOw",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 35.6392241,
               "lng" : 139.3642768
            },
            "southwest" : {
               "lat" : 35.6281176,
               "lng" : 139.3369531
            }
         },
         "copyrights" : "Map data ©2021",
         "legs" : [
            {
               "distance" : {
                  "text" : "2.7 km",
                  "value" : 2684
               },
               "duration" : {
                  "text" : "7分",
                  "value" : 404
               },
               "end_address" : "日本、〒192-0912 東京都八王子市絹ケ丘１丁目３−７",
               "end_location" : {
                  "lat" : 35.6392241,
                  "lng" : 139.3599792
               },
               "start_address" : "日本、〒192-0982 東京都八王子市片倉町１４０４−１",
               "start_location" : {
                  "lat" : 35.6281176,
                  "lng" : 139.3369531
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 324
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 35.6308666,
                        "lng" : 139.3381254
                     },
                     "html_instructions" : "\u003cb\u003e北\u003c/b\u003e方向に\u003cb\u003e東京環状\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e国道16号\u003c/b\u003eを進む",
                     "polyline" : {
                        "points" : "wrmxE}fmqYICGCICm@SEAEAm@Sc@Om@QqAc@ICw@WuAc@QGYKc@OUI"
                     },
                     "start_location" : {
                        "lat" : 35.6281176,
                        "lng" : 139.3369531
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2338
                     },
                     "duration" : {
                        "text" : "6分",
                        "value" : 361
                     },
                     "end_location" : {
                        "lat" : 35.6390533,
                        "lng" : 139.3601084
                     },
                     "html_instructions" : "\u003cb\u003e片倉高校前（交差点）\u003c/b\u003e を\u003cb\u003e右折\u003c/b\u003eする",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}cnxEinmqYOEVm@TeANm@He@DWDWB[BUDi@@W@[?U?g@?a@AUA]CYAUCOAGCUCSCOAEAIAEAGUsA?AIg@AGIa@Ge@Kg@?GAEm@mDy@eFOaAQcAO{@G]Mu@Ii@O_A[qBKi@EUCSG[EYGYIg@SsAUoAG_@UwAMu@CMM{@Mq@Ie@Ik@_@}BQaA?AKi@Kq@CMM}@UqAEUW_BAG?CAAAMCKKi@I[EOCGGUGQEICGEKISEGGKOYIKGKOSOQGIIISSKIKIWOIGIEc@Ug@UkAg@iBw@UKGEECMIMIYSe@a@s@q@UYOOMOMQKQw@qAKSa@q@y@uACECCMSMSKSMSKQIUWo@"
                     },
                     "start_location" : {
                        "lat" : 35.6308666,
                        "lng" : 139.3381254
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22 m",
                        "value" : 22
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 35.6392241,
                        "lng" : 139.3599792
                     },
                     "html_instructions" : "\u003cb\u003e左折\u003c/b\u003eする\u003cdiv style=\"font-size:0.9em\"\u003e目的地は前方左側です\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "awoxEuwqqY_@VA@"
                     },
                     "start_location" : {
                        "lat" : 35.6390533,
                        "lng" : 139.3601084
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.7 km",
                  "value" : 659
               },
               "duration" : {
                  "text" : "2分",
                  "value" : 131
               },
               "end_address" : "日本、〒192-0907 東京都八王子市長沼町 長沼公園",
               "end_location" : {
                  "lat" : 35.6365683,
                  "lng" : 139.3642768
               },
               "start_address" : "日本、〒192-0912 東京都八王子市絹ケ丘１丁目３−７",
               "start_location" : {
                  "lat" : 35.6392241,
                  "lng" : 139.3599792
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "22 m",
                        "value" : 22
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 35.6390533,
                        "lng" : 139.3601084
                     },
                     "html_instructions" : "\u003cb\u003e南東\u003c/b\u003eに進む",
                     "polyline" : {
                        "points" : "cxoxE{vqqY@A^W"
                     },
                     "start_location" : {
                        "lat" : 35.6392241,
                        "lng" : 139.3599792
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "37 m",
                        "value" : 37
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 35.6388773,
                        "lng" : 139.3597622
                     },
                     "html_instructions" : "\u003cb\u003e右折\u003c/b\u003eして \u003cb\u003e野猿街道\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e都道160号\u003c/b\u003e に向かう",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "awoxEuwqqYVn@HT"
                     },
                     "start_location" : {
                        "lat" : 35.6390533,
                        "lng" : 139.3601084
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 425
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 35.6358634,
                        "lng" : 139.3626581
                     },
                     "html_instructions" : "\u003cb\u003e絹ケ丘二丁目（交差点）\u003c/b\u003e を\u003cb\u003e左折\u003c/b\u003eして \u003cb\u003e野猿街道\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e都道160号\u003c/b\u003e に入る",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_voxEouqqYXWBCv@u@POZ[|@}@`@_@v@w@PQLMBCz@{@n@o@NOZ[FGVUTUNMNMDEHGJIPK"
                     },
                     "start_location" : {
                        "lat" : 35.6388773,
                        "lng" : 139.3597622
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 175
                     },
                     "duration" : {
                        "text" : "1分",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 35.6365683,
                        "lng" : 139.3642768
                     },
                     "html_instructions" : "\u003cb\u003e光照寺北（交差点）\u003c/b\u003e を\u003cb\u003e左折\u003c/b\u003eする\u003cdiv style=\"font-size:0.9em\"\u003e目的地は前方右側です\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ccoxEsgrqYLI[u@ACUm@s@iBYs@Wq@AA"
                     },
                     "start_location" : {
                        "lat" : 35.6358634,
                        "lng" : 139.3626581
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "wrmxE}fmqYoOaFe@OVm@TeAXsAJo@NsB@{BIcBMaAk@kDgGk_@yIei@_@}AYy@]s@q@eAu@y@y@k@aDyAmCmA{AiAgBkB}AiCcBqCu@oAUg@Wo@_@VA@@A^WVn@HTXWz@y@lCiCzA{A|EyEj@e@^U]y@{B}FAA"
         },
         "summary" : "東京環状/国道16号",
         "warnings" : [],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}