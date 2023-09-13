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

    return (
        <div>
            <ul className="flex space-x-2">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
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
                                <img src="src/assets/images/profile.jpg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                <p className="font-semibold text-primary text-xl">Kim Heejeong</p>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <CoffeeIcon /> Web Developer
                                </li>
                                <li className="flex items-center gap-2">
                                    <CalendarIcon />
                                    Jan 09, 1996
                                </li>
                                <li className="flex items-center gap-2">
                                    <LocationIcon />
                                    New York, USA
                                </li>
                                <li className="flex items-center gap-2">
                                    <MailIcon />
                                    gmlwjd7879@naver.com
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
