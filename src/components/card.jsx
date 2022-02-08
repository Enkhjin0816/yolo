import '../style/custom.scss';
import heart from '../redheart.png';
import eye from '../eye.png';

const Card = ({title, text, picture, date, liked, viewed, stat}) => {
	return <div class="card border m-1" style={{width: '212px', height: '450px'}}>
		<img class="card-img-top" src={picture} style={{width: '210px'}}/>
		<div class="card-body">
			<h5 class="card-title" style={{width: '180px', fontSize: '15px'}}> {title} </h5>
			<a href="https://www.yolo.mn/170" class="alert-link text-dark rounded font-weight-bold p-1" style={{fontSize: '10px', textDecoration: 'none', width: 'fit-content', backgroundColor: 'rgb(247, 230, 82)'}}>{stat}</a>
			<p class="card-text mt-3 text-secondary" style={{width: '180px', fontSize: '10px'}}> {text} </p>
			<div className='d-flex flex-row justify-content-between'>
				<div className='d-flex'>
					<img style={{height: '12px'}} src={heart} alt="redheart" />
					<p className='ms-1' style={{fontSize: '12px'}}>{liked}</p>
				</div>
				<div className='d-flex' >
					<img style={{height: '12px'}} src={eye} alt="eye" />
					<p className='ms-1' style={{fontSize: '12px'}}>{viewed}</p>
				</div>
				<p className='text-secondary' style={{fontSize: '12px'}}> {date} </p>
			</div>
		</div>
	</div>
}

export default Card;