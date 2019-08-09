class Transaction {
  String houseId, comment;
  DateTime dateTime;
  double totalPrice;
  List<UserAmt> people;
  String purchaser;

  Transaction(String houseId, String comment, DateTime dateTime,
      double totalPrice, List<UserAmt> people, String purchaser) {
    this.houseId = houseId;
    this.comment = comment;
    this.dateTime = dateTime;
    this.totalPrice = totalPrice;
    this.purchaser = purchaser;
    this.people = people;
  }
}

class UserAmt {
  String user; // this is a user id
  double amt;

  UserAmt(String user, double amt) {
    this.user = user;
    this.amt = amt;
  }
}

List<Transaction> sampleTrans = [
  Transaction("house-1", "toilet paper", (new DateTime(2019, 8, 8)), 21.97,
      [UserAmt("user-1", 12.97), UserAmt("user-2", 9)], "user-1"),
  Transaction(
      "house-1",
      "memes",
      (new DateTime(2019, 8, 7)),
      16.01,
      [
        UserAmt("user-1", 9),
        UserAmt("user-2", 7.01),
      ],
      "user-1"),
  Transaction(
      "house-1",
      "water",
      (new DateTime(2019, 8, 7)),
      8.35,
      [
        UserAmt("user-1", 2),
        UserAmt("user-2", 6.35),
      ],
      "user-1"),
  Transaction(
      "house-1",
      "groceries",
      (new DateTime(2019, 8, 6)),
      13.53,
      [
        UserAmt("user-1", 6.20),
        UserAmt("user-2", 7.33),
      ],
      "user-1"),
];
