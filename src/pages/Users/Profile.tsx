import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../../assets/icon/edit.svg';
import { ReactComponent as CoffeeIcon } from '../../assets/icon/coffee.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icon/calendar.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon/location.svg';
import { ReactComponent as MailIcon } from '../../assets/icon/mail.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icon/phone.svg';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Profile'));
    });

    const skills = [
        { skill: 'Angular', type: 'Front-End', level: 4 },
        { skill: 'HTML/CSS', type: 'Front-End', level: 3 },
        { skill: 'Springboot', type: 'Back-End', level: 3 },
        { skill: 'ionic', type: 'Front-End', level: 3 },
        { skill: 'TypeScript', type: 'Language', level: 3 },
        { skill: 'Java', type: 'Language', level: 3 },
        { skill: 'oracle', type: 'sql', level: 4 },
        { skill: 'Jira', type: 'DevOps', level: 0 },
    ];

    return (
        <div>
            <ul className="flex space-x-2">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        User
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2">
                    <span>Profile</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg">Profile</h5>
                            <Link to="/users/user-account-settings" className="ml-auto btn btn-primary p-2 rounded-full">
                                <EditIcon />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-col justify-center items-center">
                                <img src="/assets/images/profile.jpg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                <p className="font-semibold text-primary text-xl">Kim Heejeong</p>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <CoffeeIcon /> Frontend Developer
                                </li>
                                <li className="flex items-center gap-2">
                                    <CalendarIcon />
                                    Jan 09, 1996
                                </li>
                                <li className="flex items-center gap-2">
                                    <LocationIcon />
                                    Seoul, Republic of Korea
                                </li>
                                <li className="flex items-center gap-2">
                                    <MailIcon />
                                    gmlwjd7879@gmail.com
                                </li>
                                <li className="flex items-center gap-2">
                                    <PhoneIcon />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        +82 010-0000-6823
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel lg:col-span-2 xl:col-span-3">
                        <div className="mb-5">
                            <h5 className="font-semibold text-lg">Skills</h5>
                        </div>
                        <div className="mb-5">
                            <div className="table-responsive text-[#515365] font-semibold">
                                <table className="whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>Tech</th>
                                            <th>Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skills.map((item, index) => {
                                            return (
                                                // 원래 key 값으로 index는 좋지 않음
                                                <tr key={index}>
                                                    <td className="text-center">{item.type}</td>
                                                    <td>{item.skill}</td>
                                                    <td>
                                                        <div className="h-1.5 bg-[#ebedf2] rounded-full flex w-full">
                                                            <div className="bg-danger rounded-full" style={{ width: `${(item.level * 100) / 5}%` }}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
