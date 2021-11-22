$(function () {
  //Splash screen
  let divSplashScreen = $("<div/>");
  let divSplashScreenData = $("<div/>");
  let imgSplashScreen = $("<img/>");
  imgSplashScreen.attr("src", "./img/widget-splash-screen-img.png");
  $(divSplashScreen).addClass("div-splash-screen");

  $(imgSplashScreen).addClass("img-splash-screen");

  let p = $("<p/>");
  let p1 = $("<p/>");
  let a = $("<a/>");
  let i = $("<i/>");
  $(i).addClass("fas fa-lock lock");

  $(p)
    .text(`NLB Open Finance will only be able to read your data`)
    .prepend($(i))
    .addClass("text1 p")
    .css({
      fontWeight: "700",
      position: "relative",
    });

  $(p1)
    .text(
      "Our platform uses the highest security standards to protect our customers’ account information and their privacy at every step of the process."
    )
    .css({
      marginLeft: "20px",
      marginRight: "10px",
      fontWeight: "400",
      opacity: "50%",
      textAlign: "left",
    })
    .addClass("text1 p");
  $(a)
    .text("How NLB Open Finance protect your account")
    .attr("href", "#")
    .addClass("link text1");
  let btnDiv = $("<div/>");
  let personalBtn = $("<button/>");
  let businessBtn = $("<button/>");
  let btnP = $("<p/>");
  $(btnDiv).css({
    marginTop: "150px",
  });
  $(personalBtn).text("Personal").addClass("widget-custom-button");
  $(businessBtn)
    .text("Business")
    .addClass("widget-custom-button")
    .css({ marginTop: "20px" });
  $(btnP)
    .text(
      "By chooseing one of the above you are accepting the privacy policy of NLB Open finance"
    )
    .addClass("text1")
    .css({
      fontSize: "10px",
      fontWeight: "400",
      color: "#979797",
      textAlign: "center",
    });

  $(btnDiv).append($(personalBtn), $(businessBtn), $(btnP));

  $(divSplashScreenData)
    .append($(p), $(p1), $(a), $(btnDiv))
    .css({ marginTop: "160px" });

  divSplashScreen.append(imgSplashScreen, $(divSplashScreenData));

  //Choose country screen
  let divChooseCountry = $("<div/>");
  let title = $("<h2/>");
  let divBtns = $("<div/>");
  let backLink = $("<a/>");
  backLink
    .html(
      '<img style="width:100%;display:block" src="./img/long-arrow-alt-left.png"/>'
    )
    .css({
      position: "absolute",
      top: "20px",
      left: "15px",
      display: "block",
      padding: "10px",
    })
    .on("click", function () {
      window.history.back();
    });
  $(title).text("Choose your country").css({ textAlign: "center" });
  divChooseCountry
    .addClass("div-choose-country")
    .append(backLink, title, divBtns);

  let btnCountry = $("<button/>");
  btnCountry
    .addClass("btn-country")
    .text("Macedonia")
    .attr("id", "macedonia")
    .on("click", function () {
      window.location.hash = `#country#choose`;
    });
  divBtns.append(btnCountry).css({
    marginTop: "130px",
  });

  $(personalBtn).on("click", function () {
    window.location.hash = "#country";
  });

  //Chose bank or app

  let divChooseBankApp = $("<div/>");
  let divBtnBankApp = $("<div/>");
  let btnBank = $("<button/>");
  let btnApp = $("<button/>");
  let divBankAppCards = $("<div/>");
  btnBank
    .addClass("choose-btn active")
    .text("Choose Bank")
    .css({ marginRight: "10px" })
    .on("click", function (e) {
      if (!$(e.currentTarget).hasClass("active")) {
        $(e.currentTarget).addClass("active");
        $(btnApp).removeClass("active");
      }
    });

  btnApp
    .addClass("choose-btn")
    .text("Choose App")
    .css({ marginLeft: "10px" })
    .on("click", function (e) {
      if (!$(e.currentTarget).hasClass("active")) {
        $(e.currentTarget).addClass("active");
        $(btnBank).removeClass("active");
      }
    });

  divBtnBankApp
    .append(btnBank, btnApp)
    .css({ display: "flex", justifyContent: "space-between" });

  for (let i = 0; i < 10; i++) {
    let cards = $("<a/>");
    cards
      .addClass("widget-custom-cards")
      .attr("id", "stopanska")
      .append("<div><img src='./img/stopanska.png' /></div>");

    cards.on("click", function (e) {
      window.location.hash = "#login";
    });
    divBankAppCards.append(cards);
  }

  divBankAppCards.css({ display: "flex", flexWrap: "wrap", marginTop: "35px" });

  divChooseBankApp
    .addClass("div-choose-bank-app")
    .append(divBtnBankApp, divBankAppCards);

  //Log in screen

  let divLogIn = $("<div/>");
  let titleLogIn = $("<h2/>");
  let divLogInForm = $("<div/>");
  let logInForm = $("<form/>");
  let logInBtn = $("<button/>");
  let logInBtnDiv = $("<div/>");

  titleLogIn.text("Creditentials").css({ textAlign: "center" });
  divLogIn.addClass("div-log-in").append(titleLogIn);

  divLogInForm.css({
    marginTop: "80px",
  });

  logInForm.addClass("log-in-form").append(
    `<div>
    <label for="username">Username</label>
    <input type="text" name="username" id=username>
    </div>
    <div>
    <label for="password">Password</label>
    <input type="text" name="password" id=password>
    </div>`
  );

  logInBtn.text("Log In").addClass("widget-custom-button");
  logInBtnDiv
    .append(
      logInBtn,
      "<small style='text-align:center;display:block;color:#979797;font-size:10px;margin-top:10px;line-heigth:20px;'>By hitting log in you are accepting the privacy policy of NLB Open finance</small>"
    )
    .css({ marginTop: "auto" });

  divLogInForm.append(logInForm);
  divLogIn.append(divLogInForm, logInBtnDiv);

  $("#widget-open-finance").append(
    divSplashScreen,
    divChooseCountry,
    divChooseBankApp,
    divLogIn
  );

  //Router function
  function handleRoute() {
    let path = window.location.hash;
    console.log(path);
    switch (path) {
      case "":
        divSplashScreen.css({ display: "block" });
        divChooseCountry.css({ display: "none" });
        divChooseBankApp.css({ display: "none" });
        divLogIn.css({ display: "none" });
        break;
      case "#country":
        divSplashScreen.css({ display: "none" });
        divChooseCountry.css({ display: "block" }).append(backLink);
        divChooseBankApp.css({ display: "none" });

        divLogIn.css({ display: "none" });
        break;
      case `#country#choose`:
        divSplashScreen.css({ display: "none" });
        divChooseCountry.css({ display: "none" });
        divChooseBankApp.css({ display: "block" }).append(backLink);
        divLogIn.css({ display: "none" });
        break;
      case `#login`:
        divSplashScreen.css({ display: "none" });
        divChooseCountry.css({ display: "none" });
        divChooseBankApp.css({ display: "none" });
        divLogIn.css({ display: "flex" }).append(backLink);
        break;
      default:
        path = "";
        break;
    }
  }
  //On every hash change execute router function
  $(window).on("hashchange", handleRoute);

  //On every load  execute router function
  $(window).on("load", handleRoute);
});
