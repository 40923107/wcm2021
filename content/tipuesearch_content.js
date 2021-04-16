var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '每週課程', 'text': '', 'tags': '', 'url': '每週課程.html'}, {'title': 'W1', 'text': '至 \xa0 http://a.kmol.info:88 \xa0 下載 \xa0Python 3.9.1 版的可攜程式系統\xa0 kmol2021_v2_spring \n \n 從\xa0 http://a.kmol.info:88 \xa0 取下 Python 3.9.1 版的可攜程式系統, 特別將需要 @gm 權限的兩階段程式系統, 從 @gm 移動到 \xa0 http://a.kmol.info:88 , 其中使用 sftp 與 ssh 對 a.kmol.info 進行連線。 \n 用 電腦教室第三磁區上課時使用 IPv6 網路協定上線，不過因為 Python 會自動用 Windows 系統中設定的 Proxy，在 Python 3.8.5 可以直接執行連結到 IPv4 網站的程式。 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '希望機械設計工程師能夠有基本程式的能力，善用計算機程式與網路, 讓產品開發流程更有效率 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'CMSIMDE', 'text': 'About \n Repository: https://github.com/40923107/wcm2021 \n Github Pages: https://40923107.github.io/wcm2021/content/index.html \n 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站 \n \n 登入 Github 帳號 \n 將瀏覽器指向   https://github.com/40923107/wcm2021 \n 利用 \xa0 Use this template \xa0 建立倉儲 \n \n clone 帶有 CMSiMDE 的指令: \n \n \n \n \n \n \n 1 \n \n \n \n git clone --recurse-submodules URL \n \n \n \n \n \n \n \n 上述 URL 即為希望將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置, 也就是 Github 倉儲網址. \n 每一個以 cmstemplate 為 template 的倉儲, 其根目錄都帶有: \n \n init.py \xa0 - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py \xa0 - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat\xa0 - 讓使用者執行動態網站用的批次檔案. \n acp.bat \xa0 - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n 基本操作 \n 利用 cms.bat 啟用動態網站，並利用 https://localhost:9443 \xa0 在近端 維護網站內容，不過動態網站只能在 localhost 啟動, 因此可以用內建的管理者密碼 "admin" 登入管理網站內容. \n 假如使用者修改 init.py 中的 ip 或 uwsgi 設定, 讓動態網站在外部 IP 啟動, 則必須自行透過動態網站中的\xa0 config \xa0 指令修改管理者密碼. \n 動態網站編輯表單中的\xa0 config \xa0 除了可更改網站管理者密碼外, 也可以更改網站的頁面內容標題 (外部標題可以透過 init.py 中的 site_title 更改). \n 編輯網站內容 \n 透過表單中的 \xa0 Edit All \xa0 或 \xa0 Edit \xa0 按鈕進行. \xa0 Edit \xa0 用在單頁編輯, 操作時先選擇左側的頁面標題, 等系統顯示該頁面內容後, 再點擊上方的 \xa0 Edit \xa0 按鈕進入該頁面的編輯模式. \n Edit All \xa0 通常用在單次刪除所有頁面內容或只保留特定頁面用, 點擊後會將所有頁面內容置於編輯器中。 \n 上傳與引用檔案 \n File Upload\xa0可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 上傳與引用圖片 \n Image Upload \xa0 可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n \n \n \n \xa0 \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'CMSIMDE.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}]};