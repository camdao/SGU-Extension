function renderCoursesTable(data) {
  const courses = data.ds_nhom_to || [];
  const monHocMap = (data.ds_mon_hoc || []).reduce((map, mh) => {
    map[mh.ma] = mh.ten || ''; 
    return map;
  }, {});

  return `
    <div _ngcontent-cwi-c161 class="card shadow-lg mb-2">
      <ngx-spinner _ngcontent-cwi-c161 name="spinner-dkmh" type="ball-clip-rotate-multiple" size="medium" _nghost-cwi-c42
        class="ng-tns-c42-1 ng-star-inserted">
        <!---->
      </ngx-spinner>
      <div _ngcontent-cwi-c161 class="card-header text-white text-uppercase bg-primary">
        <i _ngcontent-cwi-c161 class="fas fa-atom pr-2"></i> ${data.hoc_ky_dang_ky} 
      </div>
      <div _ngcontent-cwi-c161 class="card-body p-0">
          <div _ngcontent-cwi-c161 class="row d-flex justify-content-center text-nowrap pt-1">
              <div _ngcontent-cwi-c161 class="d-inline-block col-lg-6 col-md-11 col-sm-12 mb-1">
                  <ng-select _ngcontent-cwi-c161
                      class="ng-select ng-select-single ng-pristine ng-valid ng-select-bottom ng-touched">
                        <div class="ng-select-container ng-has-value" style="display: flex; align-items: center; justify-content: center; user-select: none;">
                          <div class="ng-value-container" style="display: flex; flex:1">
                            <div class="ng-placeholder"></div>
                            <div class="ng-value ng-star-inserted">
                              <span class="ng-value-label ng-star-inserted"> 
                                Lọc theo môn học
                              </span>
                            </div>
                            <div role="combobox" aria-haspopup="listbox" class="ng-input" aria-expanded="false">
                            </div>
                          </div>
                          <!---->
                          <!---->
                        </div>
                      <!---->
                  </ng-select>
                </div>
                <div _ngcontent-cwi-c161 class="d-inline-block col-lg-6 col-md-11 col-sm-12 mb-1">
                    <!---->
                    <ng-select _ngcontent-moq-c161="" bindlabel="ten" bindvalue="ma"
                        class="ng-select-searchable ng-select ng-select-single ng-pristine ng-valid ng-star-inserted ng-touched ng-select-bottom">
                        <div class="ng-select-container" style="display: flex; align-items: center;user-select: none;">
                            <div class="ng-value-container">
                                <div class="ng-placeholder">--Chọn--</div>
                                <!---->
                                <!---->
                                <div role="combobox" aria-haspopup="listbox" class="ng-input" aria-expanded="false"
                                  style="position: absolute; left: 15px; width: 100%;">
                                  <input
                                    aria-autocomplete="list"
                                    type="text"
                                    autocorrect="off"
                                    autocapitalize="off"
                                    autocomplete="a237811db907"
                                    style="box-sizing: content-box;
                                          background: none transparent;
                                          border: 0 none;
                                          box-shadow: none;
                                          outline: none;
                                          padding: 0;
                                          cursor: default;
                                          width: 100%;">
                                </div>
                            </div>
                            <!---->
                        </div>
                        <!---->
                    </ng-select>
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                </div>
          </div>
      <h6 class="mb-0 pl-2 py-2 mt-3 table-active">Danh sách môn học mở cho đăng ký</h6>
      <div class="table-responsive-lg">
        <table class="table table-sm table-hover table-bordered table-sticky-header mb-0">
          <thead>
            <tr class="bg-primary text-center text-nowrap">
              <th style="width: 5%;">Mã MH</th>
              <th class="col_200">Tên môn học</th>
              <th style="width: 5%;">Nhóm</th>
              <th style="width: 4%;">Tổ</th>
              <th style="width: 4%;">Số TC</th>
              <th style="width: 6%;">Lớp</th>
              <th style="width: 4%;">Số lượng</th>
              <th style="width: 4%;">Còn lại</th>
              <th style="width: 20%;">Thời khóa biểu</th>
            </tr>
          </thead>
          <tbody>
            ${courses.slice(0, 10).map(course => `
              <tr class="text-muted text-center">
                <td>${course.ma_mon}</td>
                <td class="text-left">${monHocMap[course.ma_mon] || course.ten_mon || ''}</td>
                <td>${course.nhom_to || ''}</td>
                <td>${course.to || ''}</td>
                <td style="font-weight: 600;">${course.so_tc}</td>
                <td>${course.lop}</td>
                <td>${course.sl_cp}</td>
                <td class="text-danger">${course.sl_cl}</td>
                <td class="text-left"><small>${course.tkb ? course.tkb.replace(/<hr>/g, '<br>') : ''}</small></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

onElementReady('#WEB_XEMDANHSACHDANGKYMH', (element) => {
    element.addEventListener('click', async (e) => {
      const frame = document.querySelector('.frame_left');
      if (frame) {
        frame.innerHTML = 'Đang tải...';
        const responseJson = await fetchStudyList();
        const html = renderCoursesTable(responseJson.data)
        frame.innerHTML = html;
      }
    });
});