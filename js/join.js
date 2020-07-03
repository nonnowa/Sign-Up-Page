// 인풋 텍스트폼
const inputId = document.getElementById('id-input'),
  inputPw = document.getElementById('pw-input'),
  inputPwCheck = document.getElementById('pw-input-checking');

// 에러 메세지
const errorBox = document.querySelector('.error-box'),
  errorMessage = document.querySelector('.error-text');

// 인풋 버튼
const submitBtn = document.getElementById('join-btn');

// 컨테이너
const container = document.querySelector('.container');

//에러 메시지 지워주는 함수 (매개변수의 클래스를 지워줌)
function errorRemover(currentTarget) {
  currentTarget.classList.remove('error');
  errorBox.classList.remove('error');
}

//에러 메시지 추가하는 함수 (매개변수의 클래스를 추가함)
function errorLooking(currentTarget) {
  currentTarget.classList.add('error');
  errorBox.classList.add('error');
}

//아이디가 5자 이상인지 비교하여 값을 리턴하는 함수
function idCheckingHandler() {
  if (inputId.value.length >= 5) {
    errorRemover(inputId);
    errorMessage.innerHTML = '';
    return true;
  } else {
    errorLooking(inputId);
    errorMessage.innerHTML = '아이디를 5자 이상 입력해주세요';
  }
}

//첫 번째 입력한 패스워드가 5자 이상인지 비교하여 값을 리턴하는 함수
function pwHandler() {
  if (inputPw.value.length >= 5) {
    errorRemover(inputPw);
    errorMessage.innerHTML = '';
    return true;
  } else {
    errorLooking(inputPw);
    errorMessage.innerHTML = '비밀번호를 5자 이상 입력해주세요';
  }
}

// 첫 번째 입력한 패스워드와 두 번째 입력한 패스워드가 일치한지 비교하여 값을 리턴하는 함수
function pwCheckingHandler() {
  if (inputPwCheck.value.length >= 5 && inputPw.value == inputPwCheck.value) {
    errorRemover(inputPwCheck);
    errorMessage.innerHTML = '';

    return true;
  } else if (inputPw.value !== inputPwCheck.value) {
    errorLooking(inputPwCheck);
    errorMessage.innerHTML = '비밀번호가 일치하지 않습니다';
  } else {
    errorLooking(inputPwCheck);
    errorMessage.innerHTML = '비밀번호를 5자 이상 입력해주세요';
  }
}

// 리턴된 값을 비교하여 체크하는 함수
function checkingHandler() {
  console.log(idCheckingHandler(), pwHandler(), pwCheckingHandler());
  if (idCheckingHandler() && pwHandler()) {
    if (pwCheckingHandler()) {
      submitBtn.classList.add('checked');
      return true;
    } else {
      submitBtn.classList.remove('checked');
      return false;
    }
  } else {
    submitBtn.classList.remove('checked');
    return false;
  }
}

// 버튼 클릭 핸들러
function buttonClickHandler() {
  if (checkingHandler()) {
    container.innerHTML = '<h2>가입 완료!<br>회원이 된 걸 환영해요!🥳</h2>';
    container.classList.add('join-complete');
  } else {
    errorLooking(container);
    errorMessage.innerHTML = '아이디와 비밀번호는 5자 이상 입력해주세요.';
    errorBox.classList.add('error-ani');
    setTimeout(function () {
      errorBox.classList.remove('error-ani');
    }, 301);
  }
}

inputId.addEventListener('input', checkingHandler);
inputPw.addEventListener('input', checkingHandler);
inputPwCheck.addEventListener('input', checkingHandler);
submitBtn.addEventListener('click', buttonClickHandler);
