const questions = [
    // 問題 0：起始問題
    {
        question: "最近的你，最大的感受是什麼？",
        options: [
            { text: "A. 一切還算平穩", next: 1 },
            { text: "B. 有些焦慮或不安", next: 2 },
            { text: "C. 感覺累或提不起勁", next: 3 }
        ],
        background: 'images/default-background.jpg'
    },
    // 問題 1：生活目標或方向
    {
        question: "你是否感覺生活中缺乏目標？",
        options: [
            { text: "A. 是的，我希望有更明確的目標", next: 4 },
            { text: "B. 不確定，還在思考中", next: 5 },
            { text: "C. 沒有，我很滿意現狀", next: 6 }
        ],
        background: 'images/background1.jpg'
    },
    // 問題 2：焦慮或壓力
    {
        question: "你的焦慮主要來源是什麼？",
        options: [
            { text: "A. 自我懷疑或缺乏自信", next: 7 },
            { text: "B. 外界壓力或他人期待", next: 8 },
            { text: "C. 無法掌控生活節奏", next: 9 }
        ],
        background: 'images/background2.jpg'
    },
    // 問題 3：身心平衡與能量
    {
        question: "你疲憊的主要原因是什麼？",
        options: [
            { text: "A. 工作或生活壓力大", next: 10 },
            { text: "B. 缺乏休息或個人空間", next: 11 },
            { text: "C. 感覺生活缺乏意義", next: 12 }
        ],
        background: 'images/background3.jpg'
    },
    // 問題 4：生活方向清晰但需落實
    {
        question: "你是否有清晰的未來方向？",
        options: [
            { text: "A. 是的，我有具體的計畫", next: 13 },
            { text: "B. 還沒有，但我想深入思考", next: 14 },
            { text: "C. 沒有，但我願意逐步探索", next: 15 }
        ],
        background: 'images/background1.jpg'
    },
    // 問題 5：需要靈感或探索
    {
        question: "你希望在什麼方面探索可能性？",
        options: [
            { text: "A. 自我成長", next: 16 },
            { text: "B. 改善人際關係", next: 17 },
            { text: "C. 改變生活方式", next: 18 }
        ],
        background: 'images/background1.jpg'
    },
    // 問題 6：完全迷茫
    {
        question: "你對生活有什麼期望？",
        options: [
            { text: "A. 希望生活更穩定", next: 19 },
            { text: "B. 希望有小的突破", next: 20 },
            { text: "C. 希望有新的變化", next: 21 }
        ],
        background: 'images/background1.jpg'
    },
    // 問題 7：自我懷疑
    {
        question: "你是否希望增強自信心？",
        options: [
            { text: "A. 是的，我需要更多自信", next: 22 },
            { text: "B. 可能需要自我調整", next: 23 },
            { text: "C. 不確定，需要更多方向", next: 24 }
        ],
        background: 'images/background2.jpg'
    },
    // 問題 8：人際壓力
    {
        question: "你希望不再過於期待別人如何對待你？",
        options: [
            { text: "A. 是的，我想更獨立", next: 25 },
            { text: "B. 可能，但需要一些支持", next: 26 },
            { text: "C. 不需要，我能承受壓力", next: 27 }
        ],
        background: 'images/background2.jpg'
    },
    // 問題 9：生活無法掌控
    {
        question: "你是否希望調整生活節奏？",
        options: [
            { text: "A. 是的，我需要改變", next: 28 },
            { text: "B. 可能需要逐步的小調整", next: 29 },
            { text: "C. 暫時不需要", next: 30 }
        ],
        background: 'images/background2.jpg'
    },
    // 問題 10: 疲憊 → 壓力
    {
        question: "是否需要更多休息時間？",
        options: [
            { text: "是的，我需要休息", next: 31 },
            { text: "可能需要更好的平衡", next: 32 },
            { text: "我可以堅持現在的節奏", next: 33 }
        ],
        background: 'images/background3.jpg'
    },
    // 問題 11: 疲憊 → 缺乏空間
    {
        question: "是否想要更多個人空間？",
        options: [
            { text: "是的，我需要獨處", next: 34 },
            { text: "可能需要一些調整", next: 35 },
            { text: "我目前感覺可以接受", next: 36 }
        ],
        background: 'images/background3.jpg'
    },
    // 問題 12: 疲憊 → 空洞
    {
        question: "你想讓生活更有意義嗎？",
        options: [
            { text: "是的，我希望更有意義", next: 37 },
            { text: "可能需要更多探索", next: 38 },
            { text: "暫時不確定", next: 39 }
        ],
        background: 'images/background3.jpg'
    },
  // 最終結果
     {
        result: "測驗分析：學會情緒管理，讓心靈更堅強",
        productImage: "product13.jpg",
        description: "《給自己10樣人生禮物：成就動詞型的生命地圖就在這10個關鍵》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714163"
    },
    {
        result: "測驗分析：學會自我安慰，無需過度擔憂",
        productImage: "product14.jpg",
        description: "《別慌，一天只做三件事就好：褚士瑩的日常慢哲學》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714181"
    },
   {
        result: "測驗分析：接受情緒的起伏，給自己更多包容和愛",
        productImage: "product15.jpg",
        description: "《每天多愛自己一點點：寫給高敏感族的365天自我照顧書》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714179"
    },
    {
        result: "測驗分析：制定長期成長計劃，與未來的自己對話，成就更好的自己。",
        productImage: "product22.jpg",
        description: "《1年計畫10年對話：預約10年後的自己》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714183"
    },  
    {
        result: "測驗分析：接受自己的內向，找到內心的平靜和堅定",
        productImage: "product17.jpg",
        description: "《其實，我是個內向的人：面對人際關係，隱藏的是不安的自己》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720007"
    },
   {
        result: "測驗分析：保持成長的心態，每一天都能成為更好的自己",
        productImage: "product1.jpg",
        description: "《這一天，也許會不一樣》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0710156"
    },
    {
        result: "測驗分析：探索新方向，為生活注入新的活力和幸福感",
        productImage: "product25.jpg",
        description: "《一人份的幸福剛剛好》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0701162"
    },
    {
        result: "測驗分析：探索新方向，為生活注入新的活力和幸福感",
        productImage: "product19.jpg",
        description: "《每個瞬間都是你》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720004"
    },
   {
        result: "測驗分析：好奇心是通向全新可能性的鑰匙，讓你在探索中感受生命的驚喜",
        productImage: "product5.jpg",
        description: "《逆習慣：好奇心改變一切》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714091"
    },  
    {
        result: "測驗分析：每一次的困惑，都是內心力量升級的機會，幫助你突破限制",
        productImage: "product23.jpg",
        description: "《你會比昨天更堅強：心理學家為你量身打造的自信心練習題》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714166"
    },
  
   {
        result: "測驗分析：自信不僅是接受自己的不足，更是學會不受他人影響，堅守內心的聲音",
        productImage: "product12.jpg",
        description: "《醫治受傷的自信》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714195"
    },
    {
        result: "測驗分析：當你的內心達到穩定，外界的波瀾也不再輕易影響你的生活",
        productImage: "product18.jpg",
        description: "《為什麼總是感到很受傷》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714162"
    },
    {
        result: "測驗分析：堅信自己的價值，學會跨越自我懷疑，每一步都會帶來更大的突破",
        productImage: "product24.jpg",
        description: "《誰說我不夠好：抓住否定自己的原因，找到肯定自己的方法》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714130"
    },
   {
        result: "測驗分析：嘗試離開舒適圈，你將發現內在的潛力比你想像中更強大",
        productImage: "product2.jpg",
        description: "《你就是困住自己的那座山：終結自我破壞，實現自我控制》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714194"
    },
    {
        result: "測驗分析：微小的改變，往往是大變革的起點，讓新鮮感重新注入日常",
        productImage: "product26.jpg",
        description: "《謝謝你的存在》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720014"
    },
    {
        result: "測驗分析：休息不代表停下，而是為下一次的全力以赴做好準備",
        productImage: "product20.jpg",
        description: "《你可以敏感，但不要被敏感控制：在生活中找到駕馭自己，增加能力的高敏感族練習題》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714157"
    },
    {
        result: "測驗分析：勇敢邁出第一步，你將發現即使微小的行動也能帶來巨大的改變",
        productImage: "product16.jpg",
        description: "《我想成為不錯的人 雖然這並不容易》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720010"
    },
   {
        result: "測驗分析：深入內心尋找真正的自我，這是自我接納與重建力量的最佳途徑",
        productImage: "product4.jpg",
        description: "《獨處，遇見更好的自己：好好安排你的專屬時間，重新設定人生的力量》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720022"
    },
   {
        result: "測驗分析：逐步調整當下的節奏，為自己建立一個可持續的生活方式",
        productImage: "product8.jpg",
        description: "《好想消失的日子》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720021"
    },
    {
        result: "測驗分析：將注意力放在自己身上，讓成長的主導權重新回歸於你手中",
        productImage: "product11.jpg",
        description: "《就算忙盲茫 我決定給自己一點時間》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720012"
    },
    {      
        result: "測驗分析：改變需要勇氣，但只有行動才能讓生活變得更充實和豐富",
        productImage: "product7.jpg",
        description: "《世上有人為你加油：寫封信，給需要安慰的你》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720027"
    },  
    {
        result: "測驗分析：學會欣賞自己的優點，放下他人的眼光，真正與自己和平共處",
        productImage: "product10.jpg",
        description: "《稍微暫停一下吧》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0701165"
    },
    {
        result: "測驗分析：接受當下的生活，發現平凡之中隱藏的幸福與美好",
        productImage: "product27.jpg",
        description: "《練習問自己：關於我，Me & Myself》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714091"
    }, 
   {
        result: "測驗分析：自然成長需要耐心與時間，學會在放鬆中找到進步的節奏",
        productImage: "product3.jpg",
        description: "《會好起來的，就算不是現在》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0710153"
    },
    {
        result: "測驗分析：享受當下的每一刻，釋放壓力，讓自己身心達到和諧的平衡",
        productImage: "product21.jpg",
        description: "《看見自己說的話：9堂雙向思考練習，解鎖你的對話力》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0714165"
    },
    {
        result: "測驗分析：生命的答案往往藏在時間的流逝中，慢慢你會找到屬於自己的解答",
        productImage: "product6.jpg",
        description: "《以為長大就會好了：幸運的人用童年治癒一生，不幸的人用一生治癒童年》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720009"
    },
    {
        result: "測驗分析：接受當下不變的狀態，這是尊重自我的一種力量和選擇",
        productImage: "product9.jpg",
        description: "《希望溫暖你的每一天：為你的心上藥，療癒小熊的溫柔安慰》",
        link: "https://www.morningstar.com.tw/bookinfo.aspx?bookno=0720026"
    },       
];

 // 當前問題索引
