import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/data/user.dart';
import 'package:nyf_mobile/data/variables.dart' as Variables;

class UserIcon extends StatelessWidget {
  final double width;
  final double height;
  final User user;
  final bool label;

  UserIcon(
      {this.width = Variables.userIconWidth,
      this.height = Variables.userIconHeight,
      this.user,
      this.label = true});

  Widget build(BuildContext context) {
    return _buildUserIcon();
  }

  Widget _buildUserIcon() {
    return Column(
      children: <Widget>[
        Container(
          width: width,
          height: width,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.grey,
          ),
          child: Center(
            child:
                Text(user.firstName[0], style: TextStyle(fontSize: width / 2)),
          ),
        ),
        label
            ? Container(
                width: width,
                margin: EdgeInsets.only(top: 5.0),
                padding: EdgeInsets.only(top: width / 20),
                child: Text(user.firstName + " " + user.lastName,
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: (width / 4))),
              )
            : Container()
      ],
    );
  }
}
