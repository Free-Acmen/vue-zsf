let domain = 'https://testm.usitrip.com'

export default{
    home: `${domain}/ajax.php?mod=app_index&charset=utf-8`,
    homeSeasonHot: `${domain}/ajax.php?mod=app_index&action=getRecommendType&charset=utf-8`,
    searchDeafut: `${domain}/ajax.php?mod=app_index&action=getSearchBoxMenu&charset=utf-8`,
    searchKey: (val) => {
        return `${domain}/ajax.php?action=keywordsQuickSearch&ajax=true&language_code=gb2312&val=${val}&type=All&limit=10&cb=cb`
    },
    
}