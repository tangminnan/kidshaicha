package com.youershaicha.information.dao;


import java.util.List;
import java.util.Map;

import com.youershaicha.information.domain.ChildRefractionScreeningDO;
import org.apache.ibatis.annotations.Mapper;

/**
 * 幼儿屈光筛查检查表
 * @author wjl
 * @email bushuo@163.com
 * @date 2021-01-04 11:21:27
 */
@Mapper
public interface ChildRefractionScreeningDao {

	ChildRefractionScreeningDO get(Long screeningId);
	
	List<ChildRefractionScreeningDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(ChildRefractionScreeningDO childRefractionScreening);
	
	int update(ChildRefractionScreeningDO childRefractionScreening);
	
	int remove(Long screening_id);
	
	int batchRemove(Long[] screeningIds);
	ChildRefractionScreeningDO getRecentChildRefractionScreeningDO(Map<String,Object> paramsMap);

}
