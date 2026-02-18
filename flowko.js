var body = $response.body;
var obj = JSON.parse(body);

obj.success = true;

if (!obj.subscription) {
    obj.subscription = {};
}

obj.subscription.isPremium = true;
obj.subscription.productId = "com.flowko.yearly.pro"; // 模拟年度会员ID
obj.subscription.expiresAt = "2099-09-09T09:09:09.000Z"; // 设置过期时间到2099年

if (!obj.subscription.transactionId) {
    obj.subscription.transactionId = "100000000000000";
}

body = JSON.stringify(obj);
$done({body});
