var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);
const posts=[
    {
        name:'OBee',
        avatar:'/asset/img/user11.jpg',
        content:`<span class="text1"> 6 bạn DEV</span>
        <span class="text1">Yêu cầu và quyền lợi:</span>
        <span >- Chủ động và có tinh thần trách nhiệm cao đối với công việc.</span>
        <span> - Báo cáo tiến độ và tình trạng công việc trực tiếp đến giám đốc dự án.</span>
        <span> Lương: cạnh tranh dựa trên năng lực thực tế.</span>
        <span> Thử việc tối thiểu 02 tháng.</span>
        <span>Được hỗ trợ phụ cấp gửi xe, phụ cấp làm việc ngoài văn phòng, khen thưởng theo năng lực làm việc.</span>
        <span>Được tham gia tất cả các loại bảo hiểm theo quy định của nhà nước.</span>
        <span>Được tham gia các hoạt động ngoại khóa do Công ty tổ chức: Event, Team building, Party,...</span>
        <span>Môi trường làm việc năng động, trẻ trung.</span>`,
        img:'/asset/img/post1.jpg',
        like:'999',
        comment:'199'
    },
    {
        name:'OBC',
        avatar:'/asset/img/user12.jpg',
        content:`<span class="text1"> 6 bạn DEV</span>
        <span class="text1">Yêu cầu và quyền lợi:</span>
        <span >- Chủ động và có tinh thần trách nhiệm cao đối với công việc.</span>
        <span> - Báo cáo tiến độ và tình trạng công việc trực tiếp đến giám đốc dự án.</span>
        <span> Lương: cạnh tranh dựa trên năng lực thực tế.</span>
        <span> Thử việc tối thiểu 02 tháng.</span>
        <span>Được hỗ trợ phụ cấp gửi xe, phụ cấp làm việc ngoài văn phòng, khen thưởng theo năng lực làm việc.</span>
        <span>Được tham gia tất cả các loại bảo hiểm theo quy định của nhà nước.</span>
        <span>Được tham gia các hoạt động ngoại khóa do Công ty tổ chức: Event, Team building, Party,...</span>
        <span>Môi trường làm việc năng động, trẻ trung.</span>`,
        img:'/asset/img/post1.jpg',
        like:'888',
        comment:'188'
    }


]
const showpost=posts.map(function(post){
    return `
    <div class="facebook_contenner_center_wrap_post">
    <div class="facebook_contenner_center_posts_header">
        <div class="facebook_contenner_icon_user">
            <img class="facebook_contenner_center_posts_header_icon" src="${post.avatar}">
            <div class="facebook_contenner_center_posts_header_name">
                <div>${post.name}</div>
                <div>Được tài trợ <span>.</span><i class="fas fa-globe-asia"></i></div>
            </div>
        </div>
        <div class="facebook_contenner_center_posts_function">
            <i class="fas fa-ellipsis-h"></i>
            <ul class="contenner_center_posts_function_list">
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Lưu bài viết</span>
                        <span class="text_2">Thêm vào danh sách danh mục đã lưu</span>
                    </span>                                                 
                </li>
                <hr class="hr">
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Bật thông báo về bài viết này</span>
                    </span> 
                </li>
                <hr class="hr_1">
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Báo cáo bài viết với quản trị viên</span>
                    </span> 
                </li>
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Ẩn bài viết</span>
                        <span class="text_2">Ẩn các bài viết tương tự</span>
                    </span>                                                 
                </li>
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Bỏ theo dõi</span>
                        <span class="text_2">Không xem bài viết của trang này nữa</span>
                    </span>                                                 
                </li>
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Tạm ẩn bài viết</span>
                        <span class="text_2">Tạm thời ẩn các bài viết tương tự</span>
                    </span>                                                 
                </li>
                <li class="contenner_center_posts_function_item">
                    <i class="far fa-bell"></i>
                    <span>
                        <span class="text_1">Tìm hỗ trợ hoặc báo cáo bài viết</span>
                        <span class="text_2">Tôi lo ngại về bài viết này</span>
                    </span>                                                 
                </li>
            </ul>
        </div>
    </div>
    <div class="facebook_contenner_center_posts_content">
        ${post.content}
    </div>
    <div class="facebook_contenner_center_posts_content_img">
        <img src="${post.img}" alt="">
    </div>
    <div class="facebook_contenner_center_posts_count">
        <div class="facebook_contenner_center_posts_count_like">
            <img class="j1lvzwm4" height="18" 
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18">
            <span>${post.like}</span>
        </div>
        <div class="facebook_contenner_center_posts_count_comment">
            <span>${post.comment}</span>
            <span>bình luận</span>
        </div>
    </div>
    <div class="facebook_contenner_center_posts_title">
        <div class="facebook_contenner_center_posts_title_item facebook_contenner_center_posts_title_like">
            <i class="far fa-thumbs-up contenner_center_posts_title_like_no_active"></i>
            <i class="fas fa-thumbs-up contenner_center_posts_title_like_active"></i>
            <span class="facebook_contenner_center_posts_title_text">Thích</span>
        </div>
        <div class="facebook_contenner_center_posts_title_item facebook_contenner_center_posts_title_comment">
            <i class="far fa-comment-alt"></i>
            <span class="facebook_contenner_center_posts_title_text">Bình luận</span>
        </div>
        <div class="facebook_contenner_center_posts_title_item facebook_contenner_center_posts_title_share">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path class="cls-1" d="M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z"/></g></svg>
            <span class="facebook_contenner_center_posts_title_text">Chia sẻ</span>
        </div>
    </div>
    <div class="facebook_contenner_center_posts_contener_comment">
        <div class="facebook_header_part_3_logo_wrap">
            <img src="asset/img/user.png" alt="">
        </div>
        <div class="contenner_center_post_up_input_wrap">
            <input class="facebook_contenner_center_post_up_input" type="text" placeholder="Viết câu trả lởi...">
            <div class="contenner_center_post_up_input_icon">
                <span><i  style="color:#65676b" class="far fa-smile"></i></span>
                <span>
                    <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="camera">
                        <path clip-rule="evenodd" d="M16,10.001c-4.419,0-8,3.581-8,8c0,4.418,3.581,8,8,8   c4.418,0,8-3.582,8-8C24,13.583,20.418,10.001,16,10.001z M20.555,21.906c-2.156,2.516-5.943,2.807-8.459,0.65   c-2.517-2.156-2.807-5.944-0.65-8.459c2.155-2.517,5.943-2.807,8.459-0.65C22.42,15.602,22.711,19.391,20.555,21.906z" fill="#333333" fill-rule="evenodd"/><path clip-rule="evenodd" d="M16,14.001c-2.209,0-3.999,1.791-4,3.999v0.002   c0,0.275,0.224,0.5,0.5,0.5s0.5-0.225,0.5-0.5V18c0.001-1.656,1.343-2.999,3-2.999c0.276,0,0.5-0.224,0.5-0.5   S16.276,14.001,16,14.001z" fill="#333333" fill-rule="evenodd"/><path clip-rule="evenodd" d="M29.492,9.042l-4.334-0.723l-1.373-3.434   C23.326,3.74,22.232,3,21,3H11C9.768,3,8.674,3.74,8.214,4.886L6.842,8.319L2.509,9.042C1.055,9.283,0,10.527,0,12v15   c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V12C32,10.527,30.945,9.283,29.492,9.042z M30,27c0,0.553-0.447,1-1,1H3   c-0.553,0-1-0.447-1-1V12c0-0.489,0.354-0.906,0.836-0.986l5.444-0.907l1.791-4.478C10.224,5.25,10.591,5,11,5h10   c0.408,0,0.775,0.249,0.928,0.629l1.791,4.478l5.445,0.907C29.646,11.094,30,11.511,30,12V27z" fill="#333333" fill-rule="evenodd"/></g>
                    </svg></i></span>
                <span>        
            <?xml version="1.0" ?><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M369.43,450H140.56a50.17,50.17,0,0,1-50.11-50.11V98.11A50.17,50.17,0,0,1,140.56,48h150.1a15,15,0,0,1,10.61,4.39L415.15,166.27a15,15,0,0,1,4.39,10.61v223A50.17,50.17,0,0,1,369.43,450ZM140.56,78a20.13,20.13,0,0,0-20.11,20.11V399.89A20.13,20.13,0,0,0,140.56,420H369.43a20.13,20.13,0,0,0,20.11-20.11V183.09L284.45,78Z"/><path d="M404.54,191.88H325.77a50.17,50.17,0,0,1-50.11-50.11V63a15,15,0,0,1,30,0v78.77a20.13,20.13,0,0,0,20.11,20.11h78.77a15,15,0,1,1,0,30Z"/><path d="M201.06,279.14c-7.55,0-11.92,4.24-11.92,13.24v35.08c0,9,4.37,13.24,11.79,13.24s11.91-4.24,11.91-13.24V323H205c-4,0-6.22-3.84-6.22-7.94,0-3.84,2.25-7.95,6.22-7.95h22.24c4,0,6.22,3.05,6.22,6.49v13.9c0,22.77-14.3,31.24-32.56,31.24s-32.44-8.47-32.44-31.24V292.38c0-22.77,14.43-31.24,31.77-31.24,18.93,0,33.23,9.53,33.23,26.34,0,7.95-3.31,9.8-10.33,9.8-5.56,0-10.19-1.46-10.32-6.22S212.31,279.14,201.06,279.14Z"/><path d="M245.4,267.36c0-4.36,5.16-6.22,10.32-6.22s10.33,1.86,10.33,6.22v84.19c0,4.24-5.16,6.35-10.33,6.35s-10.32-2.11-10.32-6.35Z"/><path d="M280.34,267.5c0-4.24,4.5-6.36,9-6.36h45.94c4.37,0,6.22,4.64,6.22,8.87,0,4.9-2.25,9.13-6.22,9.13H301v22.38h20c4,0,6.22,3.83,6.22,8.07,0,3.57-1.85,7.81-6.22,7.81H301v34.15c0,4.24-5.16,6.35-10.32,6.35s-10.33-2.11-10.33-6.35Z"/></g>
            </svg>
        </span>
                <span>
                    <?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#4d4d4d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g data-name="Layer 2" id="Layer_2"><rect class="cls-1" height="18" width="30" x="1" y="4"/><polygon class="cls-1" points="31 22 22 28 22 22 31 22"/><line class="cls-1" x1="7" x2="9" y1="8" y2="8"/><line class="cls-1" x1="23" x2="25" y1="8" y2="8"/><path class="cls-1" d="M23,11A7,7,0,0,1,9,11"/></g></svg></span>
            </div>
        </div>
        
    </div>
</div>
    `
 });
