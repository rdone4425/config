// ==================== DNS 配置 ====================
const domesticNameservers = [
  "https://doh.pub/dns-query",
  "https://dns.alidns.com/dns-query",
  "https://120.53.53.53/dns-query"
];

const foreignNameservers = [
  "https://8.8.8.8/dns-query",
  "https://1.1.1.1/dns-query"
];

const dnsConfig = {
  "enable": true,
  "ipv6": false,
  "prefer-h3": true,
  "use-hosts": false,
  "use-system-hosts": false,
  "respect-rules": true,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "time.*.com",
    "ntp.*.com",
    "+.market.xiaomi.com",
    "+.srv",
    "+.home.arpa",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "+.msftconnecttest.com",
    "+.msftncsi.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29"],
  "proxy-server-nameserver": [...domesticNameservers],
  "nameserver": [...domesticNameservers],
  "nameserver-policy": {
    "geosite:cn": domesticNameservers,
    "geosite:geolocation-!cn": foreignNameservers,
    "geosite:google": ["https://8.8.8.8/dns-query"],
    "geosite:github": ["https://8.8.8.8/dns-query"],
    "geosite:telegram": ["https://1.1.1.1/dns-query"],
    "geosite:openai": ["https://1.1.1.1/dns-query"],
    "geosite:anthropic": ["https://1.1.1.1/dns-query"],
    "+.perplexity.ai": ["https://1.1.1.1/dns-query"],
    "+.poe.com": ["https://1.1.1.1/dns-query"],
    "+.midjourney.com": ["https://1.1.1.1/dns-query"],
    "+.stability.ai": ["https://1.1.1.1/dns-query"]
  }
};

// ==================== 规则集配置 ====================
const ruleProviderCommon = {
  "type": "http",
  "behavior": "classical",
  "interval": 86400
};

const ruleProviders = {
  "Lan": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Lan/Lan_No_Resolve.yaml"
  },
  "China": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/China/China_Classical_No_Resolve.yaml"
  },
  "ChinaIP": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaIPs/ChinaIPs_Classical_No_Resolve.yaml"
  },
  "Hijacking": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Hijacking/Hijacking_No_Resolve.yaml"
  },
  "Privacy": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Privacy/Privacy_Classical_No_Resolve.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube_No_Resolve.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix_No_Resolve.yaml"
  },
  "Disney": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Disney/Disney_No_Resolve.yaml"
  },
  "TikTok": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok_No_Resolve.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify_No_Resolve.yaml"
  },
  "Telegram": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram_No_Resolve.yaml"
  },
  "Twitter": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter_No_Resolve.yaml"
  },
  "OpenAI": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI_No_Resolve.yaml"
  },
  "Claude": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude_No_Resolve.yaml"
  },
  "Gemini": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini_No_Resolve.yaml"
  },
  "Copilot": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Copilot/Copilot_No_Resolve.yaml"
  },
  "Bing": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Bing/Bing_No_Resolve.yaml"
  },
  "GitHub": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub_No_Resolve.yaml"
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft_No_Resolve.yaml"
  },
  "Apple": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple_Classical_No_Resolve.yaml"
  },
  "Google": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google_No_Resolve.yaml"
  },
  "Steam": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam_No_Resolve.yaml"
  },
  "GlobalMedia": {
    ...ruleProviderCommon,
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GlobalMedia/GlobalMedia_Classical_No_Resolve.yaml"
  }
};

// ==================== 规则 ====================
const rules = [
  // 本地规则
  "RULE-SET,Lan,DIRECT",

  // 广告拦截和隐私保护
  "RULE-SET,Hijacking,REJECT",
  "RULE-SET,Privacy,REJECT",

  // 自定义直连规则
  "DOMAIN-SUFFIX,szhdy.com,DIRECT",

  // 流媒体服务
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,Disney,Disney+",
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,Spotify,Spotify",

  // 通讯工具
  "RULE-SET,Telegram,Telegram",
  "RULE-SET,Twitter,Twitter",

  // AI 服务
  "RULE-SET,OpenAI,AI服务",
  "RULE-SET,Claude,AI服务",
  "RULE-SET,Gemini,AI服务",
  "RULE-SET,Copilot,AI服务",
  "RULE-SET,Bing,AI服务",

  // AI 服务自定义规则
  "DOMAIN-SUFFIX,perplexity.ai,AI服务",
  "DOMAIN-SUFFIX,pplx.ai,AI服务",
  "DOMAIN-SUFFIX,poe.com,AI服务",
  "DOMAIN-KEYWORD,quora-poe,AI服务",
  "DOMAIN-SUFFIX,midjourney.com,AI服务",
  "DOMAIN-SUFFIX,stability.ai,AI服务",
  "DOMAIN-SUFFIX,stablediffusionweb.com,AI服务",
  "DOMAIN-SUFFIX,civitai.com,AI服务",
  "DOMAIN-SUFFIX,leonardo.ai,AI服务",
  "DOMAIN-SUFFIX,ideogram.ai,AI服务",
  "DOMAIN-SUFFIX,flux.ai,AI服务",

  // 科技公司
  "RULE-SET,GitHub,GitHub",
  "RULE-SET,Microsoft,微软服务",
  "RULE-SET,Google,谷歌服务",
  "RULE-SET,Apple,苹果服务",

  // 游戏平台
  "RULE-SET,Steam,Steam",

  // 国际媒体
  "RULE-SET,GlobalMedia,国际媒体",

  // 国内流量
  "RULE-SET,China,DIRECT",
  "RULE-SET,ChinaIP,DIRECT",
  "GEOIP,CN,DIRECT",

  // 兜底规则
  "MATCH,兜底策略"
];

