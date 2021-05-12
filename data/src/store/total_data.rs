use js_sys::Array;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

use crate::store::config::total_config::TotalConfig;
use crate::store::read_record::ReadRecord;
use crate::log;

#[wasm_bindgen]
#[derive(Serialize, Deserialize, Debug)]
pub struct TotalData {
    #[serde(rename = "totalConfig")]
    total_config: Vec<TotalConfig>,
    #[serde(rename = "readRecord")]
    read_record: Vec<ReadRecord>,
}

/// # 变成数据
impl Into<Vec<u8>> for TotalData {
    fn into(self) -> Vec<u8> {
        Vec::from(serde_json::to_string(&self).unwrap())
    }
}

/// 数据文件相关
#[wasm_bindgen]
impl TotalData {
    /// # 读取数据
    #[wasm_bindgen(js_name=load)]
    pub fn load(buf: Vec<u8>) -> Self {
        match serde_json::from_slice(&buf) {
            Ok(value) => value,
            Err(_) => TotalData {
                total_config: vec![TotalConfig::get_default()],
                read_record: vec![],
            },
        }
    }
    /// # 更新数据
    #[wasm_bindgen(js_name=updateData)]
    pub fn update_data(&mut self, buf: Vec<u8>) {
        let new_data = Self::load(buf);
        self.read_record = new_data.read_record;
        self.total_config = new_data.total_config;
    }
    #[wasm_bindgen(js_name=toData)]
    pub fn to_data(&self) -> Vec<u8> {
        Vec::from(serde_json::to_string(&self).unwrap())
    }
    /// # 获取所有配置
    #[wasm_bindgen(js_name=getAllConfig)]
    pub fn get_all_config(&self) -> Vec<JsValue> {
        self.total_config
            .iter()
            .filter_map(|x| JsValue::from_serde(x).ok())
            .collect()
    }
}

/// 阅读记录相关
#[wasm_bindgen]
impl TotalData {
    /// # 添加小说
    #[wasm_bindgen(js_name=addReadRecord)]
    pub fn add_read_record(&mut self, new_read_record: JsValue) -> bool {
        // 读取数据
        let new_read_record: ReadRecord = match JsValue::into_serde(&new_read_record) {
            Err(_) => return false,
            Ok(e) => e,
        };

        // 判断是否存在相应的配置
        if self
            .total_config
            .iter()
            .any(|config| new_read_record.match_url(&config.main_page_url))
        {
            // 是否存在
            match self
                .read_record
                .iter_mut()
                .find(|item| *item == &new_read_record)
            {
                // 不存在插入
                None => self.read_record.push(new_read_record),
                // 存在更新
                Some(item) => item.update(new_read_record),
            };
            true
        } else {
            false
        }
    }
    /// # 获取所有记录
    #[wasm_bindgen(js_name=getAllReadRecord)]
    pub fn get_all_read_record(&self) -> Array {
        self.read_record
            .iter()
            .filter_map(|x| JsValue::from_serde(x).ok())
            .collect()
    }
    /// # 查找是否已存在记录
    #[wasm_bindgen(js_name=checkExists)]
    pub fn check_exists(&self, novel_id: String, main_page_url: String) -> bool {
        self.read_record
            .iter()
            .any(|item| item.main_page_url == main_page_url && item.novel_id == novel_id)
    }
}