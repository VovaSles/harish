import React from 'react'
import { Container } from 'react-bootstrap'
import kids from '../img/kids.jpg'
import styled from 'styled-components'

const Styles = styled.div`
.jumbo{
    background: url(${kids}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position:relative;
    z-index: -2;
}
.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolut;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
}
`

const Jumbo = () => {
    return (
        <Styles>
            <div className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <p className='text-end' style={{ paddingTop: '8rem', paddingBottom: '8rem' }}> זה הזמן בעונה להתחיל להזיז את הגוף, כאשר ההורים בכל קבוצות המועדון לקחו חלק פעיל בשבוע אימונים עם הילדים
                        נבחרת ישראל תמריא היום לטיבילסי, שם תקיים שני משחקי הכנה נגד גאורגיה בשישי ובשבת, שני המשחקים בשעה 18:00 שעון ישראל. המשחקים יתקיימו בטיבילסי ארנה, אולם חדש שנחנך לפני כחודש וחצי ובוא תארח גאורגיה את הבית שלה ביורובאסקט הקרוב.
                        המשחק הראשון יהיה פתוח לקהל וישודר בערוץ הספורט והשני סגור לקהל וללא שידור. ג'ון דיברת'לומיאו הצטרף לאימוני הנבחרת ויצא איתה הערב, שאר השחקנים שיצאו: גל מקל, תמיר בלאט, ים מדר, ייפתח זיו, יובל זוסמן,
                        נבחרת ישראל תמריא היום לטיבילסי, שם תקיים שני משחקי הכנה נגד גאורגיה בשישי ובשבת, שני המשחקים בשעה 18:00 שעון ישראל. המשחקים יתקיימו בטיבילסי ארנה, אולם חדש שנחנך לפני כחודש וחצי ובוא תארח גאורגיה את הבית שלה ביורובאסקט הקרוב.
                        המשחק הראשון יהיה פתוח לקהל וישודר בערוץ הספורט והשני סגור לקהל וללא שידור. ג'ון דיברת'לומיאו הצטרף לאימוני הנבחרת ויצא איתה הערב, שאר השחקנים שיצאו: גל מקל, תמיר בלאט, ים מדר, ייפתח זיו, יובל זוסמן</p>
                </Container>
            </div>
        </Styles>
    )
}

export default Jumbo