let currentQuestion = 0;  // 保存當前問題的索引，初始值為 0，表示第一個問題。

// 初始化問題和選項，並按三層布局顯示
function loadQuestion() {
    let questionObj = questions[currentQuestion];  // 取得當前問題
    let questionContainer = document.getElementById('question');  // 顯示問題的容器
    let topOptionsContainer = document.getElementById('options-top');  // 顯示選項的頂部容器
    let middleOptionsContainer = document.getElementById('options-middle');   // 顯示選項的中部容器
    let bottomOptionsContainer = document.getElementById('options-bottom');   // 顯示選項的底部容器

    // 檢查是否是結果頁面
    if (questionObj.result) {
        showProduct(questionObj);   // 如果是結果頁面，顯示產品內容
        return true;
    }

    // 更改背景圖片，根據問題設定的背景
     changeBackground(questionObj.background);

    // 顯示問題
    questionContainer.innerText = questionObj.question;

    // 清空舊的選項，確保顯示新問題的選項
    topOptionsContainer.innerHTML = '';
    middleOptionsContainer.innerHTML = '';
    bottomOptionsContainer.innerHTML = '';

    // 創建選項按鈕並將它們按順序分配到三層
    questionObj.options.forEach((option, index) => {
        let button = document.createElement('button');   // 創建一個按鈕元素
        button.innerText = option.text;   // 設置按鈕文本
        button.onclick = () => chooseOption(option.next);   // 點擊按鈕後執行選擇下一個問題

        // 將選項按順序分配到不同的容器
        if (index % 3 === 0) {
            topOptionsContainer.appendChild(button);   // 第一個選項進入頂部容器
        } else if (index % 3 === 1) {
            middleOptionsContainer.appendChild(button);   // 第二個選項進入中部容器
        } else {
            bottomOptionsContainer.appendChild(button);   // 第三個選項進入底部容器
        }
    });
}

