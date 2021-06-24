var tipuesearch = {"pages": [{'title': '首頁', 'text': '第二組. \n 組長：40923105 \n 組員： 40923102、40923104、40923106、40923107、40923110 \n \n 個人倉儲： https://github.com/40923107/wcm2021 \n 小組倉儲： https://github.com/40923107/wcm2021-ag2 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 https://40923107.github.io/wcm2021-ag2/content/index.html \n 個人 Heroku : https://dashboard.heroku.com/apps/a40923107 \n 小組 Heroku： https://wcm2021-ag2.herokuapp.com/content/index.html \n fossil :\xa0 https://fossil.kmol.info/u/40923107/index \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 https://fossil.kmol.info/u/40923107/doc/trunk/content/ \n Gitlab： https://gitlab.com/40923107/wcm2021 \n \xa0 \n 心得 \n 再建立並執行 Fossil、Heroku、RoboDK、Gitlab 及其他程式、軟體的操作過程中，學到如何架設網站、編寫程式、理解各種程式碼，且在操作遇到問題時，能理解電腦再說甚麼，並上網找解決方法、跟組員討論。另外，在遇到各種問題時，之前還不習慣做紀錄，現在已經習慣在上課時做筆記，並把所有操作過程即時做照片紀錄或影片紀錄，這樣不只能加深印象，還能教遇到同樣問題的組員。 \n', 'tags': '', 'url': '首頁.html'}, {'title': 'Fossil', 'text': '個人操作影片： https://youtu.be/NNNjrHc922Q \n 小組操作教學影片： \n https://youtu.be/vZg9ktF6GQk \n https://youtu.be/b4gaPmvRxHM \n https://youtu.be/qg9JmMrDFNw \n \n 1.搜尋 Fossil scm，到 Download 下載 fossil.exe，看電腦支援 32 位元或 64 位元，下載到 Y 槽 \n \n \n 2.開啟 ipv4.bat \n \n \n \n 3. fossil open 後，複製 wcm2021裡面的檔案，貼到40923107的資料夾 \n \n \n \n \n 4.之後推 Github 倉儲內容到 Fossil ，要先 git pull 倉儲內容下來 \n \n \n 5.再推上去 Fossil \n \n \n', 'tags': '', 'url': 'Fossil.html'}, {'title': '遇到的問題：', 'text': 'Fossil 也可以用 cms 編輯網站，但不能 acp 推到 Github，要用 fossil commit 推，否則會和 github 倉儲網站內容衝突。 \n \n', 'tags': '', 'url': '遇到的問題：.html'}, {'title': '網路環境', 'text': '介紹影片： https://youtu.be/ULUfzM2oB7I \n \n 我是用自己手機的網路連線 \n \n \n 使用 ipv4.bat \n \n \n 上課一直是用自己的網路連線，到\xa0 http://a.kmol.info:88 \xa0下載，需要開啟 proxy\xa0 \n \n', 'tags': '', 'url': '網路環境.html'}, {'title': 'Heroku 網站', 'text': '操作影片： https://youtu.be/gu-i5ldD33g \n Heroku 網站 : \xa0 https://a40923107.herokuapp.com/content/index.html \n \n 1. 建立 Heroku app： 登入 Heroku 後, 以 s + 學號建立第一個 app。 \n 2. 下 載 Heroku CLI：從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案, 解壓縮到電腦。 \n 3. 修改命令搜尋路徑： \xa0修改隨身系統的啟動批次檔案，讓 Windows 的命令視窗中可以執行 heroku.exe，（將 heroku.exe 所在目錄位置, 設為 Windows 搜尋路徑之一），再重新啟動start_ipv4 / ipv6.bat \n 4. 測試 heroku 執行：打 \xa0heroku version 看有沒有回應使用版本。 \n 5. 設定 heroku 代理主機：因為我們用自己的筆電跟網路，因此改 在 y:\\home_ipv4 下的 .giconfig 中,\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定。 \n 在 start_ipv4.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM \xa0 for \xa0 heroku login \n REM set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n REM set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n 因為是使用自己的筆電，要在開頭打上 REM 使它變成註解。 \n \n \n 6.設定同步倉儲： 透過 git remote add (Heroku 指令：heroku git:remote -a heroku_倉儲_名稱，之後在 heroku login 狀態下，直接用 git push) 在近端設定一個連線到 Heroku 倉儲的代號，在每次更新 Github Pages 倉儲後，把同步至 Heroku。 \n \n \n \n \n 7. 以 git 進行提交推送： 用 heroku git:remote -a 設定的同步倉儲，推送名稱內定為 "heroku", 用 git push heroku 把改版內容推到對應的 Heroku app 倉儲。 \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv4\\_netrc \n heroku login \xa0 - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote \xa0 - a taiwan - no1 \n \n \n \n \n \n \n 之後推 github 倉儲網站內容內容到 Heroku\xa0 \n \n \n \n \n', 'tags': '', 'url': 'Heroku 網站.html'}, {'title': '網路直播', 'text': 'OBS 操作影片： https://youtu.be/N3TDgd1OhwQ \n 先到網路上下載 OBS \n 之後等以下建立頻道手機驗證完成後在執行 OBS 直播 \n \n 1.建立頻道 \n \n \n 2.進行直播 \n \n \n 3.完成手機驗證 \n \n 等24小時後即可進行直播 \n \n', 'tags': '', 'url': '網路直播.html'}, {'title': 'RoboDK執行', 'text': '', 'tags': '', 'url': 'RoboDK執行.html'}, {'title': '操作影片', 'text': 'https://youtu.be/oVQ48E5JbKQ \n', 'tags': '', 'url': '操作影片.html'}, {'title': '用學校網路執行', 'text': '1.到 ipv4.bat 編輯 \n \n \n 2.啟動 ipv4.bat，執行 pip install robodk \n \n \n 3.拉 pick_and_place.py 到 SciTE 編輯器中 \n \n \n 4.Tools go \n', 'tags': '', 'url': '用學校網路執行.html'}, {'title': '用自己網路執行', 'text': '1.在自己電腦的 cmd 打 ipconfig/all \n \n \n 2.找到 IPv4 位址 172.20.10.5 \n \n \xa0 \n 3.在\xa0robodk522_portable 中的 examples 資料夾，拉 pick_and_place.py 到編輯器，在 RDK = Robolink () 括弧內打上 "170.20.10.5"，然後存檔。 \n \n \n 4.開啟\xa0RoboDK.exe 後，點加載文件，進到 examples 資料夾，除了\xa0pick_and_place.py 以外其他全選開啟。 \n \n \n 5. \n \n \n 6.點＂其他"，勾選 "允許外部API"，再點開API服務器IP \n \n \n 7.確認是否為正確 IPv4 位址 \n \n \n 8.回到 pick_and_place.py，按 Tools、Go。 \n \n \xa0 \n \n', 'tags': '', 'url': '用自己網路執行.html'}, {'title': '每週課程筆記', 'text': '', 'tags': '', 'url': '每週課程筆記.html'}, {'title': 'W1', 'text': '至\xa0 http://a.kmol.info:88 \xa0下載\xa0Python 3.9.1 版的可攜程式系統\xa0kmol2021_v2_spring \n \n 從\xa0 http://a.kmol.info:88 \xa0取下 Python 3.9.1 版的可攜程式系統，特別將需要 @gm 權限的兩階段程式系統，從 @gm 移動到\xa0 http://a.kmol.info:88 ，其中使用 sftp 與 ssh 對 a.kmol.info 進行連線。 \n 用電腦教室第三磁區上課時使用 IPv6 網路協定上線，不過因為 Python 會自動用 Windows 系統中設定的 Proxy，在 Python 3.8.5 可以直接執行連結到 IPv4 網站的程式。 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'Repository: https://github.com/40923107/wcm2021 \n Github Pages: https://40923107.github.io/wcm2021/content/index.html \n 用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站： \n 1.登入 Github 帳號 \n 2.將瀏覽器指向   https://github.com/40923107/wcm2021 \n 3.利用 \xa0 Use this template \xa0 建立倉儲 \n clone 帶有 CMSiMDE 的指令: \n \n \n \n \n \n \n 1 \n \n \n \n git clone --recurse-submodules URL \n \n \n \n \n \n \n \n 將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置，也就是 Github 倉儲網址。 \n 每一個以 cmstemplate 為 template 的倉儲，根目錄都帶有: \n 1. init.py \xa0- 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 是動態網站啟動時所佔用的埠號. \n 2. http-server.py \xa0- 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n 3. cms.bat \xa0- 讓使用者執行動態網站用的批次檔案. \n 4. acp.bat\xa0 - 若已將倉儲設為 ssh 連線，可以在執行此批次指令之後加上提交字串，即可執行 git add，git commit -m "提交訊息"，及 git push 等三個指令. \n \n 開始編輯並推送個人倉儲網站內容 \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': '基本操作', 'text': '利用 cms.bat 啟用動態網站，利用 https://localhost:9443 \xa0在近端維護網站內容，用 "admin" 登入管理網站內容。 \n', 'tags': '', 'url': '基本操作.html'}, {'title': '編輯網站內容', 'text': '透過表單中的\xa0 Edit All \xa0或\xa0 Edit \xa0按鈕進行。\xa0 Edit \xa0 用在單頁編輯，先選擇左側的頁面標題，等顯示內容後, 再點上方的 \xa0 Edit \xa0進入編輯模式. \n Edit All \xa0用在單次刪除所有頁面內容，或只保留特定頁面用，點擊後會將所有頁面內容置於編輯器中。 \n \n', 'tags': '', 'url': '編輯網站內容.html'}, {'title': '上傳與引用檔案', 'text': 'File Upload \xa0可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n \n', 'tags': '', 'url': '上傳與引用檔案.html'}, {'title': '上傳與引用圖片', 'text': 'Image Upload \xa0可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄。 \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '上傳與引用圖片.html'}, {'title': '嵌入程式碼', 'text': '利用 Insert/Edit code 功能, 可以嵌入程式碼 \n \n', 'tags': '', 'url': '嵌入程式碼.html'}, {'title': 'W3', 'text': '到 mde.tw 的 cmstemplate網站中，了解倉儲中常見的問題。 \n 處理組員前三週的問題。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '自選組員，6 人一組 \n 組員：40923102、40923104、40923105、40923106、40923107、40923110 \n \n import requests\nimport bs4\n# for os.environ and os.system()\nimport os\n# for geting html file path\nimport pathlib\n \n# for pythn 3.9\n\n \n\'\'\'\nurl:  \'class_ajax.php\',\ndata: { pselyr: pselyr, pselclss: pselclss\n\'\'\'\nsemester = \'1092\'\nclassno = \'42311\'\ncolumn = True\n \nif semester == None:\n    semester = \'1091\'\nif classno == None:\n    # 42311 is 設一甲\n    classno = \'42311\'\n     \nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \nurl = \'https://qry.nfu.edu.tw/class_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclss\': classno}\n \nresult = requests.post(url, data = post_var, headers = headers)\n\nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("&nbsp", "  ")\noutput += "</table>"\n# print(output)\n# 將 output 寫入 w1_class_local.html\nwith open("w1_class_local.html", "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\w1_class_local.html")\n \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': '教室使用時間表', 'text': 'BGA0710 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0710教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n 四設計二甲 工程數學(二) 何智廷 \n 五精三甲 工程數學(一) 何智廷 \n 五精三甲 工程數學(一) 何智廷 \n 四設計二甲 熱力學 陳建信 \n \xa0 \n \xa0 \n \n \n 第二節 \n 四設計一攜 機械製造 林瑞璋 \n 四設計二甲 工程數學(二) 何智廷 \n 五精三甲 工程數學(一) 何智廷 \n 四設計一攜 工程材料 許禎祥 \n 四設計二乙 熱力學 陳建信 \n \xa0 \n \xa0 \n \n \n 第三節 \n 四設計一攜 機械製造 林瑞璋 \n 四設計二乙 工程數學(二) 黃自貴 \n 四設計二乙 熱力學 陳建信 \n 四設計一攜 工程材料 許禎祥 \n 四設計一甲 靜力學 尤尚邦 \n \xa0 \n \xa0 \n \n \n 第四節 \n 四設計二乙 工程數學(二) 黃自貴 \n 四設計二乙 工程數學(二) 黃自貴 \n 四設計二乙 熱力學 陳建信 \n 四設計一攜 工程材料 許禎祥 \n 四設計一甲 靜力學 尤尚邦 \n \xa0 \n \xa0 \n \n \n 第五節 \n \xa0 \n \xa0 \n 五精三甲 機構學 王威立 \n \xa0 \n 五精三甲 流體力學 陳建信 \n \xa0 \n \xa0 \n \n \n 第六節 \n 四設計一乙 工具機學 黃金龍 \n \xa0 \n 五精三甲 機構學 王威立 \n 四設計二攜 材料力學 尤尚邦 \n 五精三甲 流體力學 陳建信 \n \xa0 \n \xa0 \n \n \n 第七節 \n \xa0 \n \xa0 \n \xa0 \n 四設計二攜 材料力學 尤尚邦 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n \xa0 \n \xa0 \n 四設計二攜 材料力學 尤尚邦 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n 四設計四攜 熱傳學 陳建信 \n \xa0 \n 四設計二訓 國文(二) 馬嘉賢 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n 四設計四攜 熱傳學 陳建信 \n \xa0 \n 四設計二訓 國文(二) 馬嘉賢 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n 四設計四攜 熱傳學 陳建信 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0730 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0730教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n 五精三甲 精密量測 黃金龍 \n \xa0 \n \xa0 \n \n \n 第二節 \n 四設計二甲 精密量測 黃金龍 \n 四設計二乙 材料力學 林玉華 \n 四設計一乙 靜力學 林玉華 \n \xa0 \n 五精三甲 精密量測 黃金龍 \n 四設計二訓 動力學 尤尚邦 \n \xa0 \n \n \n 第三節 \n 四設計二甲 精密量測 黃金龍 \n 四設計二甲 材料力學 林玉華 \n 五精三甲 機件原理 林玉華 \n 四設計二甲 工程數學(二) 何智廷 \n 四設計一乙 靜力學 林玉華 \n 四設計二訓 動力學 尤尚邦 \n \xa0 \n \n \n 第四節 \n 四設計二甲 精密量測 黃金龍 \n 四設計二甲 材料力學 林玉華 \n 五精三甲 機件原理 林玉華 \n 四設計二甲 材料力學 林玉華 \n 四設計一乙 靜力學 林玉華 \n 四設計二訓 動力學 尤尚邦 \n \xa0 \n \n \n 第五節 \n 四設計二甲 熱力學 陳建信 \n 五精二甲 動力學 王威立 \n 五精一甲 P-TECH課程(二) 毛彥傑 \n 四設計二乙 材料力學 林玉華 \n 四設計一乙 工具機學 黃金龍 \n \xa0 \n \xa0 \n \n \n 第六節 \n 四設計二甲 熱力學 陳建信 \n 五精二甲 動力學 王威立 \n 五精二甲 P-TECH課程(三) 毛彥傑 \n 四設計二乙 材料力學 林玉華 \n 四設計一乙 工具機學 黃金龍 \n \xa0 \n \xa0 \n \n \n 第七節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n 五精三甲 機構學 王威立 \n \xa0 \n 五精三甲 精密量測 黃金龍 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n 四設計二訓 微積分 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n 四設計二訓 微積分 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n 四設計二訓 微積分 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0760 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0760教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n 四設計三甲 熱傳學 陳建信 \n 碩設計一甲 實驗設計與分析 林瑞璋 \n 碩設計一甲 機械振動學 黃運琳 \n 博機電一甲 機器系統動力學 黃運琳 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第三節 \n 四設計三甲 熱傳學 陳建信 \n 碩設計一甲 實驗設計與分析 林瑞璋 \n 碩設計一甲 機械振動學 黃運琳 \n 博機電一甲 機器系統動力學 黃運琳 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第四節 \n 四設計三甲 熱傳學 陳建信 \n 碩設計一甲 實驗設計與分析 林瑞璋 \n 碩設計一甲 機械振動學 黃運琳 \n 博機電一甲 機器系統動力學 黃運琳 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第五節 \n 碩設計一甲 系統整合設計 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第六節 \n 碩設計一甲 系統整合設計 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第七節 \n 碩設計一甲 系統整合設計 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n 四設計四攜 新產品設計開發 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n 四設計四攜 新產品設計開發 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n 四設計四攜 新產品設計開發 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0810 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0810教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n 四設計一甲 工廠實習(二)CNC及CAM實習 蕭俊卿 \n \xa0 \n 四設計三乙 工程設計 周榮源 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n 四設計一甲 工廠實習(二)CNC及CAM實習 蕭俊卿 \n 四設計二攜 電腦輔助設計實習 蕭俊卿 \n 四設計三乙 工程設計 周榮源 \n 四設計一甲 網際內容管理 嚴家銘 \n 五精一甲 網際內容管理 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第三節 \n 四設計一甲 工廠實習(二)CNC及CAM實習 蕭俊卿 \n 四設計二攜 電腦輔助設計實習 蕭俊卿 \n 四設計三乙 工程設計 周榮源 \n 四設計一甲 網際內容管理 嚴家銘 \n 五精一甲 網際內容管理 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第四節 \n \xa0 \n 四設計二攜 電腦輔助設計實習 蕭俊卿 \n 四設計三乙 工程設計 周榮源 \n 四設計一甲 網際內容管理 嚴家銘 \n 五精一甲 網際內容管理 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第五節 \n 五精三甲 數控加工實習(二) 林啓仁 \n 四設計三甲 工程設計 周榮源 \n 四設計二攜 機器動力學 黃運琳 \n 四設計二甲 協同產品設計實習 嚴家銘 \n 四設計二乙 協同產品設計實習 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第六節 \n 五精三甲 數控加工實習(二) 林啓仁 \n 四設計三甲 工程設計 周榮源 \n 四設計二攜 機器動力學 黃運琳 \n 四設計二甲 協同產品設計實習 嚴家銘 \n 四設計二乙 協同產品設計實習 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第七節 \n 五精三甲 數控加工實習(二) 林啓仁 \n 四設計三甲 工程設計 周榮源 \n 四設計二攜 機器動力學 黃運琳 \n 四設計二甲 協同產品設計實習 嚴家銘 \n 四設計二乙 協同產品設計實習 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n 四設計三甲 工程設計 周榮源 \n \xa0 \n 四設計二甲 協同產品設計實習 嚴家銘 \n 四設計二乙 協同產品設計實習 嚴家銘 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0820 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0820教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第七節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0823 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0823教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n \xa0 \n \xa0 \n 碩設計一甲 醫療器材特論 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n \xa0 \n \xa0 \n \xa0 \n 碩設計一甲 醫療器材特論 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第三節 \n \xa0 \n \xa0 \n \xa0 \n 碩設計一甲 醫療器材特論 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第四節 \n \xa0 \n \xa0 \n \xa0 \n 碩設計一甲 醫療器材特論深碗學習 毛彥傑 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第五節 \n \xa0 \n 碩設計一甲 工業通風 許清閔 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第六節 \n \xa0 \n 碩設計一甲 工業通風 許清閔 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第七節 \n \xa0 \n 碩設計一甲 工業通風 許清閔 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0830 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0830教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n 四設計一乙 機械製圖(二) 王培郁 \n 五精一甲 機械製圖(一) 許清閔 \n 四設計一甲 機械製圖(二) 王培郁 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n 四設計一乙 機械製圖(二) 王培郁 \n 五精一甲 機械製圖(一) 許清閔 \n 四設計一甲 機械製圖(二) 王培郁 \n 四設計三甲 數值分析 王威立 \n 四設計三甲 電腦輔助工程分析實習 黃自貴 \n \xa0 \n \xa0 \n \n \n 第三節 \n 四設計一乙 機械製圖(二) 王培郁 \n 五精一甲 機械製圖(一) 許清閔 \n 四設計一甲 機械製圖(二) 王培郁 \n 四設計三甲 數值分析 王威立 \n 四設計三甲 電腦輔助工程分析實習 黃自貴 \n \xa0 \n \xa0 \n \n \n 第四節 \n 四設計一乙 機械製圖(二) 王培郁 \n 五精一甲 機械製圖(一) 許清閔 \n 四設計一甲 機械製圖(二) 王培郁 \n 四設計三甲 數值分析 王威立 \n 四設計三甲 電腦輔助工程分析實習 黃自貴 \n \xa0 \n \xa0 \n \n \n 第五節 \n 四設計三甲 機械設計實習(一) 林瑞璋 \n 四設計一乙 工廠實習(二)CNC及CAM實習 蕭俊卿 \n 四設計三乙 機械設計實習(一) 林瑞璋 \n 四設計三乙 電腦輔助工程分析實習 王威立 \n 四設計二攜 介面技術 黃自貴 \n \xa0 \n \xa0 \n \n \n 第六節 \n 四設計三甲 機械設計實習(一) 林瑞璋 \n 四設計一乙 工廠實習(二)CNC及CAM實習 蕭俊卿 \n 四設計三乙 機械設計實習(一) 林瑞璋 \n 四設計三乙 電腦輔助工程分析實習 王威立 \n 四設計二攜 介面技術 黃自貴 \n \xa0 \n \xa0 \n \n \n 第七節 \n 四設計三甲 機械設計實習(一) 林瑞璋 \n 四設計一乙 工廠實習(二)CNC及CAM實習 蕭俊卿 \n 四設計三乙 機械設計實習(一) 林瑞璋 \n 四設計三乙 電腦輔助工程分析實習 王威立 \n 四設計二攜 介面技術 黃自貴 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n 四設計三乙 機械工程實驗(一)固力實驗 黃運琳 \n \xa0 \n 四設計三甲 機械工程實驗(一)固力實驗 黃運琳 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n 四設計三乙 機械工程實驗(一)固力實驗 黃運琳 \n \xa0 \n 四設計三甲 機械工程實驗(一)固力實驗 黃運琳 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n 四設計二訓 數值分析 陳建信 \n \xa0 \n \xa0 \n 四設計二訓 電腦輔助設計實習 林啓仁 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n 四設計二訓 數值分析 陳建信 \n \xa0 \n \xa0 \n 四設計二訓 電腦輔助設計實習 林啓仁 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n 四設計二訓 數值分析 陳建信 \n \xa0 \n \xa0 \n 四設計二訓 電腦輔助設計實習 林啓仁 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n BGA0842 \n \n \n \n 國立虎尾科技大學 109 學年度第 2 學期 BGA0842教室使用時間表 \n \n \n \n \xa0 \n \n \n 一 \n \n \n 二 \n \n \n 三 \n \n \n 四 \n \n \n 五 \n \n \n 六 \n \n \n 日 \n \n \n \n 第一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第七節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第八節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第九節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十一節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十二節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十三節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十四節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十五節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 第十六節 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n', 'tags': '', 'url': '教室使用時間表.html'}, {'title': '課表', 'text': '\n \n \n 國立虎尾科技大學 109 學年度第 2 學期 四設計一甲 班級課表 \n \n \n 當期課號 \n 科目名稱 \n 選別 \n 學分數 \n 時數 \n 授課教師 \n 每週上課節次 \n 地點 \n 備註 \n \n \n 一 \n 二 \n 三 \n 四 \n 五 \n 六 \n 日 \n \n \n 0732 \n 通識教育講座 \n 必修 \n 1 \n 2 \n 李瑞麟 \n \n \n \n \n \n \n \n \n \n \n 7,8 \n \n \n \n \n \n \n \n \n \n \n \n 學生活動中心 1F ASA0101 音樂廳 \n \n \n \n \n \n \n 0733 \n 國文(二) \n 必修 \n 2 \n 2 \n 薛榕婷 \n \n \n \n \n 7,8 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 一期大樓 2F ATA0201 普通教室 \n \n \n \n \n \n \n 0734 \n 微積分(二) \n 必修 \n 3 \n 3 \n 孫挺家 \n \n 4,5,6 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 第二期教學大樓 3F ATB0302 普通教室 \n \n \n \n \n \n \n 0735 \n 體育(二) \n 必修 \n 0 \n 2 \n 洪櫻花 \n \n 7,8 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 經國體育館 B1 CPGB101 PU綜合球場 \n \n \n \n \n \n \n 0736 \n 服務學習(二) \n 必修 \n 0 \n 2 \n 黃雅惠 \n \n \n \n \n \n \n \n 7,8 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n OAA0102 虛擬教室 \n \n \n 僅一年級可選修該門所屬班別課程，該班不提供給2-4年級之「重修生」及「轉學生」加選。 \n \n \n \n 0737 \n 靜力學 \n 必修 \n 3 \n 3 \n 尤尚邦 \n \n \n \n \n \n \n \n \n \n \n 5 \n \n \n \n \n \n \n \n \n \n \n \n 綜合工程一館 6F BGA0640 創意設計室 \n \n \n \n \n \n \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n \n \n \n \n \n \n \n \n \n 3,4 \n \n \n \n \n \n \n \n \n 綜合工程一館 7F BGA0710 研討室(二) \n \n \n \n \n \n \n 0738 \n 物理實驗 \n 必修 \n 1 \n 2 \n 林誠孝 \n \n \n \n \n \n \n \n 5,6 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 機械工程館 4F AME0412 物理實驗室(一) \n \n \n \n \n \n \n 0739 \n 工廠實習(二)CNC及CAM實習 \n 必修 \n 1 \n 3 \n 蕭俊卿 \n \n 1,2,3 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 綜合工程一館 8F BGA0810 電腦輔助設計室 \n \n \n \n \n \n \n 0740 \n 機械製圖(二) \n 必修 \n 2 \n 4 \n 王培郁 \n \n \n \n \n \n \n \n 1,2,3,4 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 綜合工程一館 8F BGA0830 電腦輔助繪圖室 \n \n \n \n \n \n \n 0741 \n 網際內容管理 \n 選修 \n 3 \n 3 \n 嚴家銘 \n \n \n \n \n \n \n \n \n \n \n 2,3,4 \n \n \n \n \n \n \n \n \n \n \n \n 綜合工程一館 8F BGA0810 電腦輔助設計室 \n \n \n \n \n \n \n 0742 \n 物理(二) \n 必修 \n 3 \n 3 \n 林誠孝 \n \n \n \n \n 2 \n \n \n \n \n \n \n \n \n 5,6 \n \n \n \n \n \n \n \n \n 第二期教學大樓 1F ATB0101 普通教室 \n \n \n \n \n \n \n 無 \n 體育(二) \n 無 \n 無 \n 無 \n \xa0 \n 7 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 體育(二) \n 無 \n 無 \n 無 \n \xa0 \n 8 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 英語聽講練習(二) \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n 3 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 英語聽講練習(二) \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n 4 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 通識 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n 5 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 通識 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n 6 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 服務學習 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n \xa0 \n 7 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 服務學習 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n \xa0 \n 8 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 班週會 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n \xa0 \n 9 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 通識講座 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n 7 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n 無 \n 通識講座 \n 無 \n 無 \n 無 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n 8 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n \n \n \n \n', 'tags': '', 'url': '課表.html'}, {'title': 'W5', 'text': 'cmsimde更新： \n 先進入 cmsimde 子目錄, 打git pull origin master，拉回最新版本的程式碼,，從 up_dir 複製到倉儲根目錄。 \n 利用 Putty 設定以 SSH 把近端版本推送至 Github \n 1.登入 Github ，選擇帳號右下方 Settings - SSH and GPG keys 備用 \n \n 2.在 start_ipv4.bat 加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe \n 3.開 Putty 目錄中的 puttygen.exe，點 Generate，滑鼠在上方空白處隨意移動，建立 key，選擇 key 區域中的文字資料，複製到 SciTE 編輯區，存成\xa0 id_rsa 檔，再複製貼到 Github SSH key 儲存。 \n \n 4.在 puttygen.exe 視窗下方, 選擇 \xa0 Save private key \xa0 , 將 key 存為 my_key.ppk 或"學號.ppk"備用. \n 5.在 putty.exe 中建立 session，以 ssh 協定連線到 github.com，自訂session名稱，和倉儲 .git 中 config 的連線 url session 名稱對應。由於我們使用自己的筆電，不用設定proxy。 \n \n 6.到 Auth 確認是否找到 .ppk private key 的位置. \n \n 7.> 在 start_ipv.bat 中設定\xa0 set \xa0 GIT_SSH=%Disk%:\\putty\\plink.exe \xa0 會讓原本 Github 倉儲中 \xa0 .git/config url 指向 domain name 的機制， 轉為透過 Putty 設定的 session 名稱連線 \n 當倉儲使用github.com push 必須修改.git > config 中的 url 格式 \n 1.先用半形 # 去註解 Https 的連線設定 \n 2.git@ session :帳號/倉儲.git\xa0 \xa0 ※ Session 名稱為自己在 putty.exe中所設定的 session \n \n \xa0 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '建立 Heroku 帳號： 進入 \xa0 https://heroku.com ，用學校gmail登記一個 Heroku 帳號。 \n 去 \xa0 http://a.kmol.info:88 \xa0，下載heroku.7z \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'Heroku', 'text': '1. 建立 Heroku app： 登入 Heroku 後, 以 s + 學號建立第一個 app。 \n 2. 下 載 Heroku CLI：從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案, 解壓縮到電腦。 \n 3. 修改命令搜尋路徑： \xa0修改隨身系統的啟動批次檔案，讓 Windows 的命令視窗中可以執行 heroku.exe，（將 heroku.exe 所在目錄位置, 設為 Windows 搜尋路徑之一），再重新啟動start_ipv4 / ipv6.bat \n 4. 測試 heroku 執行：打 \xa0heroku version 看有沒有回應使用版本。 \n 5. 設定 heroku 代理主機：因為我們用自己的筆電，因此改 在 y:\\home_ipv4 下的 .giconfig 中,\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定. \n 在 start_ipv4.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n REM set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n REM set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n (因為是使用自己的網路，要在開頭打上 REM 使它變成註解) \n \n \n \n 6.設定同步倉儲： 透過 git remote add (Heroku 指令：heroku git:remote -a heroku_倉儲_名稱，之後在 heroku login 狀態下，直接用 git push) 在近端設定一個連線到 Heroku 倉儲的代號，在每次更新 Github Pages 倉儲後，把同步至 Heroku。 \n \n \n \n \n 7. 以 git 進行提交推送： 用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku", 用 git push heroku 將改版內容推送到對應的 Heroku app 倉儲. \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv4\\_netrc \n heroku login  - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote  - a taiwan - no1 \n \n \n \n \n \n \n \n Heroku 網站 :  https://dashboard.heroku.com/apps/s40923107 \n \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'W8', 'text': '進行小組期中報告，簡單講解 RoboDK \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10', 'text': '1.到\xa0 http://a.kmol.info:88/ \xa0下載\xa0 robodk522_kmol.7z \n 2.到\xa0 https://sqlitebrowser.org/dl/ \xa0下載\xa0DB Browser for SQLite - .zip (no installer) for 64-bit \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '執行robodk \n 1.到 ipv4.bat 編輯 \n \n \n 2.啟動 ipv4.bat，執行 pip install robodk \n \n \n 3.拉 pick_and_place.py 到 SciTE 編輯器中 \n \n \n 4.Tools go \n \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'OBS + Youtube 分組直播錄影 \n 下載OBS等操作，可點開 "網路直播" 標題查看內容 \n 1.建立頻道 \n \n \n 2.進行直播 \n \n \n 3.完成手機驗證 \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '開始遠距教學 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '分組網站連結建立 \n \n \n \n \n \n 再把右方複製到 CMSIMDE 的 Source code <> \n \n wcm2021--ag1   40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo    wcm2021--ag2   40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo    wcm2021--ag3   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo    wcm2021--ag4   40923148 web  |  40923148 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo    wcm2021--ag5   40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo    wcm2021--ag6   40723240 web  |  40723240 repo  |  grp web  |  grp repo     40723238 web  |  40723238 repo  |  grp web  |  grp repo    wcm2021--ag7   40523923 web  |  40523923 repo  |  grp web  |  grp repo     40523148 web  |  40523148 repo  |  grp web  |  grp repo    wcm2021--ag8   40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '第15週自評分數 \n 老師回答我們課程遇到的問題 \n 每組錄製30分鐘開會操作影片： \n google meet 麥克風問題： https://youtu.be/zAKu1Q5XIZY \n 小組網頁編輯： https://youtu.be/GCVT_h4d2YQ \n 1.先git clone \n \n \n \n 2.再按 fork \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': 'Fossil \n 小組操作教學影片： \n https://youtu.be/vZg9ktF6GQk \n https://youtu.be/b4gaPmvRxHM \n https://youtu.be/qg9JmMrDFNw \n \n 1.搜尋 Fossil scm，到 Download 下載 fossil.exe，看電腦支援 32 位元或 64 位元，下載到 Y 槽 \n \n \n 2.開啟 ipv4.bat \n \n \n \n 3. fossil open 後，複製 wcm2021裡面的檔案，貼到40923107的資料夾 \n \n \n \n \n 4.之後若要同步 Github 的倉儲內容，需要先 git pull ，再 fossil commit -m "initial add"。 \n \n \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': 'Gitlab 同步 \n 同步影片： https://youtu.be/6OatJjjBB84 \n Gitlab： https://gitlab.com/40923107/wcm2021 \n \n 已先用 Github 帳戶登入 Gitlab \n 1.到 puttygen Load 之前設的 SSH key \n \n \n \n 2.複製 Key 貼到 Gitlab 後，點 Add key \n \n \n \n 3.開啟 putty.exe ， Save "gitlab.com"，之後確認 proxy ，在確認 Auth 裡的選取檔案是否正確，最後點 Open \n \n \n \n \n 4.之後會跳出詢問視窗，點"是" \n \n \n 5.開啟 .git 中的 config 編輯畫紅線處，最後 git push gitlab \n \n \n', 'tags': '', 'url': 'W17.html'}]};