import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/components/add_form.dart';
import 'package:nyf_mobile/components/select_user.dart';
import 'package:nyf_mobile/data/user.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/variables.dart' as Variables;

class IconStack extends StatefulWidget {
  final double width;
  final double height;
  final User user;

  IconStack(
      {Key key,
      this.width = Variables.userIconWidth,
      this.height = Variables.userIconHeight,
      this.user})
      : super(key: key);

  @override
  _IconStackState createState() => _IconStackState();
}

class _IconStackState extends State<IconStack> {
  bool _visible = false;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        UserIcon(user: widget.user),
        Opacity(
          opacity: _visible ? 1.0 : 0.0,
          child: Container(
            width: widget.width,
            height: widget.width,
            decoration: ShapeDecoration(
              color: Colors.blueGrey,
              shape: CircleBorder(),
            ),
            child: IconButton(
              icon: Icon(
                Icons.check,
              ),
              color: Colors.white,
              onPressed: () {
                setState(() {
                  // if (!_visible)
                  //   AddForm.of(context).selected =
                  //       AddForm.of(context).selected.add(widget.user.username);
                  // else
                  //   AddForm.of(context).selected = AddForm.of(context)
                  //       .selected
                  //       .remove(widget.user.username);
                  _visible = !_visible;
                });
              },
            ),
          ),
        ),
      ],
    );
  }
}