// 選擇選項，載入下一個問題或結果
function chooseOption(nextQuestion) {
    currentQuestion = nextQuestion;   // 將當前問題的索引設置為下一個問題的索引
    // 根據問題索引動態更改背景
    if (currentQuestion === 1) {
        changeBackground('images/background1.jpg');   // 如果問題是 1，顯示背景1
    } else if (currentQuestion === 2) {
        changeBackground('images/background2.jpg');  // 如果問題是 2，顯示背景2
    } else if (currentQuestion === 3) {
        changeBackground('images/background3.jpg');  // 如果問題是 3，顯示背景3
    } else {
        //changeBackground('images/default-background.jpg');  // 預設背景
    }

    loadQuestion();   // 加載下一個問題
}


// 動態更改背景圖片
function changeBackground(imagePath) {
    console.log("Background path:", imagePath);  // 確認路徑是否正確
    let backgroundImage = document.getElementById('background-image');
    if (imagePath) {
        backgroundImage.src = imagePath;  // 動態更改圖片路徑
        backgroundImage.style.display = 'block';  // 確保圖片顯示
    } else {
        backgroundImage.style.display = 'none';  // 隱藏圖片
    }
}
// 顯示產品介紹，並將結果頁縮小顯示
function showProduct(product) {
    // 隱藏問題容器
    document.getElementById('question-container').style.display = 'none';   
    
    // 隱藏所有背景圖片
    let backgroundImages = document.getElementsByClassName('background-image');
    for (let i = 0; i < backgroundImages.length; i++) {
        backgroundImages[i].style.display = 'none';  // 隱藏每個背景圖片元素
    }

    // 顯示產品容器，並設置其樣式
    let productContainer = document.getElementById('product-container');
    productContainer.style.display = 'block';   
    productContainer.style.width = '100%';  // 設置產品頁的寬度為100%
    productContainer.style.margin = '0 auto';  // 產品容器居中顯示
    
    // 处理測驗分析部分
    let productTitle = '測驗分析：<br>';
    let productConclusion = product.result.replace('測驗分析：', '');

    // 顯示產品信息
    document.getElementById('product-title').innerHTML = `<span class="red-highlight">${productTitle}</span>${productConclusion}`;
    let productImage = document.getElementById('product-image');
    productImage.src = `images/products/${product.productImage}`;  
    productImage.alt = product.result;
    productImage.parentElement.href = product.link;  // 設置圖片鏈接
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('click-hint').style.display = 'block'; // 显示提示文本

     // 讓產品名稱的文字變大
    let productDescription = document.getElementById('product-description');
    productDescription.innerText = product.description;
    productDescription.style.fontSize = '1.2em'; // 調整字體大小
    productDescription.style.fontWeight = 'bold'; // 讓文字更醒目
    document.getElementById('click-hint').style.display = 'block';
}


// 重新開始
function restart() {
    currentQuestion = 0;   // 將當前問題重置為第一個問題
    document.getElementById('product-container').style.display = 'none';   // 隱藏產品頁面
    document.getElementById('question-container').style.display = 'block';   // 顯示
    loadQuestion();
}

// 頁面載入時自動加載第一個問題
loadQuestion();