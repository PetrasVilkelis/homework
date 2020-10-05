const products = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41hk96kbfVL._SS47_.jpg",
    title: "Skechers Work Cessnock",
    price: 39.99,
    description:
      "Skechers for work, cessnock food service shoe. Slip reisitant outsole.",
    url:
      "https://www.amazon.com/Skechers-Mens-Cessnock-Shoe-Black/dp/B07FBJ8CT1/ref=sr_1_4?dchild=1&keywords=shoes&qid=1601900245&sr=8-4",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41tVc8w0pbL._SS47_.jpg",
    title: "Skechers Equalizer 3.0",
    price: 50.82,
    description:
      "Lace-up jogger with air cooled memory foam.",
    url:
      "https://www.amazon.com/Skechers-Relaxed-Equalizer-Sneakers-Black/dp/B07CTSYGZK/ref=pd_sbs_309_1/143-5812864-5363220?_encoding=UTF8&pd_rd_i=B07CTSYGZK&pd_rd_r=7ff54c2e-0b23-4b36-80e0-e5a7518cd3ab&pd_rd_w=3qTTb&pd_rd_wg=DJx2f&pf_rd_p=b65ee94e-1282-43fc-a8b1-8bf931f6dfab&pf_rd_r=QQW82D76B4R85SE3G20P&psc=1&refRID=QQW82D76B4R85SE3G20P",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/5165dpKCJ1L._SS47_.jpg",
    title:
      "Mens Air Athletic Running Tennis Shoes",
    price: 39.99,
    description:
      "Fashion knitted mesh upper for ultra-lightweight support and breathable ,allows to keep your feet dry while exercising.",
    url:
      "https://www.amazon.com/dp/B089RB117S/ref=sspa_dk_detail_8?pd_rd_i=B089RB117S&pd_rd_w=SN5Er&pf_rd_p=f0355a48-7e73-489a-9590-564e12837b93&pd_rd_wg=pg6xB&pf_rd_r=2EPZT8M6HDFT97FTK32P&pd_rd_r=da0f3bf3-cfcb-4678-96d1-85cff1c22af0&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWDhMRlpQTEUwRFQ5JmVuY3J5cHRlZElkPUEwNDY5MzU3M0E3VjNRTzVYODdQRSZlbmNyeXB0ZWRBZElkPUEwNzA5NjUzMTcwVjRWN08zV1I5TiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&psc=1",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41hk96kbfVL._SS47_.jpg",
    title:
      "Skechers Men's Parson-Todrick Sneaker",
    price: 63.99,
    description: "Knitted Bungee Mesh Slip On.",
    url:
      "https://www.amazon.com/dp/B07M6JWDWP/ref=sspa_dk_detail_9?psc=1&pd_rd_i=B07M6JWDWP&pd_rd_w=SN5Er&pf_rd_p=f0355a48-7e73-489a-9590-564e12837b93&pd_rd_wg=pg6xB&pf_rd_r=2EPZT8M6HDFT97FTK32P&pd_rd_r=da0f3bf3-cfcb-4678-96d1-85cff1c22af0&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWDhMRlpQTEUwRFQ5JmVuY3J5cHRlZElkPUEwNDY5MzU3M0E3VjNRTzVYODdQRSZlbmNyeXB0ZWRBZElkPUEwNzc3NTQ4MUs2SkhMNVQxWDNDNiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41wRSfcKNNL._SS47_.jpg",
    title:
      "Skechers Men's Skech Flex 2.0 Milwee Fashion Sneaker",
    price: 80.75,
    description:
      "Lace-up with air bag midsole and air cooled memory foam insole",
    url:
      "https://www.amazon.com/dp/B06XYVMJFK/ref=sspa_dk_detail_7?psc=1&pd_rd_i=B06XYVMJFK&pd_rd_w=SN5Er&pf_rd_p=f0355a48-7e73-489a-9590-564e12837b93&pd_rd_wg=pg6xB&pf_rd_r=2EPZT8M6HDFT97FTK32P&pd_rd_r=da0f3bf3-cfcb-4678-96d1-85cff1c22af0&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWDhMRlpQTEUwRFQ5JmVuY3J5cHRlZElkPUEwNDY5MzU3M0E3VjNRTzVYODdQRSZlbmNyeXB0ZWRBZElkPUEwNTUxOTYxRVpNRlVESktOWExFJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  },
];

const table = document.querySelector(".table");

for (let product of products) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>
    <img
      src="${product.image}"
      alt="Product image"
    />
    </td>
  </td>
  <td>
    ${product.title}
  </td>
  <td>
    ${product.description}
  </td>
  <td>$${product.price}</td>
  <td>
    <a href="${product.url}"
      >Buy</a
    >
  </td>`;

  table.appendChild(tr);
}

function changeHeaderText(text) {
  const header = document.querySelector(".title");
  header.innerText = text;
}

function changeBackgroundColor(color) {
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}

function changeFooterAddress(color) {
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}
