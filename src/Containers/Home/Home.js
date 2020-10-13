import React from 'react';
import { Row, Col } from 'antd';
import './Home.css';

const USER_POINTS = [
  {
    id: '1',
    name: 'Bernard',
    points: 1000,
    rank: 1
  },
  {
    id: '2',
    name: 'Koming',
    points: 750,
    rank: 2
  },
  {
    id: '3',
    name: 'Owen',
    points: 700,
    rank: 3
  },
  {
    id: '4',
    name: 'Imel',
    points: 650,
    rank: 4
  },
  {
    id: '5',
    name: 'Jackson',
    points: 500,
    rank: 5
  },
  {
    id: '6',
    name: 'Patrick',
    points: 420,
    rank: 6
  },
  {
    id: '7',
    name: 'Samuel',
    points: 360,
    rank: 7
  },
  {
    id: '8',
    name: 'Varian',
    points: 350,
    rank: 8
  },
  {
    id: '9',
    name: 'Joshua',
    points: 200,
    rank: 9
  },
  {
    id: '10',
    name: 'Josephine',
    points: 100,
    rank: 10
  }
]

const CURRENT_USER_ID = '7'

const Home = () => {
  const generateBarStyles = (userId, point, maxPoint) => {
    const styles = {
      mine: {
        color: '#ffffff',
        backgroundColor: '#6991F5',
        width: 100
      },
      user: {
        color: '#262626',
        backgroundColor: '#EAEBF2',
        width: point / maxPoint * 100
      }
    }

    const style = userId === CURRENT_USER_ID ? styles.mine : styles.user;
    const { color, backgroundColor, width } = style;

    return ({
      backgroundImage: `linear-gradient(to right, ${backgroundColor} 0 ${width}%, transparent ${width}%)`,
      color
    })
  }

  const renderUserScores = () => {
    const TOP_POINT = USER_POINTS[0].points;
    return USER_POINTS.map((user) => (
      <div
        style={generateBarStyles(user.id, user.points, TOP_POINT)}
        className='leaderboard-bar-user'
      >
        <Row>
          <Col span={4}>
            {user.rank}
          </Col>
          <Col span={14}>
            {user.id === CURRENT_USER_ID ? 'Me' : user.name}
          </Col>
          <Col span={6}>
            {`${user.points} pts`}
          </Col>
        </Row>
      </div>
    ));
  };

  return (
    <>
      <Row>
        <Col span={6}>
          <div className='leaderboard'>
            <h2>Leaderboard</h2>
            <Row>
              <Col span={4}>
                <p>Rank</p>
              </Col>
              <Col span={14}>
                <p>Name</p>
              </Col>
              <Col span={6}>
                <p>Score</p>
              </Col>
            </Row>
            { renderUserScores() }
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;