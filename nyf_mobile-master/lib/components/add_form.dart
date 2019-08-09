import 'package:flutter/material.dart';
import 'package:nyf_mobile/components/select_user.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/household.dart';
import 'package:nyf_mobile/data/user.dart';
import 'package:nyf_mobile/data/variables.dart' as Variables;
import 'package:nyf_mobile/pages/review.dart';

class AddForm extends StatefulWidget {
  @override
  AddFormState createState() {
    return AddFormState();
  }

  static AddFormState of(BuildContext context) {
    final AddFormState navigator =
        context.ancestorStateOfType(const TypeMatcher<AddFormState>());

    assert(() {
      if (navigator == null) {
        throw new FlutterError("Buddy!");
      }
      return true;
    }());

    return navigator;
  }
}

class AddFormState extends State<AddForm> {
  final _formKey = GlobalKey<FormState>();
  bool isRecurring = false;
  Cycle billingCycle = Cycle.weekly;
  List<String> _selected = ["yo"];

  set selected(List<String> val) => setState(() => _selected = val);

  get selected => _selected;

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: <Widget>[
          Container(
            padding: EdgeInsets.symmetric(
              vertical: Variables.margin,
              horizontal: Variables.margin,
            ),
            child: TextFormField(
              decoration: InputDecoration(
                icon: Icon(
                  Icons.attach_money,
                  size: 30.0,
                ),
                hintText: "Total Amount \$",
                labelText: "Amount",
              ),
              validator: (value) {
                isNumeric(string) => num.tryParse(string) != null;
                if (!isNumeric(value)) {
                  return 'Please enter a valid number';
                }
                return null;
              },
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(
              vertical: Variables.halfMargin,
              horizontal: Variables.margin,
            ),
            alignment: Alignment.centerLeft,
            child: Text("Household Members"),
          ),
          Container(
            height: 120,
            child: SelectUser(
              users: sampleUsers,
              stack: true,
            ),
          ),
          // Text(selected.toString()),
          Row(
            children: <Widget>[
              Checkbox(
                value: isRecurring,
                onChanged: (bool newVal) {
                  setState(() {
                    isRecurring = newVal;
                  });
                },
              ),
              Text(
                "Recurring monthly transaction",
                style: Variables.defaultText,
              )
            ],
          ),
          // isRecurring
          //     ? Container(
          //         padding: EdgeInsets.all(Variables.margin),
          //         child: Row(
          //           children: <Widget>[
          //             Text(
          //               "Billing cycle?",
          //               style: Variables.defaultText,
          //             ),
          //             Spacer(),
          //             Container(
          //               child: DropdownButton<Cycle>(
          //                 value: billingCycle,
          //                 onChanged: (Cycle newValue) {
          //                   setState(() {
          //                     billingCycle = newValue;
          //                   });
          //                 },
          //                 items: Cycle.values.map((Cycle cycle) {
          //                   String cleanText =
          //                       cycle.toString().replaceAll("Cycle.", "");
          //                   return DropdownMenuItem<Cycle>(
          //                     child: Text(cleanText[0].toUpperCase() +
          //                         cleanText.substring(1)),
          //                     value: cycle,
          //                   );
          //                 }).toList(),
          //               ),
          //             )
          //           ],
          //         ),
          //       )
          //     : Container(),
          Container(
            padding: EdgeInsets.all(Variables.margin),
            child: Row(
              children: <Widget>[
                Expanded(
                  child: RaisedButton.icon(
                    onPressed: () {
                      if (_formKey.currentState.validate()) {
                        Scaffold.of(context).showSnackBar(
                            SnackBar(content: Text("Processing Data")));
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(builder: (context) => ReviewPage()),
                        // );
                      }
                    },
                    color: Colors.blueGrey,
                    icon: Icon(
                      Icons.navigate_next,
                      color: Colors.white,
                    ),
                    label: Text(
                      ("Review").toUpperCase(),
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
