let input = document.querySelector('input');
let publish = document.querySelector('.publish');
let commentList = document.querySelector('.commentList');

/**
 * 删除评论
 */
function del(item) {
    let commItem = item.parentNode.parentNode;
    commentList.removeChild(commItem);
}

/**
 * 增加评论
 */
publish.onclick = () => {
    let text = input.value;
    let date = new Date();
    let time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    if (text.trim().length > 0) {
        // 正常评论
        let html = `
            <div class="top">
                <div class="itemImg">
                    <img src="./assets/headImg.jpg" alt="">
                </div>
                <div class="commName">刘桑</div>
            </div>
            <div class="content">${text}</div>
            <div class="bottom">
                <div class="time">${time}</div>
                <div class="del" onclick="del(this)">删除</div>
            </div>
        `;
        // 创建子节点
        let item = document.createElement('div');
        item.className='commentItem';
        item.innerHTML = html;
        // 添加子节点
        commentList.appendChild(item);
        // 清空输入框
        input.value = '';
    } else {
        alert('评论不能为空');
    }
}