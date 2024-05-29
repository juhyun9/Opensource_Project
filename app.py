from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    title = "제목을 입력해주세요"
    paragraph = "<나만의 MBTI 사이트입니다!> 와 같은 한 줄 설명해주세요."
    return render_template('home.html', title=title, paragraph=paragraph)

@app.route('/update', methods=['POST'])
def update_content():
    title = "새로운 제목"
    paragraph = "새로운 내용입니다! <br> 새로운 텍스트로 시작해 주십시오."
    return render_template('home.html', title=title, paragraph=paragraph)

if __name__ == '__main__':
    app.run(debug=True)
