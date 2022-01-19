const artists = [
    {

      artistId: 1,
      artistName: 'Jack Johnson',
      trackName: 'Upside Down',
      primaryGenreName: 'Rock',
      image:"https://i.ytimg.com/vi/_1_sp82lG-U/maxresdefault.jpg",
      artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg',
      collectionCensoredName:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
    },
    {
      artistId: 2,
      artistName: 'Jack Johnson',
      trackName: 'Broken',
      primaryGenreName: 'Rock',
      image: "https://i.ytimg.com/vi/tiYgBMNDhTU/maxresdefault.jpg",
      artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg',
      collectionCensoredName:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
    },
    {
      artistId: 3,
      artistName: 'Jack Johnson',
      trackName: "We're Going To Be Friends",
      primaryGenreName: 'Rock',
      image:"https://i.ytimg.com/vi/NsRIc7_TQJ4/maxresdefault.jpg",
      artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg',
      collectionCensoredName:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
    },
    {
      artistId: 4,
      artistName: 'This Bike Is a Pipe Bomb',
      trackName: 'Jack Johnson',
      primaryGenreName: 'Alternative',
      image:"https://f4.bcbits.com/img/a2310620149_5.jpg",
      artistViewUrl:
        'https://music.apple.com/us/artist/this-bike-is-a-pipe-bomb/41742672?uo=4',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6e/27/6b/6e276b76-8b2c-6a67-e40f-c2b61ba6e52a/source/100x100bb.jpg',
      collectionCensoredName: 'Three Way Tie for a Fifth',
    },
    {
      artistId: 5,
      artistName: 'Sydney Rhame',
      trackName: 'Jack Johnson',
      primaryGenreName: 'Pop',
      image:"https://i.scdn.co/image/ab67616d00001e02bbd831a082a0878eaea82f9c",
      artistViewUrl:
        'https://music.apple.com/us/artist/sydney-rhame/715937323?uo=4',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/31/fd/66/31fd6612-13d8-424e-744f-d6f5bec14ce4/source/100x100bb.jpg',
      collectionCensoredName: 'Keep Dancing',
    },
    {
      artistId: 6,
      artistName: 'The Tom Russell Band',
      trackName: 'Jack Johnson',
      primaryGenreName: 'Alternative Folk',
      image:"https://m.media-amazon.com/images/I/81qtEaKolwL._SS500_.jpg",
      artistViewUrl:
        'https://music.apple.com/us/artist/the-tom-russell-band/2557445?uo=4',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b5/eb/82/b5eb828b-bd21-f056-0ce1-dc0e97dde9ec/source/100x100bb.jpg',
      collectionCensoredName: 'Hurricane Season',
    },
    {
      artistId: 7,
      artistName: 'Eddie Vedder,  & Zach Gill',
      trackName: 'I Shall Be Released',
      primaryGenreName: 'Rock',
      image:"https://www.covermesongs.com/wp-content/uploads/2020/04/ishallbereleased.jpg",
      artistViewUrl: 'https://music.apple.com/us/artist/eddie-vedder/267320?uo=4',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/ca/d4/68cad45e-e7b7-e8f9-067e-cef6d8fb2f04/source/100x100bb.jpg',
  
      collectionCensoredName:
        ' Friends - Best of Kokua Festival (A Benefit for the Kokua Hawaii Foundation)',
    },
    {
      artistId: 8,
      artistName: 'Taylor Swift',
      trackName: 'The Outside',
      primaryGenreName: 'Country',
      image:"https://i.ytimg.com/vi/DjEfF6qsGOo/maxresdefault.jpg",
      artistViewUrl:
        'https://music.apple.com/us/artist/taylor-swift/159260351?uo=4',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/57/7b/d2/577bd208-4a46-e374-42bd-ce3c654e0dda/source/100x100bb.jpg',
      collectionCensoredName: 'Taylor Swift (Bonus Track Version)',
    },
    {
      artistId: 9,
      artistName: 'Taylor Swift',
      trackName: 'Blank Space',
      primaryGenreName: 'Pop',
      image:"https://upload.wikimedia.org/wikipedia/ar/c/c7/%D8%AA%D8%A7%D9%8A%D9%84%D9%88%D8%B1_%D8%B3%D9%88%D9%8A%D9%81%D8%AA_-_%D9%85%D8%B3%D8%A7%D8%AD%D8%A9_%D9%81%D8%A7%D8%B1%D8%BA%D8%A9.png",
      artistViewUrl:
        'https://music.apple.com/us/artist/taylor-swift/159260351?uo=4',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/ae/4f/58/ae4f58e4-7bd3-6d99-1601-54dfdc27f51a/source/100x100bb.jpg',
      collectionCensoredName: '1989',
    },
    {
      artistId: 10,
      artistName: 'Kanye West',
      trackName: 'Love Lockdown',
      primaryGenreName: 'Hip-Hop/Rap',
      image :"https://i1.sndcdn.com/artworks-000070754231-g8o5xr-t200x200.jpg?671e660",
      artistViewUrl: 'https://music.apple.com/us/artist/kanye-west/2715720?uo=4',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b5/79/c1/b579c127-18b3-63bc-1b5d-1d656225f7fc/source/100x100bb.jpg',
      collectionCensoredName: '808s & Heartbreak',
    },
    {
      artistId: 11,
      artistName: 'Kanye West',
      trackName: "Can't Tell Me Nothing",
      primaryGenreName: 'Hip-Hop/Rap',
      image:"https://img.cdandlp.com/2017/02/imgL/115550655.jpg",
      artistViewUrl: 'https://music.apple.com/us/artist/kanye-west/2715720?uo=4',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/7b/39/8c/7b398cec-6385-34f0-874b-9c26221fd30b/source/100x100bb.jpg',
      collectionCensoredName: 'Graduation',
    },
  ];
  
export default artists