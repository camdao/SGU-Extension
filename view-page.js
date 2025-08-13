function renderCoursesTable(data) {
  const courses = data.ds_nhom_to || [];
  const monHocMap = (data.ds_mon_hoc || []).reduce((map, mh) => {
    map[mh.ma] = mh.ten || '';  // map mã môn => tên môn
    return map;
  }, {});

  return `
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
          ${courses.map(course => `
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