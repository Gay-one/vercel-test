const music_list = [
    {
        name:"Cheri Cheri Lady",
        band:"Modern Talking",
        release:"1985-09-02"
    },
    {
        name:"House of Memories",
        band:"Panic! At the Disco",
        release:"2016-01-15"
    },
    {
        name:"We shall fight on the beaches",
        band:"Winston Churchill",
        release:"1940-06-18"
    },
    {
        name:"Beggin",
        band:"Maneskin",
        release:"2021-09-27"
    }
    
]
let index = Math.floor(Math.random() * music_list.length)
const song = document.createElement('audio')
const source = document.createElement('source')
const ImgDiv = document.getElementById('img-div')
const skipBack = document.getElementById('skip-1')
const skipForward = document.getElementById('skip-2')
let Sname = document.getElementById('name')
let Sband = document.getElementById('band')
let Srelease = document.getElementById('release')
let Simg = document.getElementById('img-song')

const Home = document.getElementById('Home')
const Add_Music = document.getElementById('Add-music')
const Search_Music = document.getElementById('Search')
const Me = document.getElementById('Me')
const Box = document.getElementById('BOX')

ImgDiv.appendChild(song)
song.appendChild(source)
song.controls = true
song.autoplay = true
source.type = "audio/mp3"
source.src = `song/${music_list[index].name}.mp3`
Sname.textContent = `${music_list[index].name}`
Sband.textContent = `${music_list[index].band}`
Srelease.textContent = `${music_list[index].release}`
Simg.src = `song/${music_list[index].name}.jpg`

