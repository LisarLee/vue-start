export const LenovoTagList = [
    { name: '全部', id: '1' },
    { name: '敏感', id: '1_0' },
    { name: '高层', id: '1_1' },
    { name: '产品/服务', id: '1_2' },
    { name: '品牌', id: '1_3' }
]

export const FriendsTagList = [
    { name: '全部', id: '0' },
    { name: '华为', id: '0_1' },
    { name: '小米', id: '0_2' },
    { name: '惠普', id: '0_3' },
    { name: '戴尔', id: '0_4' },
    { name: '阿里', id: '0_5' },
    { name: '腾讯', id: '0_6' },
    { name: '微软', id: '0_7' },
    { name: '高通', id: '0_8' },
    { name: '英特尔', id: '0_9' },
    // { name: '宏碁', id: '0_10' },
    // { name: '华硕', id: '0_11' },
    { name: '百度', id: '0_12' },
    { name: '苹果', id: '0_13' },
    { name: '三星', id: '0_14' },
    // { name: 'oppo', id: '0_15' },
    // { name: 'vivo', id: '0_16' },
    // { name: '魅族', id: '0_17' },
    { name: 'NetApp', id: '0_18' },
    { name: '谷歌', id: '0_19' }
    // { name: '一加', id: '0_20' },
    // { name: 'LG', id: '0_21' },
    // { name: '中兴', id: '0_22' },
    // { name: '其他', id: '0_23' }
]
export const IndustryTagList = []
export const MenuTagList = [
    {
        type: 'keyTag',
        title: '标签',
        list: LenovoTagList
    },
    {
        type: 'mediaType',
        title: "媒体类型",
        list: [
            { name: '全部', id: 'all' },
            { name: '微信', id: 'wechat' },
            { name: '微博', id: 'weibo' },
            { name: '网页', id: 'web' },
            { name: '客户端App', id: 'app' },
            { name: '论坛', id: 'forum' },
        ]
    },
    {
        type: 'timeRange',
        title: "时间段",
        default:'30',
        list: [
            { name: '一天内', id: '1' },
            { name: '7天内', id: '7' },
            { name: '30天内', id: '30' },
        ]
    },
    {
        type: 'emotion',
        title: "情感属性",
        list: [
            { name: '全部', id: 'all' },
            { name: '正面', id: '1' },
            { name: '中性', id: '0' },
            { name: '负面', id: '-1' },
        ]
    },
    {
        type: 'isCore',
        title: "只显示核心媒体",
        default:'-1',
        list: [
            { name: '是', id: '1' },
            { name: '否', id: '-1' },
        ]
    }
]

