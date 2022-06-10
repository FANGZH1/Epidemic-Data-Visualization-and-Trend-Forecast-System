from flask import Flask
from flask import render_template
from flask import jsonify
import utils


app = Flask(__name__)


@app.route('/')
def moban():
    return render_template("main.html")


''''@app.route('/time')
def get_time():
    return utils.get_time()
'''

@app.route('/center_1_chinaIncr')
def get_c1_chinadataIncr():
    data = utils.get_c1_chinadataIncr()
    return jsonify({"chinaconfirmedIncr": data[0], "chinasuspectedCount": data[1], "chinacuredIncr": data[2], "chinadeadIncr": data[3]})


@app.route('/center_1_chinaCount')
def get_c1_chinadataCount():
    data = utils.get_c1_chinadataCount()
    return jsonify({"chinacurrentconfirmedCount": data[0], "chinaconfirmedCount": data[1], "chinacuredCount": data[2], "chinadeadCount": data[3]})


@app.route('/center_2')
def get_c2_chinadata():
    res = []
    for tup in utils.get_c2_data():
        res.append({"name": tup[0], "value": int(tup[1])})
    return jsonify({"data": res})


@app.route("/left_1")
def get_l1_data():
    data = utils.get_l1_data()
    date_id, confirmed_incr, dead_incr, cured_incr = [], [], [], []
    for a, b, c, d in data:
        date_id.append(a)  # a是datatime类型 .strftime("%m-%d")
        confirmed_incr.append(b)
        dead_incr.append(c)
        cured_incr.append(d)
    return jsonify({"date_id": date_id, "confirmed_incr": confirmed_incr,  "dead_incr": dead_incr,"cured_incr": cured_incr})


@app.route("/right_1")
def get_r1_data():
    data = utils.get_r1_data()
    date_id, confirmed, dead, cured = [], [], [], []
    for a, b, c, d in data:
        date_id.append(a)  # a是datatime类型 .strftime("%m-%d")
        confirmed.append(b)
        dead.append(c)
        cured.append(d)
    return jsonify({"date_id": date_id, "confirmed": confirmed,  "dead": dead, "cured": cured})



@app.route("/right_2")
def get_r2_data():
    data1 = utils.get_r2_fitdata()
    data2 = utils.get_r2_preddata()
    date_id, confirmedCountPred, confirmedTrueData, confirmedIncrPred, confirmedIncrTrueData = [], [], [], [], []
    for a, b, c, d, e in data1:
        date_id.append(a)  # a是datatime类型 .strftime("%m-%d")
        confirmedCountPred.append(b)
        confirmedTrueData.append(c)
        confirmedIncrPred.append(d)
        confirmedIncrTrueData.append(e)
    for i, j in data2:
        date_id.append(i)
        confirmedCountPred.append(j)
    return jsonify({"date_id": date_id, "confirmedCountPred": confirmedCountPred,  "confirmedTrueData": confirmedTrueData, "confirmedIncrPred": confirmedIncrPred, "confirmedIncrTrueData": confirmedIncrTrueData})


@app.route("/left_3")
def get_l3_data():
    data = utils.get_l3_data()
    # end_update_time, province, city, county, address, type
    details = []
    end_update_time = data[0][0]
    for a in data:
        details.append(a)
    return jsonify({"update_time": end_update_time, "details": details})



@app.route("/left_2")
def get_l2_data():
    data = utils.get_l2_data()
    # end_update_time, province, city, county, address, type
    details = []
    risk = []
    end_update_time = data[0][0]
    for a, b, c, d, e, f in data:
        risk.append(f)
        details.append(f"{b}\t{c}\t{d}\t{e}")
    return jsonify({"update_time": end_update_time, "details": details, "risk": risk})


if __name__ == '__main__':
    app.run()