song.addEventListener('ended', ()=>{
    index++
    if (index >= music_list.length) {
        index = 0
    }
    source.src = `song/${music_list[index].name}.mp3`
    Sname.textContent = `${music_list[index].name}`
    Sband.textContent = `${music_list[index].band}`
    Srelease.textContent = `${music_list[index].release}`
    Simg.src = `song/${music_list[index].name}.jpg`
    song.load()
})
skipBack.addEventListener('click', ()=>{
    index--
    if (index < 0) {
        index = music_list.length-1
    }
    source.src = `song/${music_list[index].name}.mp3`
    Sname.textContent = `${music_list[index].name}`
    Sband.textContent = `${music_list[index].band}`
    Srelease.textContent = `${music_list[index].release}`
    Simg.src = `song/${music_list[index].name}.jpg`
    song.load()
})
skipForward.addEventListener('click', ()=>{
    index++
    if (index >= music_list.length) {
        index = 0
    }
    source.src = `song/${music_list[index].name}.mp3`
    Sname.textContent = `${music_list[index].name}`
    Sband.textContent = `${music_list[index].band}`
    Srelease.textContent = `${music_list[index].release}`
    Simg.src = `song/${music_list[index].name}.jpg`
    song.load()
})
Home.addEventListener('click', ()=>{
    document.getElementById('Target').remove()
    let div = document.createElement('div')
    let H1 = document.createElement('h1')
    let P1 = document.createElement('p')
    let P2 = document.createElement('p')
    let P3 = document.createElement('p')
    let P4 = document.createElement('p')
    let divin = document.createElement('div')
    H1.textContent = 'SIMPLE-WEB'
    P1.innerHTML = 'SIMPLE-WEB เว็บไซต์เครื่องเล่นเพลงที่ออกแบบมาเพื่อมอบประสบการณ์การฟังเพลงที่เรียบง่าย'
    P2.innerHTML = '<b>ฟีเจอร์</b>'
    P3.innerHTML = 'อินเทอร์เฟซผู้ใช้ที่เรียบง่าย สวยงาม ใช้งานง่าย'
    P4.innerHTML = 'รองรับการเล่นเพลงแบบสุ่ม เล่นซ้ำ และวนลู'
    div.id = 'Target'
    div.classList.add('boxin')
    Box.prepend(div)
    div.appendChild(H1)
    div.appendChild(divin)
    divin.appendChild(P1)
    divin.appendChild(P2)
    divin.appendChild(P3)
    divin.appendChild(P4)
})
Add_Music.addEventListener('click', ()=>{
    document.getElementById('Target').remove()
    let div = document.createElement('div')
    let form = document.createElement('form')
    let div_yack1 = document.createElement('div')
    let div_yack2 = document.createElement('div')
    let div_yack3 = document.createElement('div')
    let div_yack4 = document.createElement('div')
    let div_yack5 = document.createElement('div')
    let div_yack6 = document.createElement('div')
    let input_name = document.createElement('input')
    let input_band = document.createElement('input')
    let input_date = document.createElement('input')
    let input_file = document.createElement('input')
    let input_fileimg = document.createElement('input')
    let input_submit = document.createElement('input')
    let label_name = document.createElement('label')
    let label_band = document.createElement('label')
    let label_date = document.createElement('label')
    let label_file = document.createElement('label')
    let label_fileimg = document.createElement('label')
    div.id = 'Target'
    form.classList.add('content')
    input_name.classList.add('element')
    input_band.classList.add('element')
    input_date.classList.add('element')
    input_file.classList.add('element')
    input_fileimg.classList.add('element')
    div.classList.add('boxin')
    input_submit.classList.add('login')
    div_yack1.classList.add('yack')
    div_yack2.classList.add('yack')
    div_yack3.classList.add('yack')
    div_yack4.classList.add('yack')
    div_yack5.classList.add('yack')
    div_yack6.classList.add('yack')
    form.method = 'post'
    form.action = '/upload'
    form.enctype = "multipart/form-data"
    input_name.type = 'text'
    input_band.type = 'text'
    input_date.type = 'date'
    input_file.type = 'file'
    input_fileimg.type = 'file'
    input_submit.type = 'submit'
    input_name.name = 'song_name'
    input_band.name = 'band_name'
    input_date.name = 'song_date'
    input_file.name = 'song_file'
    input_fileimg.name = 'song_img'
    input_submit.value = 'Upload'
    label_name.htmlFor = 'song_name'
    label_band.htmlFor = 'band_name'
    label_date.htmlFor = 'song_date'
    label_file.htmlFor = 'song_file'
    label_fileimg.htmlFor = 'song_img'
    label_name.textContent = 'ชื่อเพลง: '
    label_band.textContent = 'ชื่อวงดนตรี: '
    label_date.textContent = 'วันที่เปิดตัว:'
    label_file.textContent = 'เพิ่มไฟล์: '
    label_fileimg.textContent = 'เพิ่มภาพ: '
    input_name.required = true
    input_band.required = true
    input_date.required = true
    input_file.accept = 'audio/mp3'
    input_fileimg.accept = 'image/*'
    input_file.required = true
    input_fileimg.required = true
    Box.prepend(div)
    div.appendChild(form)
    form.appendChild(div_yack1)
    form.appendChild(div_yack2)
    form.appendChild(div_yack3)
    form.appendChild(div_yack4)
    form.appendChild(div_yack5)
    form.appendChild(div_yack6)
    div_yack1.appendChild(label_name)
    div_yack1.appendChild(input_name)
    div_yack2.appendChild(label_band)
    div_yack2.appendChild(input_band)
    div_yack3.appendChild(label_date)
    div_yack3.appendChild(input_date)
    div_yack4.appendChild(label_file)
    div_yack4.appendChild(input_file)
    div_yack5.appendChild(label_fileimg)
    div_yack5.appendChild(input_fileimg)
    div_yack6.appendChild(input_submit)
})
Search_Music.addEventListener('click', ()=>{
    document.getElementById('Target').remove()
    let div = document.createElement('div')
    let div_box = document.createElement('div')
    let div_result = document.createElement('div')
    let form = document.createElement('form')
    let label_text = document.createElement('label')
    let input_text = document.createElement('input')
    form.method = 'post'
    form.action = '#'
    div.id = 'Target'
    div.classList.add('boxin')
    div_box.classList.add('content-search')
    input_text.classList.add('element')
    input_text.type = 'text'
    input_text.name = 'data_input'
    input_text.id = 'data'
    label_text.htmlFor = 'data_input'
    label_text.textContent = 'ค้นหา: '
    Box.prepend(div)
    div.appendChild(div_box)
    div_box.appendChild(form)
    div_box.appendChild(div_result)
    form.appendChild(label_text)
    form.appendChild(input_text)
    input_text.addEventListener('keydown', () => {
        const searchTerm = input_text.value.toLowerCase();
    
        div_result.innerHTML = '';
    
        const filteredData = music_list.filter((item) => {
            const titleLower = item.name.toLowerCase();
            return titleLower.includes(searchTerm)
        });
    
        if (filteredData.length > 0) {
            div_result.innerHTML = '<h2>Search Results</h2>';
            for (const item of filteredData) {
                div_result.innerHTML += `<div class="card" id="card-${item.name}"><div>${item.name}</div></div>`
            }
            for (const item of filteredData) {
                document.getElementById(`card-${item.name}`).addEventListener('click', ()=>{
                    source.src = `song/${item.name}.mp3`
                    Simg.src = `song/${item.name}.jpg`
                    Sname.textContent = `${item.name}`
                    Sband.textContent = `${item.band}`
                    Srelease.textContent = `${item.release}`
                    song.load()
                })
            }
        } else {
            div_result.innerHTML = '<p>No results found.</p>';
        }
    })
    input_text.addEventListener('keydown', (e)=>{
        if (e.code=="Enter"){
            e.preventDefault()
        }
    })
})
Me.addEventListener('click', ()=>{
    document.getElementById('Target').remove()
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('div')
    h1.textContent = 'About Me'
    p1.innerHTML = `
    <h3>จัดทำโดย:</h3>
        <div class="ligh">นาย ชนะชัย ดีดวงพันธ์ นักเรียนชั้นมัธยมศึกษาปีที่ 5/2 เลขที่ 5</div>
    <h3>ความถนัด:</h3>
        <div class="ligh">ภาษาคอมพิวเตอร์: ผมมีความรู้และทักษะการเขียนโปรแกรมภาษา HTML, CSS และ JavaScript</div>
    <h3>ความสนใจ:</h3>
        <div class="ligh">ผมชอบอ่านหนังสือเกี่ยวกับเทคโนโลยีและภาษาคอมพิวเตอร์</div>
    `
    div.id = 'Target'
    div.classList.add('boxin')
    Box.prepend(div)
    div.appendChild(h1)
    div.appendChild(p1)
})
