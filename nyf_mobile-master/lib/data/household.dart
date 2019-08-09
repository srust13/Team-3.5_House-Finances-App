class Household {
  String name;
  List<String> people, current, transactions, recurring;
  DateTime billingStart;
  Cycle billingCycle;

  Household(
      String name,
      List<String> people,
      List<String> current,
      List<String> transactions,
      DateTime billingStart,
      Cycle billingCycle,
      List<String> recurring) {
    this.name = name;
    this.people = people;
    this.current = current;
    this.transactions = transactions;
    this.recurring = recurring;
    this.billingStart = billingStart;
    this.billingCycle = billingCycle;
  }
}

enum Cycle { immediate, daily, weekly, monthly }

List<Household> sampleHouseholds = [
  Household("best household", ["user-1", "user-2"], ["trans-1", "trans-2"],
      ["trans-1", "trans-2, trans-3"], new DateTime.now(), Cycle.weekly, [])
];