// ==================== 代理组通用配置 ====================
const groupBaseOption = {
  "interval": 300,
  "timeout": 5000,
  "url": "https://cp.cloudflare.com/generate_204",
  "lazy": true,
  "max-failed-times": 3
};

// 服务分组的 url-test 配置（自动选择最优地区组）
const serviceGroupOption = {
  ...groupBaseOption,
  "type": "url-test",
  "tolerance": 100,
  "proxies": ["香港优选", "台湾优选", "日本优选", "美国优选", "新国优选", "其他地区"]
};

// ==================== 程序入口 ====================
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 去重节点（如果有重复的节点名称）
  if (config["proxies"]) {
    const seen = new Set();
    config["proxies"] = config["proxies"].filter(proxy => {
      if (seen.has(proxy.name)) {
        console.log(`移除重复节点: ${proxy.name}`);
        return false;
      }
      seen.add(proxy.name);
      return true;
    });
  }

  // 覆盖 DNS 配置
  config["dns"] = dnsConfig;

  // 覆盖代理组
  config["proxy-groups"] = [
    // ========== 核心策略组 ==========
    {
      ...groupBaseOption,
      "name": "代理选择",
      "type": "select",
      "proxies": ["代理优选", "香港优选", "台湾优选", "日本优选", "美国优选", "新国优选", "其他地区", "代理指定", "DIRECT"],
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Rocket.png"
    },
    {
      ...groupBaseOption,
      "name": "代理优选",
      "type": "url-test",
      "include-all": true,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png"
    },
    {
      ...groupBaseOption,
      "name": "代理指定",
      "type": "select",
      "include-all": true,
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Static.png"
    },
    {
      ...groupBaseOption,
      "name": "兜底策略",
      "type": "select",
      "proxies": ["代理选择", "DIRECT"],
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png"
    },

    // ========== 服务分组（自动测速） ==========
    {
      ...serviceGroupOption,
      "name": "YouTube",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png"
    },
    {
      ...serviceGroupOption,
      "name": "Netflix",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png"
    },
    {
      ...serviceGroupOption,
      "name": "Disney+",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Disney+.png"
    },
    {
      ...serviceGroupOption,
      "name": "TikTok",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png"
    },
    {
      ...serviceGroupOption,
      "name": "Telegram",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png"
    },
    {
      ...serviceGroupOption,
      "name": "Twitter",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png"
    },
    {
      ...serviceGroupOption,
      "name": "AI服务",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png"
    },
    {
      ...serviceGroupOption,
      "name": "Spotify",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png"
    },
    {
      ...serviceGroupOption,
      "name": "Steam",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png"
    },
    {
      ...serviceGroupOption,
      "name": "GitHub",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png"
    },
    {
      ...serviceGroupOption,
      "name": "微软服务",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "url-test",
      "tolerance": 100,
      "proxies": ["DIRECT", "代理优选", "香港优选", "美国优选"],
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png"
    },
    {
      ...serviceGroupOption,
      "name": "谷歌服务",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png"
    },
    {
      ...serviceGroupOption,
      "name": "国际媒体",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/StreamingCN.png"
    },

    // ========== 地区优选组（智能匹配） ==========
    {
      ...groupBaseOption,
      "name": "香港优选",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)(🇭🇰|港|HK|Hong.*Kong)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "台湾优选",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)(🇹🇼|🇨🇳|台|TW|Taiwan)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "日本优选",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)(🇯🇵|日|JP|Japan|Tokyo)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "美国优选",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)(🇺🇸|美|US|United.*States|America|States|American)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      ...groupBaseOption,
      "name": "新国优选",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)(🇸🇬|新|坡|狮|SG|Singapore)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "其他地区",
      "type": "url-test",
      "include-all": true,
      "exclude-filter": "(?i)(🇭🇰|港|HK|Hong.*Kong|🇹🇼|🇨🇳|台|TW|Taiwan|🇯🇵|日|JP|Japan|Tokyo|🇺🇸|美|US|United.*States|America|States|American|🇸🇬|新|坡|狮|SG|Singapore)",
      "icon": "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = ruleProviders;

  // 覆盖规则
  config["rules"] = rules;

  // 为每个节点启用 UDP
  if (config["proxies"]) {
    config["proxies"].forEach(proxy => {
      proxy.udp = true;
    });
  }

  // 返回修改后的配置
  return config;
}
