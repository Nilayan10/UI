function openPage(pageName, elmnt) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  }
  
  document.getElementById("defaultOpen").click();

    const jsonf1={
      "1":{
           "name": "Sam Altman",
           "email": "samaltman123@gmail.com",
           "rl": "Medium",
           "tr": "IP Change",
           "qf": "4 days",
           "ad": "12 Oct, 2023",
           "pr": "Yes",
           "da": "23 Aug, 2023"
          },
      "2":{
           "name": "Sameer Choubey",
           "email": "sameerchoubey123@gmail.com",
           "rl": "High",
           "tr": "FIFO",
           "qf": "4 days",
           "ad": "12 Oct, 2023",
           "pr": "No",
           "da": ""
          },
      "3":{
           "name": "Adarsh Panikkar",
           "email": "adarsh@onjuno.com",
           "rl": "Low",
           "tr": "IP Change",
           "qf": "5 days",
           "ad": "12 Oct, 2023",
           "pr": "No",
           "da": ""
         },
      "4":{
           "name": "Pratik Shetty",
           "email": "pratik3@gmail.com",
           "rl": "High",
           "tr": "FIFO",
           "qf": "5 days",
           "ad": "12 Oct, 2023",
           "pr": "Yes",
           "da": "12 Sep, 2023"
          },
      "5":{
           "name": "Elon Musk",
           "email": "elon@twitterceo.com",
           "rl": "Low",
           "tr": "FIFO",
           "qf": "5 days",
           "ad": "12 Oct, 2023",
           "pr": "Yes",
           "da": "12 Sep, 2023"
          },
      "6":{
           "name": "Trina Kundu",
           "email": "trina@onjuno.com",
           "rl": "Low",
           "tr": "FIFO",
           "qf": "5 days",
           "ad": "12 Oct, 2023",
           "pr": "Yes",
           "da": "12 Sep, 2023"
          }
    }
    const parent1 = document.getElementById('pend');
    Object.keys(jsonf1).forEach(element => {
        const {
            name,
            email,
            rl,
            tr,
            qf,
            ad,
            pr,
            da
        } = jsonf1[element]
        let child1 = `<tr>
                        <td>${name} <span class="email">${email}</span> <a href="#"><img src="/images/external_link.svg" alt="external link"></a></td>
                        <td>${rl}</td>
                        <td>${tr}</td>
                        <td>${qf}</td>
                        <td>${ad}</td>
                        <td>${pr} <span class="light">${da}</span></td>
                    </tr>`
        parent1.insertAdjacentHTML('beforeend', child1);
    });

    const jsonf2={
      "1":{
           "name": "Sam Altman",
           "email": "samaltman123@gmail.com",
           "rl": "Medium",
           "ar": "Flagged",
           "tc": "14 days",
           "ad": "12 Oct, 2023",
           "aty": "Neil",
           "em": "neil@onjuno.com"
          },
      "2":{
           "name": "Sameer Choubey",
           "email": "sameerchoubey123@gmail.com",
           "rl": "High",
           "ar": "Closed",
           "tc": "14 days",
           "ad": "12 Oct, 2023",
           "aty": "Pratik",
           "em": "pratik@onjuno.com"
          },
      "3":{
           "name": "Adarsh Panikkar",
           "email": "adarsh@onjuno.com",
           "rl": "Low",
           "ar": "Closed",
           "tc": "15 days",
           "ad": "12 Oct, 2023",
           "aty": "Prashanth",
           "em": "prashanth@onjuno.com"
          },
      "4":{
           "name": "Pratik Shetty",
           "email": "pratik3@gmail.com",
           "rl": "High",
           "ar": "SOI requested",
           "tc": "15 days",
           "ad": "12 Oct, 2023",
           "aty": "Rasleen Kaur",
           "em": "rasleen@onjuno.com"
          },
      "5":{
           "name": "Elon Musk",
           "email": "elon@twitterceo.com",
           "rl": "Low",
           "ar": "Flagged",
           "tc": "15 days",
           "ad": "12 Oct, 2023",
           "aty": "Pratik Shetty",
           "em": "pratik@onjuno.com"
          },
      "6":{
           "name": "Trina Kundu",
           "email": "trina@onjuno.com",
           "rl": "Low",
           "ar": "Closed",
           "tc": "15 days",
           "ad": "12 Oct, 2023",
           "aty": "Varun Deshpande",
           "em": "varun@onjuno.com"
          }
    }
    const parent2 = document.getElementById('comp');
    Object.keys(jsonf2).forEach(element => {
        const {
            name,
            email,
            rl,
            ar,
            tc,
            ad,
            aty,
            em
        } = jsonf2[element]
        let child2 = `<tr>
                        <td>${name} <span class="email">${email}</span> <a href="#"><img src="/images/external_link.svg" alt="external link"></a></td>
                        <td>${rl}</td>
                        <td>${ar}</td>
                        <td>${tc}</td>
                        <td>${ad}</td>
                        <td>${aty} <span class="light">${em}</span></td>
                    </tr>`
        parent2.insertAdjacentHTML('beforeend', child2);
    });