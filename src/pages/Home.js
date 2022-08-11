import React from 'react'
import Slider from '../components/Slider'
import { Container, Row, Col, Card } from 'react-bootstrap'
import vladi from '../img/vladibasket.jpg'
import kids from '../img/kids.jpg'
import Jumbo from '../components/Jumbo'

const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h3 className="text-center" variant="h3" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}> סגל מאמנים</h3>
        <Row>
          <Col>
            <Card className="text-end" style={{ width: '18rem' }}>
              <Card.Img variant='top' src={vladi} alt='coach' />
              <Card.Body>
                <Card.Title>ולדימיר סלסרב</Card.Title>
                <Card.Text>מאמן חוגים וקבוצות קט סל</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-end" style={{ width: '18rem' }}>
              <Card.Img variant='top' src={vladi} alt='coach' />
              <Card.Body>
                <Card.Title>ולדימיר סלסרב</Card.Title>
                <Card.Text>מאמן חוגים וקבוצות קט סל</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-end" style={{ width: '18rem' }}>
              <Card.Img variant='top' src={vladi} alt='coach' />
              <Card.Body>
                <Card.Title>ולדימיר סלסרב</Card.Title>
                <Card.Text>מאמן חוגים וקבוצות קט סל</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbo/>
      <Container >
        <Row>
          <Col md={7}>
             <img src={kids} height={400}  style={{ paddingTop: '2rem', paddingBottom: '2rem' }}/>
          </Col>
          <Col md={5}>
          <p className='text-end'  style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>נבחרת ישראל תמריא היום לטיבילסי, שם תקיים שני משחקי הכנה נגד גאורגיה בשישי ובשבת, שני המשחקים בשעה 18:00 שעון ישראל. המשחקים יתקיימו בטיבילסי ארנה, אולם חדש שנחנך לפני כחודש וחצי ובוא תארח גאורגיה את הבית שלה ביורובאסקט הקרוב.
המשחק הראשון יהיה פתוח לקהל וישודר בערוץ הספורט והשני סגור לקהל וללא שידור. ג'ון דיברת'לומיאו הצטרף לאימוני הנבחרת ויצא איתה הערב, שאר השחקנים שיצאו: גל מקל, תמיר בלאט, ים מדר, ייפתח זיו, יובל זוסמן,</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home