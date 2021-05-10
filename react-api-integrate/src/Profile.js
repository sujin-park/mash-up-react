import React from 'react';

const profileData = {
  sujin: {
    name: '박수진',
    description: 'Frontend Engineer @ Fastcampus'
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터'
  }
}

// Route 컴포넌트를 사용해서 컴포넌트를 넣으면 자동으로 match 를 prop 으로 준다.
function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>
    </div>
  )
}

export default Profile;