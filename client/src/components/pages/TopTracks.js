import React from 'react';
import { Card } from 'react-bootstrap';
import './Style/Header.css';
import './Banner.css';
import {BrowserRouter as Router, NavLink, Route, Switch, withRouter} from 'react-router-dom';

export default function TopTracks(props) {
    const sampleJSON = {
      "items": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3IunaFjvNKj98JW89JYv9u"
          },
          "followers": {
            "href": null,
            "total": 459899
          },
          "genres": [
            "electropop",
            "indie pop",
            "indie poptimism",
            "indietronica",
            "modern dream pop",
            "vapor soul"
          ],
          "href": "https://api.spotify.com/v1/artists/3IunaFjvNKj98JW89JYv9u",
          "id": "3IunaFjvNKj98JW89JYv9u",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/848b92c2487efb37ba4c75bc25a242c7b2785440",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/a005f5855f1c4a0dbd37881b54c8e622ac163583",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/c5f2f549524e66b5d3792419bc894257ae72b67c",
              "width": 160
            }
          ],
          "name": "The Japanese House",
          "popularity": 65,
          "type": "artist",
          "uri": "spotify:artist:3IunaFjvNKj98JW89JYv9u"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
          },
          "followers": {
            "href": null,
            "total": 29604326
          },
          "genres": [
            "permanent wave",
            "pop"
          ],
          "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
          "id": "4gzpq5DPGxSnKTe4SA8HAU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4ffd6710617d289699cc0df60cf975e316025119",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/6397b6a29c8d9081412e09feb53600f8c9a18313",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/73a21de115738931d6c7760408ed367812b55ccd",
              "width": 160
            }
          ],
          "name": "Coldplay",
          "popularity": 89,
          "type": "artist",
          "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/63MQldklfxkjYDoUE4Tppz"
          },
          "followers": {
            "href": null,
            "total": 1880117
          },
          "genres": [
            "french shoegaze",
            "french synthpop",
            "indietronica",
            "metropopolis",
            "neo-synthpop"
          ],
          "href": "https://api.spotify.com/v1/artists/63MQldklfxkjYDoUE4Tppz",
          "id": "63MQldklfxkjYDoUE4Tppz",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ad6186e7279ea9609926e92c05688cf89312ae4e",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/cb6f1c1fa5fa6351cd082f5469090dd635b64ae2",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/415d9c9ed43df95f53f8ca48e0f69b24cfc5dca2",
              "width": 160
            }
          ],
          "name": "M83",
          "popularity": 73,
          "type": "artist",
          "uri": "spotify:artist:63MQldklfxkjYDoUE4Tppz"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam"
          },
          "followers": {
            "href": null,
            "total": 874580
          },
          "genres": [
            "brostep",
            "complextro",
            "edm",
            "electro house",
            "moombahton",
            "pop dance",
            "progressive electro house"
          ],
          "href": "https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam",
          "id": "3dz0NnIZhtKKeXZxLOxCam",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/efe8eaa8aae32d3ee4948bb59fd044742b4bf4bb",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/3c172c3810cd65ad204ffe07e7983e48e929f229",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/acc9781b4b49e083a432a3f305a16543b3eedf7f",
              "width": 160
            }
          ],
          "name": "Porter Robinson",
          "popularity": 68,
          "type": "artist",
          "uri": "spotify:artist:3dz0NnIZhtKKeXZxLOxCam"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0jNDKefhfSbLR9sFvcPLHo"
          },
          "followers": {
            "href": null,
            "total": 620191
          },
          "genres": [
            "edm",
            "electro house",
            "electronic trap",
            "electropop",
            "future bass",
            "pop dance",
            "pop edm",
            "vapor twitch"
          ],
          "href": "https://api.spotify.com/v1/artists/0jNDKefhfSbLR9sFvcPLHo",
          "id": "0jNDKefhfSbLR9sFvcPLHo",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/65ac17c15f49dbd226f321e986a874471df303da",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/250f36133e876c3c9d9fdb18cfc65abcb5181517",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/05fdbc52f91c2038e3c29d1995347d1b29cf7d70",
              "width": 160
            }
          ],
          "name": "San Holo",
          "popularity": 66,
          "type": "artist",
          "uri": "spotify:artist:0jNDKefhfSbLR9sFvcPLHo"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7wg1qvie3KqDNQbAkTdbX0"
          },
          "followers": {
            "href": null,
            "total": 404261
          },
          "genres": [
            "edm",
            "electropop",
            "indie poptimism",
            "pop",
            "tropical house"
          ],
          "href": "https://api.spotify.com/v1/artists/7wg1qvie3KqDNQbAkTdbX0",
          "id": "7wg1qvie3KqDNQbAkTdbX0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/f847a408460d6f4f4b6c8416df55bae7f687accb",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/efa025d2eabf9ff1613117f8a2de31ee5447b7fa",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/87af897f01efcfc75331e6ee812a9822e03b0881",
              "width": 160
            }
          ],
          "name": "Louis The Child",
          "popularity": 73,
          "type": "artist",
          "uri": "spotify:artist:7wg1qvie3KqDNQbAkTdbX0"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1btWGBz4Uu1HozTwb2Lm8A"
          },
          "followers": {
            "href": null,
            "total": 445295
          },
          "genres": [
            "indie pop",
            "indie poptimism",
            "indie rock",
            "minneapolis indie",
            "modern alternative rock",
            "modern rock"
          ],
          "href": "https://api.spotify.com/v1/artists/1btWGBz4Uu1HozTwb2Lm8A",
          "id": "1btWGBz4Uu1HozTwb2Lm8A",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/8566896482ed0a0e3c0bd4503ca3ae0c1950f019",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/777433ea9f3d9aa3cf600d67655a16f41cc10fdf",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/536155e4c4a744137e218e638d32c87ceb5e3679",
              "width": 160
            }
          ],
          "name": "Hippo Campus",
          "popularity": 68,
          "type": "artist",
          "uri": "spotify:artist:1btWGBz4Uu1HozTwb2Lm8A"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/677sHrkjhB7IP4YwjzZyc4"
          },
          "followers": {
            "href": null,
            "total": 128274
          },
          "genres": [
            "australian indie"
          ],
          "href": "https://api.spotify.com/v1/artists/677sHrkjhB7IP4YwjzZyc4",
          "id": "677sHrkjhB7IP4YwjzZyc4",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4ea725e85491646c3a050f0d6c9439cc2048bd38",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/0173fdd0f88737b89bbba978afb46bf0fba73476",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/873de24f5cd08c631f3f032d7cc42625aec0349e",
              "width": 160
            }
          ],
          "name": "Last Dinosaurs",
          "popularity": 55,
          "type": "artist",
          "uri": "spotify:artist:677sHrkjhB7IP4YwjzZyc4"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4pb4rqWSoGUgxm63xmJ8xc"
          },
          "followers": {
            "href": null,
            "total": 567160
          },
          "genres": [
            "complextro",
            "edm",
            "electro house",
            "electropop",
            "filter house",
            "future bass",
            "nantes indie",
            "pop dance"
          ],
          "href": "https://api.spotify.com/v1/artists/4pb4rqWSoGUgxm63xmJ8xc",
          "id": "4pb4rqWSoGUgxm63xmJ8xc",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/426e0d784cfc0dfe8f3275e32850223232835c14",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/d12113789d3953523b7b2c2f0ef53871605fed1c",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/3f4c99a2932c2e21fc966123050cd92fe4ff0c15",
              "width": 160
            }
          ],
          "name": "Madeon",
          "popularity": 64,
          "type": "artist",
          "uri": "spotify:artist:4pb4rqWSoGUgxm63xmJ8xc"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1QAJqy2dA3ihHBFIHRphZj"
          },
          "followers": {
            "href": null,
            "total": 2206527
          },
          "genres": [
            "ambient pop",
            "dream pop",
            "el paso indie",
            "shoegaze"
          ],
          "href": "https://api.spotify.com/v1/artists/1QAJqy2dA3ihHBFIHRphZj",
          "id": "1QAJqy2dA3ihHBFIHRphZj",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/074a07d0cbf2a30290b5b55b152952e3c7011341",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/d34e8cb22455b5d6f49fdeefa7263a2954a9909b",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/d6674301d1a4ab5fa3ad566bc9a65c54a1564e68",
              "width": 160
            }
          ],
          "name": "Cigarettes After Sex",
          "popularity": 77,
          "type": "artist",
          "uri": "spotify:artist:1QAJqy2dA3ihHBFIHRphZj"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl"
          },
          "followers": {
            "href": null,
            "total": 2010159
          },
          "genres": [
            "alternative dance",
            "indie rock",
            "indietronica",
            "irish rock",
            "modern alternative rock",
            "modern rock",
            "northern irish indie",
            "rock"
          ],
          "href": "https://api.spotify.com/v1/artists/536BYVgOnRky0xjsPT96zl",
          "id": "536BYVgOnRky0xjsPT96zl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/cf4b5c4129059163149e43ea3466557e8e05642f",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/df9bb5d891969f8b40cb8dc9cdceff8b3903f5a7",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/9c481839eb1f7848a985913885e64427b8432a10",
              "width": 160
            }
          ],
          "name": "Two Door Cinema Club",
          "popularity": 72,
          "type": "artist",
          "uri": "spotify:artist:536BYVgOnRky0xjsPT96zl"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/28Ky95tmlHktB96DBUoB0g"
          },
          "followers": {
            "href": null,
            "total": 200530
          },
          "genres": [
            "brostep",
            "chillstep",
            "edm",
            "electro house",
            "gaming edm"
          ],
          "href": "https://api.spotify.com/v1/artists/28Ky95tmlHktB96DBUoB0g",
          "id": "28Ky95tmlHktB96DBUoB0g",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/1c723bf56629dfabacb47eaaa9d635b677e18477",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/e33168d8b1a95822d2ca67e59b0149d4e7f8bd09",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/e4c860f658ea7405b026703c9ded08149a0142c4",
              "width": 160
            }
          ],
          "name": "Tristam",
          "popularity": 60,
          "type": "artist",
          "uri": "spotify:artist:28Ky95tmlHktB96DBUoB0g"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
          },
          "followers": {
            "href": null,
            "total": 33466738
          },
          "genres": [
            "modern rock",
            "rock"
          ],
          "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
          "id": "53XhwfbYqKCa1cC15pYq2q",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/949d57988ca389b49133ebd6f8f99ef96fb52ab8",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/eeabcdcf1182bb2d5d4f5ebca06e0f1a9fdb07e6",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/c388ab0de4663d7c0e7c433bd8f926819255d922",
              "width": 160
            }
          ],
          "name": "Imagine Dragons",
          "popularity": 90,
          "type": "artist",
          "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
          },
          "followers": {
            "href": null,
            "total": 7588332
          },
          "genres": [
            "electro",
            "filter house"
          ],
          "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
          "id": "4tZwfgrHOc3mvqYlEYSvVi",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b8aaf4b179bb0a52f29a810fdb0f9d5c16ec2c75",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/8e189c820ba32ffd332393eb60cb1def63bed070",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/70bedd072be9725a0b05e07e3338959e826e7dd7",
              "width": 160
            }
          ],
          "name": "Daft Punk",
          "popularity": 87,
          "type": "artist",
          "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6GAoXkyadLFOLLkZrHWlOR"
          },
          "followers": {
            "href": null,
            "total": 14240
          },
          "genres": [
            "instrumental math rock",
            "pinoy indie",
            "southeast asian post-rock"
          ],
          "href": "https://api.spotify.com/v1/artists/6GAoXkyadLFOLLkZrHWlOR",
          "id": "6GAoXkyadLFOLLkZrHWlOR",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/520dff9c7be399064245328a8d355327010c20d3",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/241ca76af4ed9f9a9db5ac06790d6fbc0c1c9a08",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/0a1d140033c581da74053d454846f367ba145624",
              "width": 160
            }
          ],
          "name": "tide/edit",
          "popularity": 29,
          "type": "artist",
          "uri": "spotify:artist:6GAoXkyadLFOLLkZrHWlOR"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5NtMqQLCzdVvL7F8vFp3zM"
          },
          "followers": {
            "href": null,
            "total": 54159
          },
          "genres": [
            "alternative rock",
            "art pop",
            "dream pop",
            "freak folk",
            "hyperpop",
            "nu gaze",
            "shoegaze",
            "vaporwave"
          ],
          "href": "https://api.spotify.com/v1/artists/5NtMqQLCzdVvL7F8vFp3zM",
          "id": "5NtMqQLCzdVvL7F8vFp3zM",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732aa34d5906e01231eff70f82",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022aa34d5906e01231eff70f82",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512aa34d5906e01231eff70f82",
              "width": 64
            }
          ],
          "name": "Sweet Trip",
          "popularity": 55,
          "type": "artist",
          "uri": "spotify:artist:5NtMqQLCzdVvL7F8vFp3zM"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2uDsUIyCIqk9wKj17I8WAH"
          },
          "followers": {
            "href": null,
            "total": 52265
          },
          "genres": [
            "anime score",
            "chiptune",
            "japanese vgm",
            "video game music"
          ],
          "href": "https://api.spotify.com/v1/artists/2uDsUIyCIqk9wKj17I8WAH",
          "id": "2uDsUIyCIqk9wKj17I8WAH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273793e0fabd5474507ee081532",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02793e0fabd5474507ee081532",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851793e0fabd5474507ee081532",
              "width": 64
            }
          ],
          "name": "Yoko Shimomura",
          "popularity": 57,
          "type": "artist",
          "uri": "spotify:artist:2uDsUIyCIqk9wKj17I8WAH"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/32zeX1IoVKAGWMyy1isKUq"
          },
          "followers": {
            "href": null,
            "total": 265002
          },
          "genres": [
            "indie garage rock",
            "indie pop",
            "indie surf"
          ],
          "href": "https://api.spotify.com/v1/artists/32zeX1IoVKAGWMyy1isKUq",
          "id": "32zeX1IoVKAGWMyy1isKUq",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/bb43ca0cc9c74530f2373b54d2d411ade982efc4",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/fb18bd3ed65d592f63278066bf88f3d0ee839872",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/2a2aa44b7155049d1817fb37a1db6a60effb8af2",
              "width": 160
            }
          ],
          "name": "No Vacation",
          "popularity": 60,
          "type": "artist",
          "uri": "spotify:artist:32zeX1IoVKAGWMyy1isKUq"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1WOhabhnnH1k6KcD81xGD1"
          },
          "followers": {
            "href": null,
            "total": 26361
          },
          "genres": [
            "american shoegaze",
            "dream pop",
            "dreamgaze",
            "indie shoegaze",
            "nu gaze",
            "shoegaze"
          ],
          "href": "https://api.spotify.com/v1/artists/1WOhabhnnH1k6KcD81xGD1",
          "id": "1WOhabhnnH1k6KcD81xGD1",
          "images": [
            {
              "height": 1000,
              "url": "https://i.scdn.co/image/cb1acf44fe3826353500e2a2e5adaf66758f7b38",
              "width": 1000
            },
            {
              "height": 640,
              "url": "https://i.scdn.co/image/472e5db7b6de84d150c1aabcf65f7c76c81cc75d",
              "width": 640
            },
            {
              "height": 200,
              "url": "https://i.scdn.co/image/5258d81e2481f95443f73d9b8cfb1a8ac32de615",
              "width": 200
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/e1ce469b4e34992acf56358fa3cd471b9fda9820",
              "width": 64
            }
          ],
          "name": "Airiel",
          "popularity": 41,
          "type": "artist",
          "uri": "spotify:artist:1WOhabhnnH1k6KcD81xGD1"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0MeLMJJcouYXCymQSHPn8g"
          },
          "followers": {
            "href": null,
            "total": 1058193
          },
          "genres": [
            "ambient worship",
            "chamber pop",
            "dreamo",
            "indie cafe pop",
            "pop"
          ],
          "href": "https://api.spotify.com/v1/artists/0MeLMJJcouYXCymQSHPn8g",
          "id": "0MeLMJJcouYXCymQSHPn8g",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/3be0a187bf6b62b347cb7dd2578b0e4880ba05cd",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/79c3960bf7652d088dd840b1071b7ae504b35ec7",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/31b4008bbde5a35e757c4488cb2dbd5a43630b9c",
              "width": 160
            }
          ],
          "name": "Sleeping At Last",
          "popularity": 76,
          "type": "artist",
          "uri": "spotify:artist:0MeLMJJcouYXCymQSHPn8g"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2hR4h1Cao2ueuI7Cx9c7V8"
          },
          "followers": {
            "href": null,
            "total": 1804045
          },
          "genres": [
            "alt z",
            "bedroom pop",
            "indie pop",
            "modern rock"
          ],
          "href": "https://api.spotify.com/v1/artists/2hR4h1Cao2ueuI7Cx9c7V8",
          "id": "2hR4h1Cao2ueuI7Cx9c7V8",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/1b4b66ca410bcb390090fa0eee409fcbd44d19b1",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/0dd37ecd805bb5e28497ee6469d4f5c1c11fdeda",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/97d55ded3aa478a4bbdd9d299b8ec7af5d9ec38a",
              "width": 160
            }
          ],
          "name": "Cavetown",
          "popularity": 79,
          "type": "artist",
          "uri": "spotify:artist:2hR4h1Cao2ueuI7Cx9c7V8"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
          },
          "followers": {
            "href": null,
            "total": 1063402
          },
          "genres": [
            "edm",
            "electropop",
            "melodic dubstep",
            "pop",
            "pop dance",
            "tropical house"
          ],
          "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
          "id": "45eNHdiiabvmbp4erw26rg",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb7b87c1fd98276426c7ba57e9",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051747b87c1fd98276426c7ba57e9",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1787b87c1fd98276426c7ba57e9",
              "width": 160
            }
          ],
          "name": "ILLENIUM",
          "popularity": 79,
          "type": "artist",
          "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
          },
          "followers": {
            "href": null,
            "total": 11374859
          },
          "genres": [
            "garage rock",
            "modern rock",
            "permanent wave",
            "rock",
            "sheffield indie"
          ],
          "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          "id": "7Ln80lUS6He07XvHI8qqHH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/b435e99aa7f1e27db56b6a4dc9df85e5636b22d6",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/73c4e49abed008fe0c5e4f1437b8b486c7670ecd",
              "width": 160
            }
          ],
          "name": "Arctic Monkeys",
          "popularity": 88,
          "type": "artist",
          "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5cIc3SBFuBLVxJz58W2tU9"
          },
          "followers": {
            "href": null,
            "total": 980749
          },
          "genres": [
            "electropop",
            "indie pop",
            "indie poptimism",
            "modern rock",
            "pop"
          ],
          "href": "https://api.spotify.com/v1/artists/5cIc3SBFuBLVxJz58W2tU9",
          "id": "5cIc3SBFuBLVxJz58W2tU9",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b34c6322f787c61e0be5616c59d528de9aaf5a09",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/f1303bf356978499f4823ec7556ea473c0c5b343",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/4675c2e30d1327f9a4c468495532d1e0b2d0285a",
              "width": 160
            }
          ],
          "name": "Oh Wonder",
          "popularity": 73,
          "type": "artist",
          "uri": "spotify:artist:5cIc3SBFuBLVxJz58W2tU9"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1xU878Z1QtBldR7ru9owdU"
          },
          "followers": {
            "href": null,
            "total": 1672482
          },
          "genres": [
            "alternative dance",
            "dance-punk",
            "indie pop",
            "indie rock",
            "modern rock",
            "new rave",
            "rock independant francais"
          ],
          "href": "https://api.spotify.com/v1/artists/1xU878Z1QtBldR7ru9owdU",
          "id": "1xU878Z1QtBldR7ru9owdU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a64377f63086e90368b6ca73a4f44fd179d3f68e",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/8fa8973bec63f13d4f216bc3b95b7192cb914ed0",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/5c26cead33f3ff14e218faeb5c6b8677fd42f1ef",
              "width": 160
            }
          ],
          "name": "Phoenix",
          "popularity": 68,
          "type": "artist",
          "uri": "spotify:artist:1xU878Z1QtBldR7ru9owdU"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/72X6FHxaShda0XeQw3vbeF"
          },
          "followers": {
            "href": null,
            "total": 407228
          },
          "genres": [
            "alternative rock",
            "art pop",
            "dream pop",
            "indie pop",
            "indie rock",
            "nu gaze",
            "reading indie",
            "shoegaze"
          ],
          "href": "https://api.spotify.com/v1/artists/72X6FHxaShda0XeQw3vbeF",
          "id": "72X6FHxaShda0XeQw3vbeF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4d414dfb875ea4ed384f84b0169ddb134f8d3b36",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/b9755a805f861487171c9d4c8bda4c839551d7e6",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/9f4ffcb032cccd1e80e5604b1ce864232c2aba61",
              "width": 160
            }
          ],
          "name": "Slowdive",
          "popularity": 62,
          "type": "artist",
          "uri": "spotify:artist:72X6FHxaShda0XeQw3vbeF"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq"
          },
          "followers": {
            "href": null,
            "total": 5413863
          },
          "genres": [
            "complextro",
            "dance pop",
            "edm",
            "electro house",
            "electropop",
            "german techno",
            "pop",
            "pop dance",
            "post-teen pop",
            "tropical house"
          ],
          "href": "https://api.spotify.com/v1/artists/2qxJFvFYMEDqd7ui6kSAcq",
          "id": "2qxJFvFYMEDqd7ui6kSAcq",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/2d6c24e979a799b52a5ae2b5510793182f1202b4",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/1978f000ddf398da5c7b5b891560b6ec17ce0f92",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/7c5d8fc31376315a5e00e1adac37d7e815bbfdd2",
              "width": 160
            }
          ],
          "name": "Zedd",
          "popularity": 81,
          "type": "artist",
          "uri": "spotify:artist:2qxJFvFYMEDqd7ui6kSAcq"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7q3OTml6VefMn69k5EOwnx"
          },
          "followers": {
            "href": null,
            "total": 22898
          },
          "genres": [
            "otacore"
          ],
          "href": "https://api.spotify.com/v1/artists/7q3OTml6VefMn69k5EOwnx",
          "id": "7q3OTml6VefMn69k5EOwnx",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb8a5734c39f84edb3fac082e8",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051748a5734c39f84edb3fac082e8",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1788a5734c39f84edb3fac082e8",
              "width": 160
            }
          ],
          "name": "Project Destati",
          "popularity": 46,
          "type": "artist",
          "uri": "spotify:artist:7q3OTml6VefMn69k5EOwnx"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7FBcuc1gsnv6Y1nwFtNRCb"
          },
          "followers": {
            "href": null,
            "total": 5794768
          },
          "genres": [
            "emo",
            "pop punk"
          ],
          "href": "https://api.spotify.com/v1/artists/7FBcuc1gsnv6Y1nwFtNRCb",
          "id": "7FBcuc1gsnv6Y1nwFtNRCb",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/bab47daddd2c01b0ee83e54536aa7e2c77ba7c14",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/5182b00b3542c77889971c8618c4a46eded49e2a",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/5cfd00d5a655ea9b7466f2a0e3372505cb399870",
              "width": 160
            }
          ],
          "name": "My Chemical Romance",
          "popularity": 81,
          "type": "artist",
          "uri": "spotify:artist:7FBcuc1gsnv6Y1nwFtNRCb"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW"
          },
          "followers": {
            "href": null,
            "total": 4839951
          },
          "genres": [
            "modern alternative rock",
            "modern rock",
            "nu gaze",
            "pop",
            "post-teen pop",
            "rock"
          ],
          "href": "https://api.spotify.com/v1/artists/3mIj9lX2MWuHmhNCA7LSCW",
          "id": "3mIj9lX2MWuHmhNCA7LSCW",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/94dd2feca73bdfb7e1c12751b499ec0a46024866",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/05dcebda5c8594a51eeb4b3333572342152b6c38",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/1717dac024e71f64ec421a658c7a9769d41ce251",
              "width": 160
            }
          ],
          "name": "The 1975",
          "popularity": 81,
          "type": "artist",
          "uri": "spotify:artist:3mIj9lX2MWuHmhNCA7LSCW"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Riv2KnFcLZA3JSVryRg4y"
          },
          "followers": {
            "href": null,
            "total": 229547
          },
          "genres": [
            "anime score",
            "japanese soundtrack",
            "otacore"
          ],
          "href": "https://api.spotify.com/v1/artists/0Riv2KnFcLZA3JSVryRg4y",
          "id": "0Riv2KnFcLZA3JSVryRg4y",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/7d49d81da712574ad70809df6545552e47856274",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/15fbe2c64d8ac2e964609233d7f29a3b538ce5ab",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/655518dd6f72d8f1a2e511b9b18dd8595ffe8816",
              "width": 160
            }
          ],
          "name": "Hiroyuki Sawano",
          "popularity": 73,
          "type": "artist",
          "uri": "spotify:artist:0Riv2KnFcLZA3JSVryRg4y"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2feOOr1Yjovo67byuxvjZv"
          },
          "followers": {
            "href": null,
            "total": 40320
          },
          "genres": [
            "american shoegaze",
            "dream pop",
            "nu gaze",
            "shoegaze"
          ],
          "href": "https://api.spotify.com/v1/artists/2feOOr1Yjovo67byuxvjZv",
          "id": "2feOOr1Yjovo67byuxvjZv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273be9bb007638d6e2a0f64cab0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02be9bb007638d6e2a0f64cab0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851be9bb007638d6e2a0f64cab0",
              "width": 64
            }
          ],
          "name": "LSD and the Search for God",
          "popularity": 44,
          "type": "artist",
          "uri": "spotify:artist:2feOOr1Yjovo67byuxvjZv"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/74XFHRwlV6OrjEM0A2NCMF"
          },
          "followers": {
            "href": null,
            "total": 5887716
          },
          "genres": [
            "candy pop",
            "emo",
            "pixie",
            "pop emo",
            "pop punk"
          ],
          "href": "https://api.spotify.com/v1/artists/74XFHRwlV6OrjEM0A2NCMF",
          "id": "74XFHRwlV6OrjEM0A2NCMF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb37aba5aee184d42634bd9960",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab6761610000517437aba5aee184d42634bd9960",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f17837aba5aee184d42634bd9960",
              "width": 160
            }
          ],
          "name": "Paramore",
          "popularity": 81,
          "type": "artist",
          "uri": "spotify:artist:74XFHRwlV6OrjEM0A2NCMF"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0QaiCsyOUjBgLqsbABu07O"
          },
          "followers": {
            "href": null,
            "total": 31045
          },
          "genres": [
            "edm",
            "electro house",
            "future bass",
            "gaming edm",
            "pop edm"
          ],
          "href": "https://api.spotify.com/v1/artists/0QaiCsyOUjBgLqsbABu07O",
          "id": "0QaiCsyOUjBgLqsbABu07O",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/458098522469408362201f64a422d9d62987c98b",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/0f4f6206de74e409fc4c6897ab3a6abffc76eb06",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/f801932f2b39029797278b53dbe387253c81e489",
              "width": 160
            }
          ],
          "name": "Puppet",
          "popularity": 46,
          "type": "artist",
          "uri": "spotify:artist:0QaiCsyOUjBgLqsbABu07O"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3C8RpaI3Go0yFF9whvKoED"
          },
          "followers": {
            "href": null,
            "total": 375619
          },
          "genres": [
            "alternative dance",
            "australian alternative rock",
            "australian dance",
            "collage pop",
            "electronica",
            "new rave",
            "psychedelic hip hop"
          ],
          "href": "https://api.spotify.com/v1/artists/3C8RpaI3Go0yFF9whvKoED",
          "id": "3C8RpaI3Go0yFF9whvKoED",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/566f17215cf29d498e0e17669a4704a805d19e4f",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/bf6487fffae20bde4e7bc80c9b4d5f122bb12b00",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/e6350422ffc03000e74055e913f52eeeaa01ec9e",
              "width": 160
            }
          ],
          "name": "The Avalanches",
          "popularity": 67,
          "type": "artist",
          "uri": "spotify:artist:3C8RpaI3Go0yFF9whvKoED"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/56ZTgzPBDge0OvCGgMO3OY"
          },
          "followers": {
            "href": null,
            "total": 1128477
          },
          "genres": [
            "art pop",
            "baltimore indie",
            "chillwave",
            "dream pop",
            "indie pop",
            "indie rock",
            "modern dream pop"
          ],
          "href": "https://api.spotify.com/v1/artists/56ZTgzPBDge0OvCGgMO3OY",
          "id": "56ZTgzPBDge0OvCGgMO3OY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b34aff7ff25bb5882346fee11f05a46f38fbfbd3",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/13fd407d5bd9a056e4f2cbdbbe27f2e44e0d0a4b",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ae5990c725d013e72cef504be145116707f2e2db",
              "width": 160
            }
          ],
          "name": "Beach House",
          "popularity": 72,
          "type": "artist",
          "uri": "spotify:artist:56ZTgzPBDge0OvCGgMO3OY"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh"
          },
          "followers": {
            "href": null,
            "total": 5822112
          },
          "genres": [
            "modern alternative rock",
            "modern rock",
            "pop",
            "shimmer pop"
          ],
          "href": "https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh",
          "id": "77SW9BnxLY8rJ0RciFqkHh",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/81d31c929ec253818512cd51aacdc6e6960f78bd",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/81f4a1c7694358c2d764e89b397113966cfcad49",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/a09144d21029bd159d1e3777cb9bea17ba73464a",
              "width": 160
            }
          ],
          "name": "The Neighbourhood",
          "popularity": 86,
          "type": "artist",
          "uri": "spotify:artist:77SW9BnxLY8rJ0RciFqkHh"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
          },
          "followers": {
            "href": null,
            "total": 1912432
          },
          "genres": [
            "classic j-pop",
            "j-pop",
            "japanese singer-songwriter"
          ],
          "href": "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
          "id": "7lbSsjYACZHn1MSDXPxNF2",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/11b6c9e4120f57a48f8f085fb426b63f41ee5511",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/4f8f9d891372cab167c14d40ca3e0962fb5af50a",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/d784a787ebe6c70c328585a4ab457a5be25e1580",
              "width": 160
            }
          ],
          "name": "Hikaru Utada",
          "popularity": 73,
          "type": "artist",
          "uri": "spotify:artist:7lbSsjYACZHn1MSDXPxNF2"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
          },
          "followers": {
            "href": null,
            "total": 21504107
          },
          "genres": [
            "dance pop",
            "edm",
            "electro house",
            "house",
            "pop",
            "pop dance",
            "progressive house",
            "uk dance"
          ],
          "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
          "id": "7CajNmpbOovFoOoasH2HaY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/af53b9a94b36d4d1af390841f23b7d7c4fcaf9b8",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/b5715c66c44c91f5cd98bb7ce99fcc9f7eba69c6",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/86c5f96479cd660cce7f8c8c84187242e02dba34",
              "width": 160
            }
          ],
          "name": "Calvin Harris",
          "popularity": 88,
          "type": "artist",
          "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6nxWCVXbOlEVRexSbLsTer"
          },
          "followers": {
            "href": null,
            "total": 2152126
          },
          "genres": [
            "australian dance",
            "australian electropop",
            "australian indie",
            "downtempo",
            "edm"
          ],
          "href": "https://api.spotify.com/v1/artists/6nxWCVXbOlEVRexSbLsTer",
          "id": "6nxWCVXbOlEVRexSbLsTer",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb4e8f7cc328f1283f9c8adde1",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051744e8f7cc328f1283f9c8adde1",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1784e8f7cc328f1283f9c8adde1",
              "width": 160
            }
          ],
          "name": "Flume",
          "popularity": 77,
          "type": "artist",
          "uri": "spotify:artist:6nxWCVXbOlEVRexSbLsTer"
        }
      ],
      "total": 50,
      "limit": 40,
      "offset": 0,
      "previous": null,
      "href": "https://api.spotify.com/v1/me/top/artists?limit=40&offset=0",
      "next": "https://api.spotify.com/v1/me/top/artists?limit=40&offset=40"
    }
    const names = []
    const images = []
    const cards = []

    const components = {
      "LongTerm": <LongTerm/>,
      "MediumTerm": <MediumTerm/>,
      "ShortTerm": <ShortTerm/>,
  }

    sampleJSON.items.forEach((item) => {
      names.push(<div>{item.name}</div>)
      images.push(<img src={item.images[0].url}/> )
      cards.push(
        <div>
            <Card className="artist-card">
              <Card.Img variant="top" src={item.images[0].url} />
              <Card.Body>
                  {item.name}
              </Card.Body>
            </Card>
        </div>
      )
    })

    return (
      <div className="background-banner">
                <table className="artists-table">
                  <tr className="artist-title"><h1 className="text-white">TOP ARTISTS</h1></tr>
                  <tr>
                    <td className="div-titles">
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">All Time</NavLink></tr>
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">This Month</NavLink></tr>
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">Last 6 Months</NavLink></tr>
                    </td>
                    <td className="div-top-results">
                      {cards}
                    </td>
                  </tr>
                </table>
      </div>
    );
}

function LongTerm(){

    return(
      <div></div>
    );
   
}

function MediumTerm(){

  return(
    <div></div>
  );
 
}

function ShortTerm(){

  return(
    <div></div>
  );
 
}
