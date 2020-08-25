import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as guidesActions from '../assets/store/actions/guides';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const img_guides_main = require('../assets/images/different/guides.jpg');

const MenuTitle = ({ title, tg }) => {
  const { t } = useTranslation();
  return (tg === 'h1' ? <h1>{t(title)}</h1> : <h2>{t(title)}</h2>);
};

const GuideCard = (guide) => {
  const { name, email, phone, lang, city, img } = guide;
  return (
    <Card className="guides-search" color='red'>
      <Card.Content>
        <Image
          floated='left'
          size='small'
          src={img ??'photo/no-person.png'}
        />
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          {city}
        </Card.Meta>
        <Card.Description className="guides-description">
          {
            lang.split(';').map((language, i) => (
              <div key={i}>
                {language}
              </div>
            ))
          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div><Icon name='phone' />{phone} </div>
        <div><Icon name='envelope open outline' /><a href={"mailto:" +email} >{email}</a></div>
      </Card.Content>
    </Card>
  )
}

class GuidesList extends Component {
  componentDidMount() {
    const { setGuides } = this.props;
    axios.get('/guides_ru.json').then(({ data }) => {
      setGuides(data);
    });
  }

  render() {

    const { guides, isReady } = this.props;
    return (
      <div>
        <div className="content-main-image"
          style={{
            background: `url(${img_guides_main})`
          }} >
          <div>
            <MenuTitle title='menu_guide' tg='h1' />
          </div>
        </div>
        <div className="content-wrapper-guides content-wrapper-board">
          <MenuTitle title='menu_guide-search' tg='h2' />

          <Card.Group itemsPerRow={3} stackable>
            {
              !isReady ? 'Loading.....' : guides.map((guide, i) => (
                <GuideCard key={i}{...guide} />
              ))
            }
          </Card.Group>
        </div>
      </div>
    )

  }
}

const mapStateToProps = ({ guides }) => ({
  guides: guides.items,
  isReady: guides.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(guidesActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(GuidesList);