$(".facebook_contenner_center_wrap_posts").innerHTML =showpost.join(" ")
const users=[
    {
        name:'Minh Tấn',
        avatar:'/asset/img/user1.jpg'
    },
    {
        name:'Phạm Đức Hùng',
        avatar:'/asset/img/user2.jpg'
    },
    {
        name:'Nguyễn Dương Khoa',
        avatar:'/asset/img/user3.jpg'
    },
    {
        name:'Thuận Lê',
        avatar:'/asset/img/user4.jpg'
    },
    {
        name:'Nguyễn Công Đạt',
        avatar:'/asset/img/user5.jpg'
    },
    {
        name:'Phát Đạt',
        avatar:'/asset/img/user6.jpg'
    },
    {
        name:'Công Phượng',
        avatar:'/asset/img/user7.jpg'
    },
    {
        name:'Trấn Thành',
        avatar:'/asset/img/user8.jpg'
    },
    {
        name:'Đan Trường',
        avatar:'/asset/img/user9.jpg'
    },
    {
        name:'Quang Khải',
        avatar:'/asset/img/user10.jpg'
    },
    {
        name:'Nguyễn Công Đạt',
        avatar:'/asset/img/user5.jpg'
    },
    {
        name:'Phát Đạt',
        avatar:'/asset/img/user6.jpg'
    },
    {
        name:'Công Phượng',
        avatar:'/asset/img/user7.jpg'
    },
    {
        name:'Trấn Thành',
        avatar:'/asset/img/user8.jpg'
    },
    {
        name:'Đan Trường',
        avatar:'/asset/img/user9.jpg'
    },
    {
        name:'Quang Khải',
        avatar:'/asset/img/user10.jpg'
    }
]

 const infoUser=users.map(function(user){
    return `
    <li class="facebook_contenner_item facebook_contenner_item_right">
    <a href="#">
    <img class="facebook_contenner_icon_user facebook_contenner_icon_user_right " src="${user.avatar}" alt="">
    <div class="facebook_contenner_item_name">${user.name}</div>
    </a>
    </li>
    `
 });
$(".facebook_contenner_list_content").innerHTML =infoUser.join(" ")
