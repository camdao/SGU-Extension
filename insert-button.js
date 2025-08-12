const htmlToInsert = `
<ul class="list-unstyled my-1 ml-1 ng-star-inserted" _ngcontent-ikf-c69="">
  <li _ngcontent-ikf-c69="">
    <div class="text-cus" _ngcontent-ikf-c69="">
      <a 
        class="link-primary text-decoration-none text-primary clickable" 
        style="width: 20px;" 
        id="WEB_XEMDANHSACHDANGKYMH" 
        title="Đăng ký môn học" 
        aria-expanded="true" 
        _ngcontent-ikf-c69=""
      >
        <span class="cust-font fas fa-angle-right" style="width: 12px;" _ngcontent-ikf-c69=""></span> 
        Đăng ký môn học
      </a>
      <a 
        class="link-primary text-decoration-none text-primary clickable" 
        aria-expanded="true" 
        _ngcontent-ikf-c69=""
      >
        <ul class="tree" hidden _ngcontent-ikf-c69="">
        </ul>
      </a>
    </div>
    <div class="border-bottom" _ngcontent-ikf-c69=""></div>
  </li>
</ul>
`;

onElementReady('app-chucnang .card .card-body', (cardBody) => {
  cardBody.insertAdjacentHTML('beforeend', htmlToInsert);
});
