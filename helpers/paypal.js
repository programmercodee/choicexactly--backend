const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AbqK9GVKh5-uw_0cDHHzrGTZaejxMWv6ApIJ9GseZrycgv3ZkE_sx7fKXKEwizbWa5daAT7GdpO7tGVY",
  client_secret: "ENeu9LzHu-IFvLjV6g89-VMZa4XZsNfNh2FaWhJ_GKTYbao16abL4mebfo-__D69WnfWdCFfMzgvFyVe",
});

module.exports = paypal;
