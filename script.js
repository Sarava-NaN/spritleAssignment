   let click = document.querySelector(".font-awesome-icons");
      let icons = document.querySelectorAll(".fa-solid");
      // setTimeout Function
      setTimeout(() => {
        icons.forEach((icn) => {
          icn.classList.toggle("active");
        });
      }, 1000);