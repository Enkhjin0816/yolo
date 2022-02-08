import '../style/custom.scss';
import Card from './card';
import Header from './header';
import picture1 from '../picture1.png';
import picture2 from '../picture2.png';
import picture3 from '../picture3.png';
import picture4 from '../picture4.png';
import picture5 from '../picture5.png';
import picture6 from '../picture6.png';
import picture7 from '../picture7.png';
import picture8 from '../picture8.png';
import picture9 from '../picture9.png';
import picture10 from '../picture10.png';
import picture11 from '../picture11.png';

const Content = () => {
    return (
        <div className='d-flex flex-column'>
            <Header />
            <div className='d-flex offset-1 mt-3' style={{width: '75%', height: '30px'}}>
                <p className='offset-1 d-flex justify-content-center align-items-center' style={{borderLeft: '4px solid yellow', width: '150px', height: '30px'}}>ОНЦЛОХ МЭДЭЭ</p>
            </div>
	    <div className="cards overflow-scroll offset-2 mt-5 d-flex flex-row align-items-center" style={{border: '1px solid black', height: '455px', width: '1000px'}}>
		<Card stat={'Кино урлаг'} liked={'115'} viewed={'1149'} date={'Уржигдар'} picture={picture1} title={'MCU: 2022 онд нээлтээ хийх дэлгэцийн бүтээлүүд'} text={'Тэртээ 2008 онд “Iron Man” киноны анхны ангиар эхэлж байсан Marvel Cinematic Universe буюу бидний нэрлэж заншсанаар MCU...'} />
		<Card stat={'Хаана, юу болох вэ?'} liked={'103'} viewed={'1560'} date={'Уржигдар'} picture={picture2} title={'Ирэх долоо хоногт ХААНА, ЮУ болох вэ? (01.17-01.23)'} text={'Yolo.mn сайт ирэх долоо хоногт буюу нэгдүгээр сарын 17-ноос 23-ны өдрүүдэд өсвөр үеийнхэн болон залуусын хамрагдах болом...'} />
		<Card stat={'Амьтдын тухай'} liked={'82'} viewed={'264'} date={'2022-01-13'} picture={picture3} title={'Ноход дунджаар 89 үг мэддэг'} text={'Ихэнх хүмүүс тэжээвэр амьтантайгаа ярилцдаг. Өөрийнх нь хэлсэн үгсийг ойлгосон эсэхийг баттай мэдэхгүй ч ярьсаар л байда'} />
        <Card stat={'Кино урлаг'} liked={'116'} viewed={'371'} date={'2022-01-13'} picture={picture4} title={'“Euphoria” цувралын хоёрдугаар бүлэг HBO Max-ын рекордыг эвдлээ'} text={'Эхний бүлгээ олон нийтийн хүртээл болгосноос хойш бүтэн хоёр жил хагасын хугацаанд үзэгчдийг хүлээлгэсэн “Euphoria” цувр'} />
		<Card stat={'Сэтгэлзүй'} liked={'24'} viewed={'423'} date={'2022-01-13'} picture={picture5} title={'ЗАХИДАЛ: Надад сайн ч юм шиг, эсвэл намайг зүгээр л ашиглаад байгаа ч юм шиг'} text={'YOLO.mn сайтын редакц нь ямар нэгэн асуудал тулгарсан уншигч хүүхдүүдээс захиа хүлээн авч мэргэжлийн сэтгэл судлаач боло...'} />
		<Card stat={'Кино урлаг'} liked={'86'} viewed={'1422'} date={'2022-01-12'} picture={picture6} title={'“The Simpsons” цуврал 2021 онд болсон үйл явдлуудыг ЗӨГНӨСӨН НЬ'} text={'АНУ-ын “The Simpsons” цуврал ирээдүйд болох үйл явдлуудыг зөгнөдөг гэж үздэг хүмүүс байхад эрх мэдэлт хүмүүс уг цувралаа...'} />
	    </div>
        </div>
    )
}

export default Content;