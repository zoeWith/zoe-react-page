import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactComponent as DocIcon } from '../../assets/icon/docs.svg';
import { ReactComponent as StarIcon } from '../../assets/icon/star.svg';
import { ReactComponent as ThumbsupIcon } from '../../assets/icon/thumbup.svg';
import { ReactComponent as TrashIcon } from '../../assets/icon/trash.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import { ReactComponent as ChevronBackIcon } from '../../assets/icon/chevron-back.svg';
import { ReactComponent as ChevronForwardIcon } from '../../assets/icon/chevron-forward.svg';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';

const Todolist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Todo List'));
    });

    const defaultParams = {
        id: null,
        title: '',
        description: '',
        descriptionText: '',
        assignee: '',
        path: '',
        tag: '',
        priority: 'low',
    };

    const [selectedTab, setSelectedTab] = useState('');
    const [isShowTaskMenu, setIsShowTaskMenu] = useState(false);
    const [addTaskModal, setAddTaskModal] = useState(false);
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    const [allTasks, setAllTasks] = useState([
        {
            id: 1,
            title: 'React 공부 하기',
            date: 'Sep, 30 2023',
            description: '공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아',
            descriptionText: '공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아 공부 좀 해 희정아',
            tag: 'work',
            priority: 'high',
            assignee: 'Hee Jeong',
            path: '',
            status: 'important',
        },
        {
            id: 2,
            title: '수영 배우기',
            date: 'Oct, 4 2023',
            description: '생애 첫 수영강습. 열심히 배워보겠습니당. 열심히 배워서 물개로 거듭나보려구요',
            descriptionText: '생애 첫 수영강습. 열심히 배워보겠습니당. 열심히 배워서 물개로 거듭나보려구요',
            tag: 'exercise',
            priority: 'medium',
            assignee: 'Hee Jeong',
            path: '',
            status: '',
        },
        {
            id: 3,
            title: '대청소하기',
            date: 'Oct, 8 2023',
            description: '가을맞이 대청소 해야됨. 화장실 청소도 해야됨. 물걸레질도 해야됨. 이불빨래도 해야됨',
            descriptionText: '가을맞이 대청소 해야됨. 화장실 청소도 해야됨. 물걸레질도 해야됨. 이불빨래도 해야됨',
            tag: '',
            priority: 'low',
            assignee: 'Hee Jeong',
            path: '',
            status: '',
        },
        {
            id: 4,
            title: '출근하기',
            date: 'Oct, 2 2023',
            description: '출근은 언제 끝나지. 출근은 왜 하는걸까, 출근을 해야할까? 출근은 필요할까? 돈많은 백수 언제 돼',
            descriptionText: '출근은 언제 끝나지. 출근은 왜 하는걸까, 출근을 해야할까? 출근은 필요할까? 돈많은 백수 언제 돼',
            tag: 'work',
            priority: 'high',
            assignee: 'Hee Jeong',
            path: '',
            status: 'trash',
        },
        {
            id: 5,
            title: '독서하기',
            date: 'Sep. 19 2023',
            description: '가을은 천고마비의 계절이라 책을 읽어볼게요. 지금 한권 가지고 반년동안 못 끝냈는데 읽은 척 해볼게요.',
            descriptionText: '가을은 천고마비의 계절이라 책을 읽어볼게요. 지금 한권 가지고 반년동안 못 끝냈는데 읽은 척 해볼게요.',
            tag: '',
            priority: 'low',
            assignee: 'Hee Jeong',
            path: '',
            status: 'complete',
        },
        {
            id: 6,
            title: '마라 엽떡 먹어보기',
            date: 'Oct, 1 2023',
            description: '아직도 마라 엽떡 못먹어본 사람? = 나, 혼자 있으니까 한번 먹어볼게요. 존맛탱이라던데. 아직도 못먹어봤어요. 이번에 꼭 먹어볼게여. 저작운동도 운동이니까 운동태그에 넣어볼게여',
            descriptionText:
                '아직도 마라 엽떡 못먹어본 사람? = 나, 혼자 있으니까 한번 먹어볼게요. 존맛탱이라던데. 아직도 못먹어봤어요. 이번에 꼭 먹어볼게여. 저작운동도 운동이니까 운동태그에 넣어볼게여',
            tag: 'exercise',
            priority: 'high',
            assignee: 'Hee Jeong',
            path: '',
            status: 'complete',
        },
        {
            id: 7,
            title: '로얄 매치 100단계 깨기',
            date: 'Oct, 15 2023',
            description: '누구보다 열심히 하고 있는데, 이번 팀전 1등 못하면 강퇴할거래서 더 열심히 해야해요. 진짜 너무해. 돈 줘 돈 줘. 아이템 줘 아이템 줘.',
            descriptionText: '누구보다 열심히 하고 있는데, 이번 팀전 1등 못하면 강퇴할거래서 더 열심히 해야해요. 진짜 너무해. 돈 줘 돈 줘. 아이템 줘 아이템 줘.',
            tag: '',
            priority: 'medium',
            assignee: 'Hee Jeong',
            path: '',
            status: '',
        },
        {
            id: 8,
            title: '형경이 만나기',
            date: 'Oct, 15 2023',
            description: '형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기.',
            descriptionText: '형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기. 형경이 철영이 만나기.',
            tag: '',
            priority: 'medium',
            assignee: 'Hee Jeong',
            path: '',
            status: 'important',
        },
    ]);

    const [filteredTasks, setFilteredTasks] = useState<any>(allTasks);
    const [pagedTasks, setPagedTasks] = useState<any>(filteredTasks);
    const [searchTask, setSearchTask] = useState<any>('');

    const [pager] = useState<any>({
        currentPage: 1,
        totalPages: 0,
        pageSize: 10,
        startIndex: 0,
        endIndex: 0,
    });

    useEffect(() => {
        searchTasks();
    }, [selectedTab, searchTask, allTasks]);

    const tabChanged = () => {
        setIsShowTaskMenu(false);
    };

    const searchTasks = (isResetPage = true) => {
        if (isResetPage) {
            pager.currentPage = 1;
        }
        let res;
        if (selectedTab === 'complete' || selectedTab === 'important' || selectedTab === 'trash') {
            res = allTasks.filter((d) => d.status === selectedTab);
        } else {
            res = allTasks.filter((d) => d.status !== 'trash');
        }

        if (selectedTab === 'work' || selectedTab === 'exercise') {
            res = res.filter((d) => d.tag === selectedTab);
        } else if (selectedTab === 'high' || selectedTab === 'medium' || selectedTab === 'low') {
            res = res.filter((d) => d.priority === selectedTab);
        }

        setFilteredTasks([...res.filter((d: any) => d.title?.toLowerCase().includes(searchTask))]);
        getPager(res.filter((d: any) => d.title?.toLowerCase().includes(searchTask)));
    };

    const getPager = (res: any) => {
        setTimeout(() => {
            if (res.length) {
                pager.totalPages = pager.pageSize < 1 ? 1 : Math.ceil(res.length / pager.pageSize);
                if (pager.currentPage > pager.totalPages) {
                    pager.currentPage = 1;
                }
                pager.startIndex = (pager.currentPage - 1) * pager.pageSize;
                pager.endIndex = Math.min(pager.startIndex + pager.pageSize - 1, res.length - 1);
                setPagedTasks(res.slice(pager.startIndex, pager.endIndex + 1));
            } else {
                setPagedTasks([]);
                pager.startIndex = -1;
                pager.endIndex = -1;
            }
        });
    };

    const addEditTask = (task: any = null) => {
        setIsShowTaskMenu(false);
        let json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (task) {
            let json1 = JSON.parse(JSON.stringify(task));
            setParams(json1);
        }
        setAddTaskModal(true);
    };

    return (
        <div>
            <div className="flex gag-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div
                    className={`panel p-4 flex-none w-[240px] max-w-full absolute xl:relative z-10 space-y-4 xl:h-auto h-full xl:block xl:rounded-r-md rounded-r-none hidden 
                      ${isShowTaskMenu && '!block'}`}
                >
                    <div className="flex flex-col h-full pb-16">
                        <div className="pb-5">
                            <div className="flex text-center items-center">
                                <div className="shink-0">
                                    <DocIcon />
                                </div>
                                <h3 className="text-lg font-semibold ml-3">Todo List</h3>
                            </div>
                        </div>

                        <div className="h-px w-full border-b border-white-light mb-5"></div>

                        <PerfectScrollbar className="relative pr-3.5 -mr-3.5 h-full grow">
                            <div className="space-y-1">
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 hover:text-primary font-medium rounded-md h-10
                                      ${selectedTab === '' ? 'bg-gray-100 text-primary' : ''}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('');
                                    }}
                                >
                                    <div className="flex items-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 shrink-0">
                                            <path d="M2 5.5L3.21429 7L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path opacity="0.5" d="M2 12.5L3.21429 14L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 19.5L3.21429 21L7.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path opacity="0.5" d="M22 12L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M22 5L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <div className="ml-3">All</div>
                                    </div>
                                    <div className="bg-primary-light rounded-md py-0.5 px-2 font-semitbold whitespace-nowrap">{allTasks && allTasks.filter((d) => d.status !== 'trash').length}</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md hover:text-primary font-medium h-10 
                                      ${selectedTab === 'complete' && 'bg-gray-100 text-primary'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('complete');
                                    }}
                                >
                                    <div className="flex items-center">
                                        <ThumbsupIcon />
                                        <div className="ml-3">완료</div>
                                    </div>
                                    <div className="bg-primary-light rounded-md py-0.5 px-2 font-semitbold whitespace-nowrap">{allTasks && allTasks.filter((d) => d.status === 'complete').length}</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md hover:text-primary font-medium h-10 
                                      ${selectedTab === 'important' && 'bg-gray-100 text-primary'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('important');
                                    }}
                                >
                                    <div className="flex items-center">
                                        <StarIcon />
                                        <div className="ml-3">중요</div>
                                    </div>
                                    <div className="bg-primary-light rounded-md py-0.5 px-2 font-semibold whitespace-nowrap">{allTasks && allTasks.filter((d) => d.status === 'important').length}</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md hover:text-primary font-medium h-10 
                                      ${selectedTab === 'trash' && 'bg-gray-100 text-primary'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('trash');
                                    }}
                                >
                                    <div className="flex items-center">
                                        <TrashIcon />
                                        <div className="ml-3">휴지통</div>
                                    </div>
                                </button>
                                <div className="h-px w-full border-b border-white-light"></div>
                                <div className="text-white-dark px-1 py-3">Tags</div>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md font-medium text-success hover:pl-3 duration-300
                                    ${selectedTab === 'work' && 'pl-3 bg-gray-100'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('work');
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 rotate-45 fill-success shrink-0">
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div className="ml-3">Work</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md font-medium text-info hover:pl-3 duration-300
                                    ${selectedTab === 'exercise' && 'pl-3 bg-gray-100'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('exercise');
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 rotate-45 fill-info shrink-0">
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div className="ml-3">Exercise</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md font-medium text-warning hover:pl-3 duration-300
                                    ${selectedTab === 'low' && 'pl-3 bg-gray-100'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('low');
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 rotate-45 fill-warning shrink-0">
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div className="ml-3">Low</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md font-medium text-primary hover:pl-3 duration-300
                                    ${selectedTab === 'medium' && 'pl-3 bg-gray-100'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('medium');
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 rotate-45 fill-primary shrink-0">
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div className="ml-3">Medium</div>
                                </button>
                                <button
                                    type="button"
                                    className={`w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md font-medium text-danger hover:pl-3 duration-300
                                    ${selectedTab === 'high' && 'pl-3 bg-gray-100'}`}
                                    onClick={() => {
                                        tabChanged();
                                        setSelectedTab('high');
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 rotate-45 fill-danger shrink-0">
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div className="ml-3">High</div>
                                </button>
                            </div>
                        </PerfectScrollbar>
                        <div className="left-0 right-0 absolute bottom-0 p-4 w-full">
                            <button className="btn btn-primary w-full" type="button" onClick={() => addEditTask()}>
                                <PlusIcon />새 할일 추가
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`overlay bg-black/60 z-[5] w-full h-full rounded-md absolute hidden ${isShowTaskMenu && '!block xl:!hidden'}`} onClick={() => setIsShowTaskMenu(!isShowTaskMenu)}></div>

                <div className="panel p-0 flex-1 overflow-auto h-full">
                    <div className="flex flex-col h-full">
                        <div className="p-4 flex sm:flex-row flex-col w-full sm:items-center gap-4">
                            <div className="mr-3 flex items-center">
                                <button type="button" className="xl:hidden hover:text-primary block mr-3" onClick={() => setIsShowTaskMenu(!isShowTaskMenu)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className="relative group flex-1">
                                    <input
                                        type="text"
                                        className="form-input peer !pr-10"
                                        placeholder="검색"
                                        value={searchTask}
                                        onChange={(e) => setSearchTask(e.target.value)}
                                        onKeyUp={() => searchTasks()}
                                    />
                                    <div className="absolute right-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                        <SearchIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:justify-end sm:flex-auto">
                                <p className="mr-3">{pager.startIndex + 1 + '-' + (pager.endIndex + 1) + ' of ' + filteredTasks.length}</p>
                                <button
                                    type="button"
                                    disabled={pager.currentPage === 1}
                                    className="bg-[#f4f4f4] rounded-md p-1 enabled:hover:bg-primary-light mr-3 disabled:opacity-60 disabled:cursor-not-allowed"
                                    onClick={() => {
                                        pager.currentPage--;
                                        searchTasks(false);
                                    }}
                                >
                                    <ChevronBackIcon />
                                </button>
                                <button
                                    type="button"
                                    disabled={pager.currentPage === pager.totalPages}
                                    className="bg-[#f4f4f4] rounded-md p-1 enabled:hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed"
                                    onClick={() => {
                                        pager.currentPage++;
                                        searchTasks(false);
                                    }}
                                >
                                    <ChevronForwardIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todolist;
