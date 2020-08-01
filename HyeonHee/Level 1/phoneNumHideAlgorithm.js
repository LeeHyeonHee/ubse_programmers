function solution(phone_number) {
    var sub = phone_number.substr(0, phone_number.length-4);
    return phone_number.replace(sub, "*".repeat(sub.length));
}