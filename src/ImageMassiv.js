import React from "react";

const images = [
  { id: 1, url: "https://i.pinimg.com/736x/24/05/c5/2405c576d6bd7400097615231a597564.jpg" },
  { id: 2, url: "https://i.pinimg.com/originals/3c/8a/d3/3c8ad373c849c1887edad32319445b44.jpg" },
  { id: 3, url: "https://balthazar.club/uploads/posts/2023-01/1674374505_balthazar-club-p-koshachya-estetika-krasivo-64.jpg" },
  { id: 4, url: "https://i.pinimg.com/736x/04/3c/ad/043cadcf8a7350279f7d67c889576431.jpg" },
  { id: 5, url: "https://avatars.mds.yandex.net/i?id=b655d4d58951a1d01f11c9e57dbb3461155d601c-8498443-images-thumbs&ref=rim&n=33&w=200&h=200" },
  { id: 6, url: "https://i.pinimg.com/736x/ed/94/b1/ed94b1bb16c43b3bf0320c05eaa054ea.jpg" },
  { id: 7, url: "https://yt3.googleusercontent.com/NFLZvChJgwguDYftN0cPHALoLAT9BK_GDKq1oKdhb1FU-WsqI9I2IoAwc-_2FOHK59cPvCD7-w=s900-c-k-c0x00ffffff-no-rj" },
  { id: 8, url: "https://i.pinimg.com/736x/71/1e/5c/711e5c39142b5c4a2e1bf3aaa8747e42.jpg" },
  { id: 9, url: "https://pbs.twimg.com/media/EMZ8N_PXkAAm5cz?format=jpg&name=large" },
  { id: 10, url: "https://i.pinimg.com/736x/04/4a/b3/044ab3b9647c89c60483d5acef9b7ff1.jpg" },
  { id: 11, url: "https://avatars.mds.yandex.net/i?id=bdde455f719d6048334851ee2728b1041ed9918c-7084103-images-thumbs&ref=rim&n=33&w=200&h=200" },
];

function ImageMassiv() {
  return (
    <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px", padding: "10px",}}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} style={{width:150, height: "auto",}}/>
        </div>
      ))}
    </div>
  );
}

export default ImageMassiv;