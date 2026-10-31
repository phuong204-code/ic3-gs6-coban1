/**
 * IC3 GS6 Adventure — Challenge Edition
 * Google Sheets leaderboard endpoint.
 * Deploy as Web app: Execute as Me; access Anyone.
 */
const SHEET_NAME = "Leaderboard";
const HEADERS = ["Timestamp", "Name", "Class", "XP", "Completed"];

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "leaderboard";
  if (action !== "leaderboard") return json_({ ok: false, error: "Unknown action" });
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).filter(r => r[1]).map(r => ({
    name: String(r[1]), className: String(r[2]),
    xp: Number(r[3]) || 0, completed: Number(r[4]) || 0
  }));
  const best = {};
  rows.forEach(r => {
    const key = (r.name + "|" + r.className).toLowerCase();
    if (!best[key] || r.xp > best[key].xp) best[key] = r;
  });
  return json_({ ok: true, rows: Object.values(best).sort((a,b) => b.xp-a.xp || b.completed-a.completed) });
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (body.action === "teacher-list") {
      if (!teacherAuthorized_(body.password)) return json_({ ok: false, error: "Sai mật khẩu giáo viên." });
      return json_({ ok: true, rows: readRows_() });
    }
    if (body.action === "teacher-delete") {
      if (!teacherAuthorized_(body.password)) return json_({ ok: false, error: "Sai mật khẩu giáo viên." });
      const sheet = getSheet_();
      if (sheet.getLastRow() > 1) sheet.deleteRows(2, sheet.getLastRow() - 1);
      return json_({ ok: true });
    }
    if (body.action === "teacher-update-class") {
      if (!teacherAuthorized_(body.password)) return json_({ ok: false, error: "Sai mật khẩu giáo viên." });
      const name = String(body.name || "").trim();
      const oldClass = String(body.oldClass || "").trim();
      const newClass = String(body.newClass || "").trim().slice(0, 20);
      if (!name || !oldClass || !newClass) return json_({ ok: false, error: "Thiếu tên học sinh hoặc tên lớp." });
      const sheet = getSheet_(), values = sheet.getDataRange().getValues();
      let changed = false;
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][1]) === name && String(values[i][2]) === oldClass) {
          sheet.getRange(i + 1, 3).setValue(newClass);
          changed = true;
        }
      }
      return json_({ ok: changed, error: changed ? "" : "Không tìm thấy học sinh cần cập nhật." });
    }
    if (body.action !== "submit") return json_({ ok: false, error: "Unknown action" });
    const name = String(body.name || "").trim().slice(0, 40);
    const className = String(body.className || "").trim().slice(0, 20);
    const xp = Math.max(0, Math.min(2760, Math.floor(Number(body.xp) || 0)));
    const completed = Math.max(0, Math.min(24, Math.floor(Number(body.completed) || 0)));
    if (!name || !className) return json_({ ok: false, error: "Vui lòng nhập tên và lớp." });
    const sheet = getSheet_();
    const values = sheet.getDataRange().getValues();
    const key = (name + "|" + className).toLowerCase();
    let rowIndex = -1;
    for (let i = 1; i < values.length; i++) {
      if ((String(values[i][1]) + "|" + String(values[i][2])).toLowerCase() === key) { rowIndex = i + 1; break; }
    }
    const row = [new Date(), name, className, xp, completed];
    if (rowIndex > 0) {
      const old = sheet.getRange(rowIndex, 4, 1, 2).getValues()[0];
      row[3] = Math.max(Number(old[0]) || 0, xp);
      row[4] = Math.max(Number(old[1]) || 0, completed);
      sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
    } else sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) { return json_({ ok: false, error: String(err) }); }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#172541").setFontColor("#ffffff");
  }
  return sheet;
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Đặt Script Property TEACHER_PASSWORD trong Apps Script Project Settings.
// Không lưu mật khẩu quản trị trong mã nguồn công khai trên GitHub.
function teacherAuthorized_(candidate) {
  const expected = PropertiesService.getScriptProperties().getProperty("TEACHER_PASSWORD");
  return !!expected && String(candidate || "") === expected;
}
function readRows_() {
  const values = getSheet_().getDataRange().getValues();
  return values.slice(1).filter(r => r[1]).map(r => ({
    name: String(r[1]), className: String(r[2]),
    xp: Number(r[3]) || 0, completed: Number(r[4]) || 0
  })).sort((a,b) => b.xp-a.xp || b.completed-a.completed);
}
