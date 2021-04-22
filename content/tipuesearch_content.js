var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '每週課程', 'text': '', 'tags': '', 'url': '每週課程.html'}, {'title': 'W1', 'text': '至\xa0 http://a.kmol.info:88 \xa0下載\xa0Python 3.9.1 版的可攜程式系統\xa0kmol2021_v2_spring \n \n 從\xa0 http://a.kmol.info:88 \xa0取下 Python 3.9.1 版的可攜程式系統, 特別將需要 @gm 權限的兩階段程式系統, 從 @gm 移動到\xa0 http://a.kmol.info:88 , 其中使用 sftp 與 ssh 對 a.kmol.info 進行連線。 \n 用電腦教室第三磁區上課時使用 IPv6 網路協定上線，不過因為 Python 會自動用 Windows 系統中設定的 Proxy，在 Python 3.8.5 可以直接執行連結到 IPv4 網站的程式。 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'Repository: https://github.com/40923107/wcm2021 \n Github Pages: https://40923107.github.io/wcm2021/content/index.html \n 用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站： \n 1.登入 Github 帳號 \n 2.將瀏覽器指向   https://github.com/40923107/wcm2021 \n 3.利用 \xa0 Use this template \xa0 建立倉儲 \n clone 帶有 CMSiMDE 的指令: \n \n \n \n \n \n \n 1 \n \n \n \n git clone --recurse-submodules URL \n \n \n \n \n \n \n \n 上述 URL 即為希望將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置, 也就是 Github 倉儲網址. \n 每一個以 cmstemplate 為 template 的倉儲, 其根目錄都帶有: \n 1. init.py \xa0- 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n 2. http-server.py \xa0- 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n 3. cms.bat \xa0- 讓使用者執行動態網站用的批次檔案. \n 4. acp.bat\xa0 - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ， git commit -m "提交訊息", 以及 git push 等三個指令. \n \n', 'tags': '', 'url': 'W2.html'}, {'title': '基本操作', 'text': '利用 cms.bat 啟用動態網站，利用 https://localhost:9443 \xa0在近端維護網站內容，用 "admin" 登入管理網站內容. \n', 'tags': '', 'url': '基本操作.html'}, {'title': '編輯網站內容', 'text': '透過表單中的\xa0 Edit All\xa0 或\xa0 Edit\xa0 按鈕進行.\xa0 Edit \xa0 用在單頁編輯, 操作時先選擇左側的頁面標題, 等系統顯示該頁面內容後, 再點擊上方的 \xa0 Edit\xa0 按鈕進入該頁面的編輯模式. \n Edit All\xa0 通常用在單次刪除所有頁面內容或只保留特定頁面用, 點擊後會將所有頁面內容置於編輯器中。 \n \n', 'tags': '', 'url': '編輯網站內容.html'}, {'title': '上傳與引用檔案', 'text': 'File Upload \xa0可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n \n', 'tags': '', 'url': '上傳與引用檔案.html'}, {'title': '上傳與引用圖片', 'text': 'Image Upload\xa0 可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '上傳與引用圖片.html'}, {'title': 'W3', 'text': '到 mde.tw 的 cmstemplate網站中，了解倉儲中常見的問題 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '自選組員，6 人一組 \n 組員：40923102、40923104、40923105、40923106、40923107、40923110 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '將cmsimde更新到最新版本： \n 先進入 cmsimde 子目錄, 打git pull origin master，拉回最新版本的程式碼,，從 up_dir 複製到倉儲根目錄。 \n 利用 Putty 設定以 SSH 把近端版本推送至 Github \n 1.登入 Github ，選擇帳號右下方 Settings - SSH and GPG keys 備用 \n \n 2.在 start_ipv6.bat 加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe \n 3.開啟 Putty 目錄中的 puttygen.exe, 點 Generate , 讓滑鼠在上方空白處隨意移動, 建立 key, 利用滑鼠選擇 key 區域中的文字資料, 複製到 SciTE 編輯區, 存為\xa0 id_rsa 檔, 並將此內容貼至 Github SSH key 欄位中後儲存. \n \n 4.在 puttygen.exe 視窗下方, 選擇 \xa0 Save private key \xa0 , 將 key 存為 my_key.ppk 或"學號.ppk"備用. \n 5.在 putty.exe 中建立一個 session，用於以 ssh 協定連線到 github.com，自訂session名稱，必須與倉儲 .git 目錄中 config 的連線 url session 名稱對應. \n 6.注意SSH 中的 Auth 是否對應到前面存檔的 .ppk private key 位置. \n 7.Github session 設定完成後, 從 [HKEY_CURRENT_USER\\SOFTWARE\\SimonTatham] 將 registry 設定匯出存為 y:\\my_github.reg, 並在 start_ipv6.bat 中以\xa0 regedit.exe /S y:\\my_github.reg 將設定匯入. \n \xa0 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '1. 建立 Heroku 帳號： 進入 \xa0 https://heroku.com ，用學校gmail登記一個 Heroku 帳號。 \n 去 \xa0 http://a.kmol.info:88 \xa0，下載heroku.7z \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'Heroku', 'text': '1. 建立 Heroku app： 登入 Heroku 後, 以 s + 學號建立第一個 app。 \n 2. 下 載 Heroku CLI：從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案, 解壓縮到電腦。 \n 3. 修改命令搜尋路徑： \xa0修改隨身系統的啟動批次檔案，讓 Windows 的命令視窗中可以執行 heroku.exe，（將 heroku.exe 所在目錄位置, 設為 Windows 搜尋路徑之一），再重新啟動start_ipv4 / ipv6.bat \n 4. 測試 heroku 執行：打 \xa0heroku version 看有沒有回應使用版本。 \n 5. 設定 heroku 代理主機： 在 y:\\home_ipv6 下的 .giconfig 中,\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定. \n 在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n \n 6.設定同步倉儲： 透過 git remote add (Heroku 指令：heroku git:remote -a heroku_倉儲_名稱，之後在 heroku login 狀態下，直接用 git push) 在近端設定一個連線到 Heroku 倉儲的代號，在每次更新 Github Pages 倉儲後，把同步至 Heroku。 \n 7. 以 git 進行提交推送： 用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku", 用 git push heroku 將改版內容推送到對應的 Heroku app 倉儲. \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv6\\_netrc \n heroku login  - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote  - a taiwan - no1 \n \n \n \n \n \n \n \n Heroku 網站 :  https://dashboard.heroku.com/apps/s40923107 \n \n \n', 'tags': '', 'url': 'Heroku.html'}]};