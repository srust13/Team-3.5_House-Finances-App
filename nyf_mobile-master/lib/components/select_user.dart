import 'package:flutter/material.dart';
import 'package:nyf_mobile/components/icon_stack.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/user.dart' as User;
import 'package:nyf_mobile/data/variables.dart' as Variables;

class SelectUser extends StatefulWidget {
  SelectUser({
    Key key,
    this.users,
    this.padding = Variables.halfMargin,
    this.stack = false,
  }) : super(key: key);

  final List<User.User> users;
  final double padding;
  final bool stack;

  @override
  _SelectUserState createState() => _SelectUserState();
}

class _SelectUserState extends State<SelectUser> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        padding: EdgeInsets.symmetric(horizontal: Variables.halfMargin),
        scrollDirection: Axis.horizontal,
        itemCount: widget.users.length,
        itemBuilder: (BuildContext context, int index) {
          return Padding(
            padding: EdgeInsets.symmetric(horizontal: widget.padding),
            child: widget.stack
                ? IconStack(
                    user: widget.users[index],
                  )
                : UserIcon(user: widget.users[index]),
          );
        },
      ),
    );
  }
}
